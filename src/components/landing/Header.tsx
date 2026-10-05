import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { business } from '@/config/business';
export function Brand() { return <a className="brand" href="#inicio" aria-label="Marcenaria Lukso, início"><img className="brand-logo" src={business.logo} alt="" width="48" height="48" /><span className="brand-text">{business.name}<span className="brand-dot">.</span><small>MÓVEIS PLANEJADOS · RJ</small></span></a>; }
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="shell header-inner"><Brand /><nav className={open ? 'nav open' : 'nav'} aria-label="Navegação principal"><a href="#servicos" onClick={() => setOpen(false)}>Ambientes</a><a href="#orcamento" onClick={() => setOpen(false)}>Seu orçamento</a><a href="#detalhes" onClick={() => setOpen(false)}>Nos detalhes</a></nav><a href="#orcamento" className="button header-cta">Simular orçamento</a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button></div></header>;
}

