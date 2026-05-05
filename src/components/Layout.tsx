import { motion } from 'motion/react';
import { ShoppingBag, ChevronDown, User, Search, Globe, MessageSquare } from 'lucide-react';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: 'HOME' | 'STORY' | 'DETAIL') => void;
  currentPage: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate, currentPage }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F9F8F6]/80 backdrop-blur-md transition-all duration-300">
        <div className="flex justify-between items-center w-full px-8 md:px-20 py-8 max-w-spacing-max-width mx-auto">
          <div className="flex-1 flex gap-8 items-center">
            <button 
              onClick={() => onNavigate('HOME')}
              className={`font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-light pb-1 transition-all duration-500 ease-out hover:text-on-surface
                ${currentPage === 'HOME' ? 'text-on-surface border-b border-on-surface/30' : 'text-primary'}`}
            >
              Shop All
            </button>
            <button className="hidden md:block font-sans text-xs tracking-[0.2em] uppercase font-light text-primary hover:text-on-surface transition-all duration-500 ease-out">
              Collections
            </button>
          </div>

          <div className="flex-1 text-center">
            <span 
              onClick={() => onNavigate('HOME')}
              className="text-xl md:text-2xl font-serif font-medium tracking-[0.3em] text-on-surface uppercase cursor-pointer"
            >
              ARCHITECT
            </span>
          </div>

          <div className="flex-1 flex justify-end gap-8 items-center">
            <button 
              onClick={() => onNavigate('STORY')}
              className={`font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-light transition-all duration-500 ease-out hover:text-on-surface
                ${currentPage === 'STORY' ? 'text-on-surface border-b border-on-surface/30' : 'text-primary'}`}
            >
              Our Story
            </button>
            <div className="flex gap-4 ml-4 md:ml-8">
              <Search className="w-5 h-5 text-on-surface cursor-pointer stroke-[1.5px]" />
              <ShoppingBag className="w-5 h-5 text-on-surface cursor-pointer stroke-[1.5px]" />
              <User className="w-5 h-5 text-on-surface cursor-pointer stroke-[1.5px]" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-32">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full relative bg-[#F9F8F6] border-t border-surface-container-high py-24 px-8 md:px-20 mt-32">
        <div className="flex flex-col items-center gap-12 max-w-spacing-max-width mx-auto">
          <div className="text-lg tracking-[0.2em] font-serif font-medium text-on-surface uppercase">
            ARCHITECT
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Sustainability', 'Shipping & Returns', 'Privacy', 'Contact', 'Press'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="font-sans text-[10px] tracking-[0.15em] uppercase font-light text-primary hover:text-on-surface transition-all duration-300 underline-offset-4 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            <Globe className="w-5 h-5 text-outline cursor-pointer hover:text-on-surface transition-colors stroke-[1.5px]" />
            <MessageSquare className="w-5 h-5 text-outline cursor-pointer hover:text-on-surface transition-colors stroke-[1.5px]" />
          </div>

          <p className="font-sans text-[10px] tracking-[0.15em] uppercase font-light text-outline">
            © 2024 ARCHITECT. ATELIER OF REFINEMENT.
          </p>
        </div>
      </footer>
    </div>
  );
};
