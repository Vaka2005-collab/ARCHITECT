import { motion } from 'motion/react';
import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

interface HomeProps {
  onProductClick: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onProductClick }) => {
  return (
    <div className="max-w-spacing-max-width mx-auto px-8 md:px-20">
      {/* Editorial Header */}
      <header className="mb-24 md:mb-32 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-7xl text-on-surface mb-8 italic font-light tracking-tight"
        >
          Objects of Grace
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="font-sans text-lg md:text-xl text-secondary max-w-2xl mx-auto font-light leading-relaxed px-4"
        >
          An exploration of structural fluidity and architectural precision. Each silhouette is a study in balance, crafted for the modern movement.
        </motion.p>
      </header>

      {/* Subtle Filters */}
      <div className="flex justify-between items-center mb-16 border-b border-surface-container-high pb-6">
        <div className="flex gap-12">
          <button className="font-sans text-[10px] md:text-xs text-on-surface tracking-[0.2em] flex items-center gap-2 font-semibold">
            FILTER <ChevronDown className="w-3 h-3" />
          </button>
          <div className="hidden lg:flex gap-10">
            {['STILETTOS', 'BLOCK HEELS', 'ARCHIVES'].map((filter) => (
              <span 
                key={filter}
                className="font-sans text-[10px] md:text-xs text-secondary tracking-[0.2em] cursor-pointer hover:text-on-surface transition-colors font-medium"
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
        <div className="font-sans text-[10px] md:text-xs text-secondary tracking-[0.2em] font-medium">
          SORT BY: <span className="text-on-surface ml-2">NEW ARRIVALS</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {PRODUCTS.map((product, idx) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={onProductClick}
            offset={idx === 1 || idx === 4}
          />
        ))}
      </div>

      {/* Reveal More */}
      <div className="mt-40 mb-20 flex flex-col items-center gap-8">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-on-surface text-surface-container-lowest px-16 py-5 rounded-full font-sans text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all duration-500 ease-out font-medium"
        >
          Reveal More
        </motion.button>
        <span className="font-sans text-[10px] text-secondary tracking-[0.15em] font-medium">
          VIEWING 6 OF 24 MODELS
        </span>
      </div>
    </div>
  );
};
