import { MapPin, Mail, Phone, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/60 pt-20 pb-10" id="vestibular">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-white mb-6 tracking-tight">
              Vem pra <span className="text-amber-500">UFGD!</span>
            </h2>
            <p className="text-emerald-100/80 max-w-md mb-8 text-lg">
              Faça parte da nova geração de Engenheiros Agrícolas. Inscrições abertas para o próximo vestibular.
            </p>
            <a 
              href="https://portal.ufgd.edu.br/vestibular" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold transition-colors shadow-sm text-sm uppercase tracking-widest"
            >
              Portal do Candidato <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Faculdade de Ciências Agrárias (FCA)<br />
                  Rodovia Dourados/Itahum, Km 12<br />
                  Dourados - MS
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>(67) 3410-2433</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>fca@ufgd.edu.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-emerald-100 font-bold mb-6 uppercase tracking-widest text-xs">Redes Sociais</h3>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/ufgdoficial/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">@ufgdoficial</span>
              </a>
              <a href="https://www.instagram.com/pet_engenharia_agricola_ufgd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">PET Eng. Agrícola</span>
              </a>
              <a href="https://www.instagram.com/jeeagri.jr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">JEEAGRI Empresa Júnior</span>
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-emerald-100 font-bold mb-4 uppercase tracking-widest text-xs">Links Úteis</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://portal.ufgd.edu.br/" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Site Institucional UFGD</a></li>
                <li><a href="https://portal.ufgd.edu.br/cursos/engenharia_agricola/projeto-pedagogico" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">PPC do Curso</a></li>
                <li><a href="https://portal.ufgd.edu.br/faculdade/fca/corpo_docente" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Corpo Docente</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900/50 text-center text-xs text-emerald-100/40 flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Universidade Federal da Grande Dourados.</p>
          <div className="flex items-center gap-2">
            <span>Engenharia Agrícola</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
