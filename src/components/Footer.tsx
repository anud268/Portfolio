import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-neutral-900 glass mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tighter block mb-2">
            ANUDAS R<span className="text-red-600">.</span>
          </a>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Anudas R. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-red-600/30">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-red-600/30">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-red-600/30">
            <Twitter size={20} />
          </a>
          <a href="mailto:anudas@example.com" className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-red-600/30">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
