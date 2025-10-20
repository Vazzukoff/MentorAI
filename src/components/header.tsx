import { FaRegTrashAlt } from "react-icons/fa";

interface HeaderProps {
  onClearChat: () => void;
}

export default function Header({ onClearChat }: HeaderProps) {
  return (
    <div className="relative z-30 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200 p-6 pl-24">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-title text-3xl font-bold text-amber-700 flex items-center gap-3">
            <span className="text-4xl">📚</span>
            MentorAI
          </h1>
          <p className="text-sm font-subtitle text-gray-600 mt-1">
            Tu asistente personal de estudio
          </p>
        </div>
        <button
          onClick={onClearChat}
          className="px-4 py-2 text-white bg-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition font-medium border border-gray-300 hover:border-red-300 flex items-center gap-2"
        >
          <FaRegTrashAlt />
          Limpiar Chat
        </button>
      </div>
    </div>
  );
}