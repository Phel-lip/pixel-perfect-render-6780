import { useState } from 'react';
import type { ServiceId } from '@/config/services';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import QuoteBuilder from './QuoteBuilder';
import Results from './Results';
import FinalCTA from './FinalCTA';
export default function Landing() {
  const [selection, setSelection] = useState<{ id: ServiceId; key: number }>({ id: 'cozinha', key: 0 });
  function choose(id: ServiceId) { setSelection(previous => ({ id, key: previous.key + 1 })); document.getElementById('orcamento')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }
  return <><a className="skip-link" href="#orcamento">Ir para o simulador de orçamento</a><Header /><main><Hero /><Services onSelect={choose} /><QuoteBuilder serviceId={selection.id} onServiceChange={id => setSelection(previous => ({ id, key: previous.key + 1 }))} /><Results /><FinalCTA /></main></>;
}
