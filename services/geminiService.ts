import { GoogleGenAI, FunctionDeclaration, Type, Tool, Chat, FunctionCall } from "@google/genai";

// Mock database for appointments
const AVAILABLE_SLOTS = [
  "Monday 9:00 AM",
  "Monday 2:00 PM",
  "Tuesday 10:30 AM",
  "Wednesday 4:00 PM",
  "Friday 11:00 AM"
];

// Tools Definition
const checkAvailabilityTool: FunctionDeclaration = {
  name: 'checkAvailability',
  description: 'Check for available hygiene appointment slots for existing patients.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      patientName: {
        type: Type.STRING,
        description: "The full name of the patient."
      }
    },
    required: ['patientName']
  }
};

const bookAppointmentTool: FunctionDeclaration = {
  name: 'bookAppointment',
  description: 'Book a specific appointment slot for a patient.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      slot: {
        type: Type.STRING,
        description: "The time slot to book (e.g., 'Monday 9:00 AM')."
      },
      patientName: {
        type: Type.STRING,
        description: "The full name of the patient."
      }
    },
    required: ['slot', 'patientName']
  }
};

const tools: Tool[] = [{
  functionDeclarations: [checkAvailabilityTool, bookAppointmentTool]
}];

let chatSession: Chat | null = null;

export const initializeChat = () => {
  // Using process.env.API_KEY directly as per guidelines.
  // The application must have this environment variable configured.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the AI Concierge for Moses Lake Family Dentistry, a luxury dental practice. 
      Your tone is sophisticated, warm, and professional. 
      Your primary goal is to help *existing* patients schedule hygiene appointments.
      
      Rules:
      1. Always greet the user warmly and ask if they are a new or existing patient.
      2. If they are NEW, politely direct them to call our VIP line at (555) 012-3456 for a comprehensive intake.
      3. If they are EXISTING, ask for their full name to access their records.
      4. Once you have the name, use the 'checkAvailability' tool to see open slots.
      5. Present the slots to the user clearly.
      6. Once they pick a slot, use 'bookAppointment' to confirm.
      7. Keep responses concise and elegant.
      
      Do not make up fake appointment times outside of the tool's return values.`,
      tools: tools,
    }
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "System Error: Initialization failed.";
  }

  try {
    let result = await chatSession.sendMessage({ message });
    
    // Check for function calls using the SDK getter
    const calls = result.functionCalls;

    if (calls && calls.length > 0) {
        // Execute tools
        const functionResponses = calls.map((call: FunctionCall) => {
            let responseContent = {};
            const args = call.args as any;

            if (call.name === 'checkAvailability') {
                responseContent = { slots: AVAILABLE_SLOTS };
            } else if (call.name === 'bookAppointment') {
                 responseContent = { status: "confirmed", message: `Appointment booked for ${args.slot}` };
            }

            return {
                functionResponse: {
                    name: call.name,
                    response: responseContent
                }
            };
        });

        // Send tool response back to model
        // chat.sendMessage only accepts the 'message' parameter.
        result = await chatSession.sendMessage({ message: functionResponses });
    }

    return result.text || "";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm having trouble connecting to our scheduling system at the moment. Please try again shortly.";
  }
};