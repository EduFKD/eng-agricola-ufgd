import { motion } from 'motion/react';
import { Microscope, Award, GraduationCap, ArrowRight, Check, Sparkles } from 'lucide-react';

const programs = [
  {
    icon: <Microscope className="w-6 h-6" />,
    badge: "Pesquisa & Inovação",
    title: "Iniciação Científica (PIBIC/PIBITI)",
    desc: "Desenvolva pesquisas de ponta em sensores agrícolas, inteligência artificial e conservação de recursos naturais com bolsas de estudo remuneradas (CNPq / Fundect / UFGD).",
    tags: ["Bolsas Remuneradas", "Artigos & Congressos", "Laboratórios Especializados"],
    bg: "bg-sky-100 text-sky-700",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200"
  },
  {
    icon: <Award className="w-6 h-6" />,
    badge: "Empreendedorismo",
    title: "JEEAGRI - Empresa Júnior",
    desc: "Vivencie a rotina do mercado profissional ainda na graduação. Gerencie projetos, feche contratos e preste consultorias agronômicas reais para produtores rurais da região de Dourados.",
    tags: ["Consultoria Real", "Gestão & Liderança", "Portfólio Profissional"],
    bg: "bg-emerald-100 text-emerald-700",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    badge: "Impacto Social",
    title: "Projetos de Extensão Universitária",
    desc: "Transfira o conhecimento acadêmico diretamente para a comunidade. Capacite pequenos produtores da agricultura familiar, cooperativas e escolas técnicas regionais.",
    tags: ["Agricultura Familiar", "Treinamentos no Campo", "Desenvolvimento Regional"],
    bg: "bg-amber-100 text-amber-700",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    badge: "Excelência Acadêmica",
    title: "PET Engenharia Agrícola",
    desc: "Grupo de elite sob tutoria docente que realiza atividades integradas de alto nível em Ensino, Pesquisa e Extensão, promovendo formação técnica e humanística diferenciada.",
    tags: ["Tutoria Docente", "Cursos & Workshops", "Formação de Lideranças"],
    bg: "bg-indigo-100 text-indigo-700",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200"
  }
];

export default function Programs() {
  return (
    <section className="py-24 bg-slate-100 border-b border-slate-200" id="programas">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              Oportunidades na Graduação
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Muito além da <span className="text-emerald-700">Sala de Aula</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A UFGD oferece um ecossistema completo para você construir um currículo de destaque, obter experiência prática e ingressar no mercado de trabalho em posições de liderança.
            </p>
            <a 
              href="https://portal.ufgd.edu.br/vestibular" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors uppercase tracking-widest text-xs group"
            >
              <span>Faça parte da UFGD</span> 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 hover:border-emerald-300 transition-all hover:-translate-y-1 group shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-11 h-11 rounded-xl ${prog.bg} flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs`}>
                      {prog.icon}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${prog.badgeBg}`}>
                      {prog.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {prog.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm mb-4">
                    {prog.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {prog.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/70"
                    >
                      <Check className="w-3 h-3 text-emerald-600" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
