import { business } from '../config/business';
import { finishes, services } from '../config/services';
import { calculateEstimate, money, type Configuration } from './calculateEstimate';
export function quoteMessage(config: Configuration, name: string, phone: string) {
  const service = services.find(s => s.id === config.serviceId)!;
  const estimate = calculateEstimate(config);
  return `Olá, Lukso! Fiz uma simulação no site e gostaria de um orçamento de móveis planejados.\n\nAmbiente: ${service.name}\nMedida: ${config.size.toLocaleString('pt-BR')} m\nAcabamento: ${finishes.find(f => f.id === config.finish)!.description}\nComplementos: ${service.extras.filter(e => config.extras.includes(e.id)).map(e => e.name).join(', ') || 'Nenhum'}\n\nFaixa estimada no site: ${money(estimate.min)} a ${money(estimate.max)}\nEstimativa inicial, sujeita à avaliação do projeto.\n\nNome: ${name.trim()}\nTelefone: ${phone.trim()}\n\nPoderiam confirmar o orçamento final e a disponibilidade para atendimento?`;
}
export function whatsappUrl(message: string) {
  const phone = business.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
