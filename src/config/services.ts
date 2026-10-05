// TODOS OS PREÇOS SÃO DEMONSTRATIVOS, em reais. Validar com a marcenaria.
export type ServiceId = 'cozinha' | 'roupeiro' | 'painel' | 'escritorio';
export type Extra = { id: string; name: string; description: string; price: number };
export type Service = { id: ServiceId; name: string; shortName: string; description: string; basePrice: number; pricePerMeter: number; defaultSize: number; minSize: number; maxSize: number; sizeLabel: string; hint: string; extras: Extra[] };
export const pricing = { variance: 0.15, rounding: 50 };
export const finishes = [
  { id: 'essencial', name: 'Essencial', description: 'MDF branco fosco', multiplier: 1, swatch: '#e5e2da' },
  { id: 'amadeirado', name: 'Amadeirado', description: 'Textura natural de madeira', multiplier: 1.18, swatch: '#ae8055' },
  { id: 'especial', name: 'Especial', description: 'Laca em cor personalizada', multiplier: 1.42, swatch: '#555d55' },
] as const;
export type FinishId = typeof finishes[number]['id'];
export const services: Service[] = [
  { id: 'cozinha', name: 'Cozinhas planejadas', shortName: 'Cozinha', description: 'Armários inferiores e aéreos em MDF, aproveitando cada canto da parede.', basePrice: 900, pricePerMeter: 2200, defaultSize: 3, minSize: 1, maxSize: 10, sizeLabel: 'Comprimento total dos armários', hint: 'Some as paredes com armários. Inclui módulos inferiores e aéreos padrão. Não inclui pedra, cuba ou eletrodomésticos.', extras: [
    { id: 'amortecimento', name: 'Fechamento suave', description: 'Dobradiças e corrediças com amortecimento', price: 650 },
    { id: 'led', name: 'Iluminação em LED', description: 'Perfil de luz sob os armários aéreos', price: 480 },
    { id: 'organizador', name: 'Organizadores internos', description: 'Divisórias e porta-talheres sob medida', price: 350 },
  ] },
  { id: 'roupeiro', name: 'Quartos e guarda-roupas', shortName: 'Quarto', description: 'Guarda-roupas e closets sob medida, com divisões pensadas para o que você guarda.', basePrice: 700, pricePerMeter: 1900, defaultSize: 2.5, minSize: 1, maxSize: 8, sizeLabel: 'Largura total do roupeiro', hint: 'Considere a frente do móvel, com altura de até 2,60 m e profundidade de até 60 cm. Portas de abrir incluídas.', extras: [
    { id: 'espelho', name: 'Porta com espelho', description: 'Espelho aplicado em uma porta', price: 750 },
    { id: 'deslizantes', name: 'Portas de correr', description: 'Substituição das portas de abrir', price: 1100 },
    { id: 'led', name: 'Iluminação interna', description: 'LED com acionamento ao abrir', price: 580 },
  ] },
  { id: 'painel', name: 'Salas e painéis', shortName: 'Sala', description: 'Painel de TV, rack e nichos no tamanho certo da sua parede.', basePrice: 500, pricePerMeter: 1250, defaultSize: 2, minSize: 1, maxSize: 6, sizeLabel: 'Largura da composição', hint: 'Painel de até 2,60 m de altura com rack de até 45 cm de profundidade. TV e equipamentos não incluídos.', extras: [
    { id: 'ripado', name: 'Detalhe ripado', description: 'Faixa decorativa de até 1 m de largura', price: 850 },
    { id: 'led', name: 'Iluminação indireta', description: 'Perfil LED atrás do painel', price: 420 },
    { id: 'prateleiras', name: 'Prateleiras extras', description: 'Conjunto com duas prateleiras', price: 390 },
  ] },
  { id: 'escritorio', name: 'Outros ambientes', shortName: 'Outros', description: 'Home office, bancadas e gaveteiros planejados para espaços que pedem solução.', basePrice: 400, pricePerMeter: 1100, defaultSize: 1.5, minSize: 1, maxSize: 5, sizeLabel: 'Comprimento da bancada', hint: 'Bancada com profundidade de até 60 cm e um gaveteiro. Cadeira e equipamentos não incluídos.', extras: [
    { id: 'aereo', name: 'Armário aéreo', description: 'Módulo superior de até 1 m', price: 900 },
    { id: 'cabos', name: 'Organização de cabos', description: 'Calha e passa-fios embutidos', price: 180 },
    { id: 'prateleiras', name: 'Prateleiras extras', description: 'Conjunto com duas prateleiras', price: 320 },
  ] },
];
