import { Request, Response } from 'express';
import { ApiResponse } from '../types';

/**
 * @swagger
 * /chat:
 *   get:
 *     summary: Get a sample AI response
 *     description: Returns a random sample response from an AI
 *     tags: [Chat]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "AI response generated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     response:
 *                       type: string
 *                       example: "Hello! How can I assist you today?"
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *       500:
 *         description: Error response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 *                 data:
 *                   type: object
 *                   properties:
 *                     response:
 *                       type: string
 *                       example: ""
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 */
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

