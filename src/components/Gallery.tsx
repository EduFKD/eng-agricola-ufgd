import { motion } from 'motion/react';
import { Camera, Compass, Cpu, Droplet, Check } from 'lucide-react';

const media = [
  {
    id: 'field',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
    title: 'Atividades de Campo e Cultivos',
    category: 'Fazenda Experimental & Aulas Práticas',
    desc: 'Experimentos agronômicos a campo, análise de desenvolvimento vegetal, amostragem de solo e avaliação prática de produtividade com alunos.',
    tags: ['Acompanhamento de Safra', 'Manejo de Solo', 'Ensaios Práticos'],
    icon: <Camera className="w-4 h-4" />,
    cols: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'visits',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    title: 'Visitas Técnicas & Indústria',
    category: 'Agroindústria & Empresas',
    desc: 'Imersão em usinas, fábricas de implementos agrícolas e cooperativas do MS.',
    tags: ['Networking', 'Vivência Fabril'],
    icon: <Compass className="w-4 h-4" />,
    cols: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'machinery',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    title: 'Mecanização & Diagnóstico',
    category: 'Laboratório de Máquinas',
    desc: 'Ensaios dinâmicos de motores, regulagem de semeadoras e telemetria de tratores.',
    tags: ['Telemetria', 'Regulagem'],
    icon: <Cpu className="w-4 h-4" />,
    cols: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'irrigation',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1200&q=80',
    title: 'Sistemas e Manejo de Irrigação',
    category: 'Laboratório de Hidráulica & Irrigação',
    desc: 'Dimensionamento de redes pressurizadas, testes de uniformidade em aspersão e automação de controle hídrico por estações meteorológicas.',
    tags: ['Automação Hídrica', 'Pivô & Microaspersão', 'Eficiência de Água'],
    icon: <Droplet className="w-4 h-4" />,
    cols: 'md:col-span-2 md:row-span-1'
  }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-slate-950 text-white" id="vivencia">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            Vivência Universitária
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black mb-4 tracking-tight"
          >
            Mão na <span className="text-emerald-400">Massa</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            A formação do Engenheiro Agrícola na UFGD alia sólidos fundamentos científicos a intensas experiências práticas em laboratórios, fazenda experimental e visitas técnicas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[280px]">
          {media.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-end p-6 ${item.cols}`}
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.category}`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 group-hover:via-slate-950/60 transition-colors" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider w-fit mb-2 backdrop-blur-md">
                  {item.icon}
                  <span>{item.category}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700/60 text-[11px] font-medium text-emerald-300/90 backdrop-blur-sm"
                    >
                      <Check className="w-3 h-3 text-emerald-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
