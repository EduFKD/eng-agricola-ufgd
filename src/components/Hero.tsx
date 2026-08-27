import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-6 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-full text-emerald-200 font-semibold tracking-widest text-xs uppercase"
        >
          <Leaf className="w-5 h-5" />
          <span>UFGD - Universidade Federal da Grande Dourados</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] drop-shadow-lg"
        >
          Engenharia <span className="text-emerald-400">Agrícola</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl drop-shadow-md font-medium"
        >
          Transforme o futuro do agronegócio com tecnologia, inovação e sustentabilidade. 
          Prepare-se para uma das profissões mais promissoras do Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#areas" className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-sm">
            Descubra o Curso
          </a>
          <a href="https://portal.ufgd.edu.br/vestibular" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-sm">
            Inscreva-se no Vestibular <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Role para baixo</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
