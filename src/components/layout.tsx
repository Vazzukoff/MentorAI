import { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-0 sm:p-4">
      <div className="w-full max-w-4xl h-full sm:h-[95vh] bg-amber-50 shadow-2xl sm:rounded-2xl flex flex-col overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(#e5e5e5_1px,transparent_1px)] bg-[length:100%_32px] opacity-30 pointer-events-none" />
        
        <div className="hidden sm:flex absolute left-8 top-0 bottom-0 w-6 flex-col justify-around items-center py-12 pointer-events-none z-20">
          <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 shadow-inner" />
          <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 shadow-inner" />
          <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 shadow-inner" />
        </div>
        
        <div className="hidden sm:block absolute left-20 top-0 bottom-0 w-0.5 bg-red-300 opacity-50 pointer-events-none z-10" />
        
        {children}
      </div>
    </div>
  );
}