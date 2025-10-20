import { useRef, useEffect } from 'react';
import { type Message } from '../services/chat.service';

interface ChatProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export default function Chat({ messages, isLoading, error }: ChatProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 pl-4 sm:pl-24 space-y-3 sm:space-y-4 relative z-10">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[85%] sm:max-w-[70%] p-3 sm:p-4 rounded-2xl shadow-sm ${
              msg.role === 'user'
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 border border-gray-200'
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold mb-1">
              {msg.role === 'user' ? 'Tú' : 'Tutor'}
            </p>
            <p className="font-body text-base sm:text-lg whitespace-pre-wrap break-words">
              {msg.parts}
            </p>
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="flex justify-center px-2">
          <div className="bg-red-100 text-red-700 p-3 sm:p-4 rounded-2xl shadow-sm max-w-full">
            <p className="text-sm sm:text-base break-words">{error}</p>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
}