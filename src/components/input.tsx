import { useState, type FormEvent } from 'react';
import { LuSend } from 'react-icons/lu';

interface InputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function Input({ onSendMessage, disabled = false }: InputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="relative z-30 pl-0 sm:pl-20">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-3 sm:p-4 bg-amber-50 backdrop-blur-sm border-t border-gray-200"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          disabled={disabled}
          className="flex-1 font-body p-2.5 sm:p-3 text-base rounded-xl border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          className="bg-red-400 text-white p-2.5 sm:p-3 rounded-xl hover:bg-red-500 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0"
        >
          <LuSend size={18} className="sm:w-5 sm:h-5" />
        </button>
      </form>
    </div>
  );
}