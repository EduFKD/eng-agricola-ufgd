import { motion } from 'motion/react';
import { Tractor, Droplets, Warehouse, Wheat, Zap, CheckCircle2 } from 'lucide-react';

const areas = [
  {
    id: 1,
    title: "Máquinas e Mecanização",
    badge: "Agricultura de Precisão & Frotas",
    caption: "Tratores de alta potência, colhedoras inteligentes e drones",
    icon: <Tractor className="w-6 h-6" />,
    desc: "Projetos, calibração e gestão de tratores, colhedoras e implementos. Aplicação de telemetria, sensores IoT, piloto automático via GPS e automação de frotas agrícolas.",
    highlights: ["Piloto Automático & GPS", "Drones & Telemetria", "Mecânica Agrícola Avançada"],
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80",
    color: "from-amber-500 to-amber-700",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30"
  },
  {
    id: 2,
    title: "Engenharia de Água e Solo",
    badge: "Gestão Hídrica & Conservação",
    caption: "Pivôs centrais inteligentes, fertirrigação e manejo de bacias",
    icon: <Droplets className="w-6 h-6" />,
    desc: "Dimensionamento e controle de sistemas de irrigação de alta precisão (pivô central, microaspersão e gotejamento), conservação contra erosão e gestão sustentável de recursos hídricos.",
    highlights: ["Pivô Central & Gotejamento", "Fertirrigação Automatizada", "Conservação do Solo"],
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1200&q=80",
    color: "from-sky-500 to-sky-700",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30"
  },
  {
    id: 3,
    title: "Construções Rurais e Ambiência",
    badge: "Estruturas & Climatização",
    caption: "Estábulos modernos, galpões inteligentes e bem-estar animal",
    icon: <Warehouse className="w-6 h-6" />,
    desc: "Cálculo estrutural e dimensionamento de estábulos, galpões agrícolas e instalações para confinamento animal. Foco em controle bioclimático, ventilação e bem-estar térmico para máxima produtividade.",
    highlights: ["Estábulos & Confinamento", "Controle Bioclimático & Térmico", "Estruturas Agrícolas de Aço e Concreto"],
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
    color: "from-emerald-600 to-teal-700",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
  },
  {
    id: 4,
    title: "Tecnologia Pós-Colheita",
    badge: "Armazenamento & Beneficiamento",
    caption: "Silos graneleiros, processos de aeração e conservação de grãos",
    icon: <Wheat className="w-6 h-6" />,
    desc: "Engenharia de secagem, beneficiamento, classificação e armazenagem estratégica em silos graneleiros. Garantia de qualidade, prevenção de perdas e segurança alimentar pós-colheita.",
    highlights: ["Silos & Termometria", "Secagem e Aeração de Grãos", "Controle de Perdas"],
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80",
    color: "from-orange-500 to-amber-700",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30"
  },
  {
    id: 5,
    title: "Energia na Agricultura e Renováveis",
    badge: "Autonomia & Matriz Limpa",
    caption: "Sistemas agrovoltaicos, biodigestores e biometano rural",
    icon: <Zap className="w-6 h-6" />,
    desc: "Projetos de eletrificação rural, dimensionamento de usinas solares fotovoltaicas em lavouras (agrovoltaica), biodigestores para geração de biogás a partir de resíduos animais e aproveitamento energético de biomassa.",
    highlights: ["Energia Solar Agrovoltaica", "Biodigestores & Biogás", "Eletrificação & Eficiência Rural"],
    image: "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80",
    color: "from-amber-500 to-yellow-600",
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30"
  }
];

export default function Areas() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200" id="areas">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Especializações Profissionais
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Áreas de <span className="text-emerald-700">Atuação</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            A Engenharia Agrícola integra tecnologia de ponta, sustentabilidade e alta produtividade no agronegócio. Conheça as principais frentes de trabalho conectadas à realidade prática do setor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 min-h-[440px] flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 ${
                index === 3 ? 'lg:col-span-1 lg:col-start-1 xl:col-start-auto' : ''
              }`}
            >
              {/* Image background with deep context gradient */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={area.image} 
                  alt={`${area.title} - ${area.caption}`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/40 group-hover:via-slate-950/65 transition-colors duration-300" />
              </div>
              
              {/* Card Header contextual tag */}
              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} text-white flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-md ${area.badgeColor}`}>
                    {area.badge}
                  </span>
                </div>
              </div>

              {/* Card Footer contextual details */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end">
                <div className="text-xs font-medium text-emerald-300/90 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{area.caption}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2.5 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-sm text-slate-200/90 leading-relaxed mb-4">
                  {area.desc}
                </p>

                {/* Practical highlights connecting photo context with curriculum */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {area.highlights.map((tag, hIdx) => (
                    <span 
                      key={hIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs font-medium backdrop-blur-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
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
