export type Lang = "pt" | "en";

export type IdentityItem = { label: string; desc: string };

export type Copy = {
  hero: { kicker: string; title1: string; title2: string; sub: string };
  manifesto: { tag: string; body: string; tagline: string };
  identity: { tag: string; title: string; items: IdentityItem[] };
  universe: {
    tag: string;
    title: string;
    sub: string;
    marola: { title: string; desc: string };
    digital: { title: string; desc: string };
    carnaval: { title: string; desc: string };
  };
  vol01: { tag: string; title: string; body: string; credit: string; watch: string };
  direction: { tag: string; title: string; body: string };
  digital: { tag: string; title: string; yt: string; sc: string };
  scene: { tag: string; title: string; body: string };
  closing: { sub: string; credit: string };
};

export const COPY: Record<Lang, Copy> = {
  pt: {
    hero: {
      kicker: "A MIX — LITTLE PROJECT",
      title1: "Little",
      title2: "Project",
      sub: "Projeto audiovisual independente de Agos, focado em sets construídos como experiências audiovisuais — cada um centrado em um tema próprio.",
    },
    manifesto: {
      tag: "MANIFESTO",
      body: "Little Project é o projeto principal de Agos: cada set é pensado como uma peça completa, onde seleção musical, cenário, performance e edição trabalham juntos para construir uma experiência própria. A música não aparece isolada — ela ganha imagem, espaço e narrativa.",
      tagline: "Make some noise and enjoy the grooves.",
    },
    identity: {
      tag: "IDENTIDADE",
      title: "Elementos da identidade visual",
      items: [
        { label: "Pinguim", desc: "Personagem recorrente, presente em diferentes lançamentos do Little Project." },
        { label: "Vinil", desc: "Símbolo da pesquisa musical, da cultura de pista e da relação com a música física." },
        { label: "Estética 2000s", desc: "Referências digitais e nostálgicas, com acabamento propositalmente artesanal." },
        { label: "Tipografia", desc: "Assinatura visual própria, sempre ao lado de “Little Project”." },
      ],
    },
    universe: {
      tag: "UNIVERSO A MIX",
      title: "Cada set, um mundo",
      sub: "Séries e temas que dão nome e atmosfera a cada lançamento.",
      marola: { title: "Marola", desc: "Groove solar, batidas quentes e uma pegada leve de fim de tarde." },
      digital: { title: "Digital / Club Penguin", desc: "Estética 2000s, nostalgia de internet e um humor próprio." },
      carnaval: { title: "Folia e Groove", desc: "Energia de bloco, percussão e a festa levada para a pista." },
    },
    vol01: {
      tag: "CASE PRINCIPAL",
      title: "Little Project Vol. 01",
      body: "O primeiro grande resultado da proposta: um set completo, publicado na Little Project TV (YouTube) e no SoundCloud, feito em parceria com a Pingoestudios — trazendo o cenário para dentro da composição do set. Direção, gravação, edição, performance e identidade visual constroem, juntos, uma única experiência audiovisual.",
      credit: "Direção, gravação e edição: Pingoestudios · Performance e curadoria musical: Agos",
      watch: "Ver na Little Project TV",
    },
    direction: {
      tag: "DIREÇÃO AUDIOVISUAL",
      title: "Do papel para o espaço físico",
      body: "Cenário, iluminação, enquadramentos e edição formam a estética do lançamento — construídos em parceria com a Pingoestudios para que som e imagem funcionem como uma única experiência.",
    },
    digital: {
      tag: "PRESENÇA DIGITAL",
      title: "Onde assistir e ouvir",
      yt: "Sets e vídeos completos na Little Project TV",
      sc: "Sets completos no SoundCloud",
    },
    scene: {
      tag: "CONEXÃO COM A CENA",
      title: "Agos na cena",
      body: "Além do Little Project, Agos leva sua curadoria para dentro da cena eletrônica — com atuações na Fuso Music, Concept House e Mixin Label.",
    },
    closing: {
      sub: "Som e imagem como uma única experiência.",
      credit: "Little Project · Um projeto de Agos",
    },
  },
  en: {
    hero: {
      kicker: "A MIX — LITTLE PROJECT",
      title1: "Little",
      title2: "Project",
      sub: "Agos' independent audiovisual project, focused on sets built as audiovisual experiences — each centered on its own theme.",
    },
    manifesto: {
      tag: "MANIFESTO",
      body: "Little Project is Agos' main project: each set is designed as one complete piece, where music selection, set design, performance and editing work together to build its own experience. Music never stands alone — it gains image, space and narrative.",
      tagline: "Make some noise and enjoy the grooves.",
    },
    identity: {
      tag: "IDENTITY",
      title: "Visual identity elements",
      items: [
        { label: "Penguin", desc: "Recurring character, present across different Little Project releases." },
        { label: "Vinyl", desc: "Symbol of musical research, club culture and physical music." },
        { label: "2000s aesthetic", desc: "Digital, nostalgic references with an intentionally hand-made finish." },
        { label: "Typography", desc: "A visual signature of its own, always alongside “Little Project”." },
      ],
    },
    universe: {
      tag: "A MIX UNIVERSE",
      title: "Each set, a world",
      sub: "Series and themes that give each release its name and atmosphere.",
      marola: { title: "Marola", desc: "Sunny groove, warm beats and a light late-afternoon feel." },
      digital: { title: "Digital / Club Penguin", desc: "2000s aesthetic, internet nostalgia and a humour of its own." },
      carnaval: { title: "Folia & Groove", desc: "Street-party energy, percussion and the party taken to the floor." },
    },
    vol01: {
      tag: "FLAGSHIP CASE",
      title: "Little Project Vol. 01",
      body: "The first major result of the proposal: a full set, published on Little Project TV (YouTube) and SoundCloud, made in partnership with Pingoestudios — bringing the set design into the composition itself. Direction, recording, editing, performance and visual identity come together as one audiovisual experience.",
      credit: "Direction, recording & editing: Pingoestudios · Performance & music curation: Agos",
      watch: "Watch on Little Project TV",
    },
    direction: {
      tag: "AUDIOVISUAL DIRECTION",
      title: "From paper to physical space",
      body: "Set design, lighting, framing and editing shape the release's aesthetic — built together with Pingoestudios so sound and image work as a single experience.",
    },
    digital: {
      tag: "DIGITAL PRESENCE",
      title: "Where to watch & listen",
      yt: "Sets and full videos on Little Project TV",
      sc: "Full sets on SoundCloud",
    },
    scene: {
      tag: "SCENE CONNECTION",
      title: "Agos in the scene",
      body: "Beyond Little Project, Agos brings his curation into the electronic scene — with sets at Fuso Music, Concept House and Mixin Label.",
    },
    closing: {
      sub: "Sound and image as a single experience.",
      credit: "Little Project · A project by Agos",
    },
  },
};

export const LINKS = {
  instagram: "https://www.instagram.com/little_project_tv/",
  youtube: "https://www.youtube.com/watch?v=aUK-lVMN5V8",
  soundcloud: "https://m.soundcloud.com/littleproject/agos-little-project-vol-01",
};
