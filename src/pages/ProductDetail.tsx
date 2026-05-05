import { motion } from 'motion/react';
import React from 'react';
import { SILK_STILETTO, PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailProps {
  productId: string;
  onNavigateHome: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigateHome }) => {
  // For this demo, we'll mostly use the Silk Stiletto as the detail example
  const product = SILK_STILETTO;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-spacing-max-width mx-auto px-8 md:px-20"
    >
      {/* Hero Product Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-40">
        {/* Left Side: Image Gallery */}
        <div className="lg:col-span-7 grid grid-cols-1 gap-10">
          <div className="editorial-frame aspect-[16/18]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="editorial-frame">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf25GkHf-_VvmwGxEYs4m0azWt92u7EznqaLk0cOBFaQ3TfIqI3cVzuuI7NXTk786gfNbHhqKSp4e-p6AJTmv0bGwEFgERt1TNnAOufUG8AnZaq4OkrchE-HF3UHWBn6jsQPNdAGyNkI7muCQroqOvVKwMGjm9dSjK6e02pkMoB5ITYkD79qLtbwWFhE-duVjIVpDOnCSrxEXoWiyNpnYKUNYaxBquNIqU-c7LwVBJqJwIzhoq-pd3XE5wLviWhLd16knsJqYx1USI"
                className="w-full h-full object-cover"
                alt="Detail"
              />
            </div>
            <div className="editorial-frame">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMqYLf3QhHpiOzzf1-j5JZA2zy6CIUiKFgvcoAsaQSrh9eBP_dMAXJpP5JINTZsnK0e9Yhg3umqTKdBQFE7oVx2bDHn93RxU1ToDobhSXhxpFrQQXeNPHl-fEq465xH1fej9vUknVfUPXyA6I0Xi1SwYsXPG2eYL2RymNOuv_2WuW0JfD_aqaLPQSUBGYC96myQipt2halrg8OJfPm_eRTmEh_0cgdVlPKW88SVioXzrqzeQHR37cXDdKpoKsBdpVLMgqOpvk22WJ"
                className="w-full h-full object-cover"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:col-span-5 lg:sticky lg:top-48 flex flex-col gap-12 pt-8">
          <header className="flex flex-col gap-6">
            <span className="font-sans text-[10px] text-primary uppercase tracking-[0.2em] font-semibold">Atelier Collection</span>
            <h1 className="font-serif text-3xl md:text-5xl text-on-surface leading-tight italic font-light">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 text-on-surface">
              <span className="font-serif text-2xl">${product.price}</span>
              <span className="text-secondary text-[11px] uppercase tracking-wider">/ inclusive of duty</span>
            </div>
          </header>

          <div className="flex flex-col gap-10">
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed max-w-md font-light">
              {product.description}
            </p>

            <div className="space-y-6">
              <span className="font-sans text-[10px] text-on-surface uppercase tracking-[0.2em] block font-bold">Select Size</span>
              <div className="flex flex-wrap gap-3">
                {[36, 37, 38, 39, 40].map((size) => (
                  <button 
                    key={size}
                    className={`w-14 h-14 flex items-center justify-center border text-sm transition-all duration-300
                      ${size === 37 ? 'bg-on-surface text-surface-container-lowest border-on-surface' : 'border-outline-variant hover:border-on-surface'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-6 bg-on-surface text-surface-container-lowest font-sans text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all duration-500 ease-out font-semibold">
              Add to Bag
            </button>

            <div className="flex flex-col gap-4 border-t border-surface-container-high pt-8">
              {['Composition & Care', 'Shipping & Returns'].map((item) => (
                <div key={item} className="flex justify-between items-center py-2 cursor-pointer group">
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-on-surface">{item}</span>
                  <motion.span animate={{ rotate: 0 }} className="text-on-surface text-xs leading-none">↓</motion.span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="mb-section-gap flex flex-col gap-24">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <span className="font-sans text-[10px] text-primary uppercase tracking-[0.2em] font-bold">The Atelier Process</span>
          <h2 className="font-serif text-4xl text-on-surface italic">Artisanal Purity</h2>
          <p className="font-sans text-lg text-on-surface-variant font-light">
            Each ARCHITECT piece is a culmination of thirty-four hours of manual assembly. We utilize heritage techniques preserved by third-generation artisans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="editorial-frame order-2 lg:order-1 aspect-[16/14]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJIIgelFEQ4OSbytlTXQx3-6IKlCQtAiZ1SKdgwdhJ4zZF3GzXC3kSQXsw_YK5vmw5jP4Dj3aU0gLMo74oNBEIr5_0nJ5a3IUyLyYds9QFuLg9z7YtyZ5uA6Ty_r0lCYytkBLG8q9oGXODu5S6hPzMz_FY8LApnB4UQMtGuBXZ6nwZunzsRMiovbwGGPi9vZt6qxIq_aQw6N9XqxOXXspBzBqcZIjns7dVKeCHCFHxKv-tvMvWdqcBwdiHAWZdGozlPoyerkJmdC8w"
              className="w-full h-full object-cover grayscale"
              alt="Artisan"
            />
          </div>
          <div className="flex flex-col gap-12 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Nappa Silk</h3>
              <p className="text-on-surface-variant max-w-md font-light leading-relaxed">
                Our signature silk is woven with a higher thread count to provide structural integrity while maintaining the soft, airy drape of luxury hosiery.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Hand-finished</h3>
              <p className="text-on-surface-variant max-w-md font-light leading-relaxed">
                Every seam is closed by hand, ensuring that no mechanical tension compromises the organic fluidity of the silhouette.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated For You */}
      <section className="mb-section-gap">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="font-sans text-[10px] text-primary uppercase tracking-[0.2em] font-bold">Curated For You</span>
            <h2 className="font-serif text-3xl italic">Refined Pairings</h2>
          </div>
          <button 
            onClick={onNavigateHome}
            className="font-sans text-[10px] uppercase tracking-[0.1em] border-b border-on-surface pb-1 hover:text-primary transition-colors font-bold"
          >
            Shop All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.slice(0, 3).map((p) => (
            <div key={p.id} className="flex flex-col gap-6 group cursor-pointer">
              <div className="editorial-frame relative">
                <img src={p.image} className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0" alt={p.name} />
              </div>
              <div className="text-center">
                <h4 className="font-serif text-lg">{p.name}</h4>
                <p className="text-primary text-sm italic mt-1">${p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
