import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Calendar } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Hello! I am the AI Concierge for Moses Lake Family Dentistry. How may I assist you today? I can help schedule hygiene appointments for existing patients.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);
    
    const botMsg: Message = { 
      id: (Date.now() + 1).toString(), 
      role: 'model', 
      text: responseText 
    };
    
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-brand-red text-white p-4 rounded-full shadow-2xl hover:bg-brand-redHover transition-transform transform hover:scale-110 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[95vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-navy-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-brand-red p-2 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Concierge AI</h3>
                <p className="text-xs text-slate-300 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-300' : 'bg-navy-100 text-navy-900'}`}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                   </div>
                   <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                     msg.role === 'user' 
                       ? 'bg-navy-900 text-white rounded-tr-none' 
                       : 'bg-white border border-slate-200 text-navy-800 rounded-tl-none shadow-sm'
                   }`}>
                     {msg.text}
                   </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-400 flex items-center gap-2">
                   <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce delay-100"></div>
                   <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce delay-200"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm text-navy-900"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-brand-red hover:bg-brand-red/10 rounded-lg transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Powered by Google Gemini. For emergencies, call 911.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
