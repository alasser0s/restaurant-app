"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div style={{backgroundImage: `url('/hero.jpg')`}} className="absolute inset-0 bg-cover bg-center"></div>
      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        transition={{duration:1}}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl font-serif text-gold mb-4 drop-shadow-lg">Experience True Italian Luxury</h1>
        <p className="text-gray-300 max-w-xl mx-auto font-light text-lg mb-8">
          Savor the flavors of Italy in an atmosphere of modern elegance.
        </p>
        <a href="/booking" className="inline-block bg-gold text-black font-semibold px-6 py-3 rounded hover:opacity-90 transition">
          Reserve a Table
        </a>
      </motion.div>
    </section>
  );
}
