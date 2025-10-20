import { GoogleGenAI, type Chat } from "@google/genai";
import { systemPrompt } from "./system.prompt";

export interface Message {
  role: 'user' | 'model';
  parts: string;
}

class ChatService {
  private ai: GoogleGenAI;
  private chats: { [key: string]: Chat } = {};

  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
    if (!apiKey) {
      console.error('⚠️ No se encontró VITE_GEMINI_API_KEY en las variables de entorno');
    }
    this.ai = new GoogleGenAI({
      apiKey: apiKey,
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const chat = this.ai.chats.create({
        model: "gemini-2.0-flash-exp",
        history: [],
        config: {
          systemInstruction: systemPrompt,
        },
      });

      const response = await chat.sendMessage({
        message,
      });

      return response.text ?? '';
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      throw error;
    }
  }

  async sendMessageWithHistory(message: string, history: Message[], sessionId: string = 'default'): Promise<string> {
    try {
      if (!this.chats[sessionId]) {
        this.chats[sessionId] = this.ai.chats.create({
          model: "gemini-2.5-flash",
          history: history.map(msg => ({
            role: msg.role,
            parts: [{ text: msg.parts }]
          })),
          config: {
            systemInstruction: systemPrompt,
          },
        });
      }

      const chat = this.chats[sessionId];
      const response = await chat.sendMessage({
        message,
      });

      return response.text ?? '';
    } catch (error) {
      console.error("Error al enviar mensaje con historial:", error);
      throw error;
    }
  }

  clearSession(sessionId: string = 'default') {
    delete this.chats[sessionId];
  }
}

export const chatService = new ChatService();