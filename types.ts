import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface TechItem {
  title: string;
  description: string;
  imageUrl: string;
}

export enum AppointmentStatus {
  IDLE = 'IDLE',
  CHECKING = 'CHECKING',
  AVAILABLE = 'AVAILABLE',
  BOOKED = 'BOOKED'
}