import { Request, Response } from 'express';
import { ApiResponse } from '../types';

export const getChatResponse = (req: Request, res: Response<ApiResponse>) => {
  try {
    const sampleResponses = [
      "Hello! How can I assist you today?",
      "I'm an AI here to help with your questions.",
      "The weather is nice today, isn't it?",
      "Did you know that TypeScript is a superset of JavaScript?",
      "I'm sorry, I don't have an answer for that."
    ];
    
    const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
    
    const response: ApiResponse = {
      success: true,
      message: "AI response generated successfully",
      data: {
        response: randomResponse,
        timestamp: new Date().toISOString()
      }
    };
    
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: {
        response: "",
        timestamp: new Date().toISOString()
      }
    });
  }
};