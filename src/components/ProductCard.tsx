import { motion } from 'motion/react';
import React from 'react';
import { Product } from '../constants';

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
  offset?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, offset }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`group cursor-pointer ${offset ? 'mt-12 lg:mt-24' : ''}`}
      onClick={() => onClick(product.id)}
    >
      <div className="editorial-frame mb-6">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="text-center px-4">
        <h3 className="font-serif text-xl mb-1 text-on-surface leading-snug">
          {product.name}
        </h3>
        <p className="font-sans text-[10px] text-secondary tracking-[0.2em] uppercase font-semibold">
          {product.material}
        </p>
        <p className="font-sans text-sm mt-4 text-on-surface-variant italic">
          ${product.price}
        </p>
      </div>
    </motion.div>
  );
};
