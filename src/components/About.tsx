import { motion } from 'motion/react';
import { Target, Users, BookOpen, CheckCircle, Award } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Target className="w-6 h-6" />,
      badge: "Formação Interdisciplinar",
      title: "O que faz o Engenheiro Agrícola?",
      desc: "Aplica princípios avançados de engenharia (mecânica, civil, elétrica, hídrica e ambiental) para modernizar a produção agropecuária com eficiência e sustentabilidade.",
      tags: ["Automação no Campo", "Gestão Hídrica", "Construções Rurais"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      badge: "Alta Empregabilidade",
      title: "Mercado de Trabalho Aquecido",
      desc: "O Centro-Oeste e o Brasil lideram as exportações globais. Nossos graduados atuam em multinacionais de maquinário, usinas sucroalcooleiras, tradings, cooperativas e consultorias.",
      tags: ["Multinacionais do Agro", "Agritechs & Startups", "Consultoria Técnica"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      badge: "Excelência Pública & Gratuita",
      title: "Estrutura e Fazenda Experimental",
      desc: "Campus universitário com laboratórios modernos de hidráulica, motores, solos e sementes, além de fazenda experimental para aulas práticas a campo e corpo docente altamente qualificado.",
      tags: ["Corpo Docente Doutor", "Fazenda Experimental", "Laboratórios Equipados"]
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200" id="sobre">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              Sobre a Carreira
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              A Engenharia por trás do <span className="text-emerald-700">Alimento e da Energia</span>
            </h2>
            <p className="text-lg text-slate-600 mb-5 leading-relaxed">
              O curso de <strong>Engenharia Agrícola da UFGD</strong> forma profissionais completos, 
              capazes de projetar, implantar e administrar sistemas para o desenvolvimento 
              agropecuário com foco em alta tecnologia, rentabilidade e preservação ambiental.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Em Mato Grosso do Sul, polo nacional de grãos, bioenergia e pecuária, você estuda no centro da inovação agrícola mundial com acesso a ensino público e 100% gratuito.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-700 font-medium">
                <strong className="text-slate-900 block text-sm">Graduação com CREA / CONFEA</strong>
                Habilitação profissional plena para assinar laudos, projetos e ARTs de engenharia.
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-white transition-all shadow-xs hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-3">
                  <div className="bg-emerald-100 p-3 rounded-xl shrink-0 text-emerald-800 w-fit">
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {card.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {card.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/80">
                      {card.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                          <CheckCircle className="w-3 h-3 text-emerald-600" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
