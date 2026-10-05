import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marcenaria Lukso | Móveis planejados em MDF no Rio de Janeiro" },
      { name: "description", content: "Móveis planejados em MDF em Campo Grande, RJ. Simule cozinha, quarto ou sala e envie seu orçamento pelo WhatsApp." },
      { property: "og:title", content: "Marcenaria Lukso — Móveis planejados RJ" },
      { property: "og:description", content: "Simule seu ambiente planejado e fale com a Lukso pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});
