import { FaRegTrashAlt } from "react-icons/fa";
import Logo from "../assets/Logo.png";

interface HeaderProps {
  onClearChat: () => void;
}

export default function Header({ onClearChat }: HeaderProps) {
  return (
    <div className="relative z-30 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200 p-4 sm:p-6 pl-4 sm:pl-24">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo + subtítulo */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={Logo}
              alt="Mentor AI Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <p className="text-xs sm:text-sm font-subtitle text-gray-600 mt-1 truncate sm:whitespace-normal">
            Tu asistente personal de estudio
          </p>
        </div>

        {/* Botón limpiar chat */}
        <button
          onClick={onClearChat}
          className="px-3 py-2 sm:px-4 text-white bg-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition font-medium border border-gray-300 hover:border-red-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base whitespace-nowrap flex-shrink-0"
        >
          <FaRegTrashAlt className="text-sm sm:text-base" />
          <span className="hidden xs:inline sm:inline">Limpiar</span>
          <span className="hidden sm:inline">Chat</span>
        </button>
      </div>
    </div>
  );
}