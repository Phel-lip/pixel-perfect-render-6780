import { finishes, pricing, services, type FinishId, type ServiceId } from '../config/services';
export type Configuration = { serviceId: ServiceId; size: number; finish: FinishId; extras: string[] };
export const money = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
export function calculateEstimate(config: Configuration) {
  const service = services.find(s => s.id === config.serviceId);
  const finish = finishes.find(f => f.id === config.finish);
  if (!service || !finish || !Number.isFinite(config.size) || config.size < service.minSize || config.size > service.maxSize) throw new Error('Confira o ambiente, o acabamento e as medidas.');
  if (config.extras.some(id => !service.extras.some(e => e.id === id))) throw new Error('Complemento inválido para este ambiente.');
  const furniture = (service.basePrice + service.pricePerMeter * config.size) * finish.multiplier;
  const extras = service.extras.filter(e => config.extras.includes(e.id)).reduce((total, e) => total + e.price, 0);
  const total = furniture + extras;
  return { min: Math.floor(total * (1 - pricing.variance) / pricing.rounding) * pricing.rounding, max: Math.ceil(total * (1 + pricing.variance) / pricing.rounding) * pricing.rounding, furniture, extras };
}
export function defaultConfiguration(serviceId: ServiceId): Configuration {
  return { serviceId, size: services.find(s => s.id === serviceId)!.defaultSize, finish: 'amadeirado', extras: [] };
}
