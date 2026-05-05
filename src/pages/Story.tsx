import { motion } from 'motion/react';
import React from 'react';

export const Story: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-spacing-max-width mx-auto"
    >
      {/* Hero Section */}
      <section className="px-8 md:px-20 mb-40">
        <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-surface-container">
          <img 
            className="w-full h-full object-cover brightness-[0.85]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbMs7b6SOUBf6WA7s8J9RkjQZR2WxIa_k_MVtaarZBwrW3ru4OLhre35-ONkkCN_nC1SDTsSSkTitzDBC_w26EaLoRk4gFcl-VHpIg30b08QVVLJPnVn1aPY16JN_iu-QrA-lrQM965BxbcWYhmqz99VdoYCEeT_BjzWXwRPVkokSitLIk4fMryEdVI8wU1x23mRHaUKJgtIjs_5_ol8dRpK2JNtORccvsoATkwr0_j8c-kjuGzzpTcglTkKUBS_GfJ2sSzINj2qwL"
            alt="Atelier"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 bg-gradient-to-t from-stone-900/40 to-transparent">
            <h1 className="font-serif text-4xl md:text-7xl text-[#F9F8F6] max-w-2xl leading-tight font-light italic">
              The Spirit <br />of Craft.
            </h1>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="px-8 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-40">
        <div className="lg:col-start-2 lg:col-span-5 flex flex-col justify-center gap-8">
          <span className="font-sans text-[10px] text-primary uppercase tracking-[0.2em] font-bold">EST. 2024</span>
          <p className="font-serif text-2xl md:text-3xl text-on-surface italic leading-snug">
            "We do not build for the moment. We compose for the lifetime. Every seam, every shadow, and every surface is a deliberate act of restraint."
          </p>
          <p className="font-sans text-lg text-on-surface-variant leading-relaxed font-light">
            ARCHITECT was born from a singular obsession: the removal of the unnecessary. We believe that true refinement isn't found in what is added, but in the clarity of what remains. Our atelier is a sanctuary where traditional craftsmanship meets the fluidity of modern motion.
          </p>
        </div>
        <div className="lg:col-start-8 lg:col-span-4 aspect-[3/4] bg-surface-container-low overflow-hidden editorial-frame">
          <img 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXO8qKc3HYYZl3tfVhlQkKVxnT2w-7lU_YYFMsSChKUjpVmfi9XmurdWPN2IaOb58RJWW56miNtdvikCMOszJOTfbhA1HEnCXhvvVFHvcWB3WB1tsmVixuzy0eACHa_hFGtth5NCwsoWBgouFWmRV9Tws8zd8_JJXMpelegDaKgPm2DBphJuT_IxCRv1AOeIDtz3ldokZyMpr9bikyxrxZ3-iki6TchMLhj_mwUv0RXGxpUk1nDxT5zKqC29jJiOCvAOBNvNcC1Wu1"
            alt="Touch"
          />
        </div>
      </section>

      {/* Pull Quote */}
      <section className="px-8 md:px-20 py-40 border-t border-surface-container-high text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-on-surface leading-tight mb-12 font-light">
          Architecture for the <br />
          <span className="italic">Human Soul.</span>
        </h2>
        <div className="w-12 h-px bg-outline mx-auto mb-12"></div>
        <p className="font-sans text-[10px] text-primary uppercase tracking-[0.2em] font-bold">
          THE ARCHITECT PHILOSOPHY
        </p>
      </section>
    </motion.div>
  );
};
