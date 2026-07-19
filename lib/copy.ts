export type Lang = "pt" | "en";

export type IdentityItem = { label: string; desc: string };

export type Copy = {
  hero: { kicker: string; title1: string; title2: string; sub: string };
  manifesto: { tag: string; body: string; tagline: string };
  identity: { tag: string; title: string; items: IdentityItem[] };
  amix: { tag: string };
  universe: {
    tag: string;
    title: string;
    sub: string;
    marola: { title: string; desc: string; credit: string };
    digital: { title: string; desc: string; credit: string };
    carnaval: { title: string; desc: string; credit: string };
  };
  vol01: { tag: string; title: string; body: string; credit: string; watch: string };
  direction: { tag: string; title: string; body: string };
  soon: { tag: string; title: string; body: string };
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
    amix: {
      tag: "A MIX",
    },
    universe: {
      tag: "UNIVERSO A MIX",
      title: "Cada set, um mundo",
      sub: "Séries e temas que dão nome e atmosfera a cada lançamento.",
      marola: {
        title: "Marola",
        desc: "Pinguim de óculos com a prancha embaixo do braço, sol e coqueiro ao fundo — a capa é praia pura. Groove solar, batidas quentes e a leveza de um fim de tarde na areia.",
        credit: "Agos: A Mix — XXIV / V / MMXXVI · @Agos",
      },
      digital: {
        title: "Digital / Club Penguin",
        desc: "Pinguim de controle na mão, mergulhado num glitch rosa e roxo: a cara do Club Penguin e da internet dos anos 2000. Estética digital, nostalgia de tela e um humor próprio.",
        credit: "Agos: A Mix — 15.01.2026 · @Agos",
      },
      carnaval: {
        title: "Folia e Groove",
        desc: "Pinguim de óculos escuros num fundo iridescente cheio de brilhos: clima de virada de festa. Energia de bloco, percussão e o groove levado direto para a pista.",
        credit: "Agos: A Mix — XI / V / MMXXVI · @Agos",
      },
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
    soon: {
      tag: "EM BREVE",
      title: "Vem coisa nova por aí",
      body: "Novos sets, capítulos e experiências audiovisuais em produção. Fica de olho — o próximo lançamento do Little Project está chegando.",
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
      sub: "Independent audiovisual project, focused on sets built as audiovisual experiences — each centered on its own theme.",
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
    amix: {
      tag: "A MIX",
    },
    universe: {
      tag: "A MIX UNIVERSE",
      title: "Each set, a world",
      sub: "Series and themes that give each release its name and atmosphere.",
      marola: {
        title: "Marola",
        desc: "Sunglasses penguin with a surfboard under its wing, sun and palm tree behind — the cover is pure beach. Sunny groove, warm beats and the ease of a late afternoon on the sand.",
        credit: "Agos: A Mix — XXIV / V / MMXXVI · @Agos",
      },
      digital: {
        title: "Digital / Club Penguin",
        desc: "Penguin holding a controller, deep in a pink-and-purple glitch: pure Club Penguin and early-2000s internet. Digital aesthetic, screen nostalgia and a humour of its own.",
        credit: "Agos: A Mix — 15.01.2026 · @Agos",
      },
      carnaval: {
        title: "Folia & Groove",
        desc: "Sunglasses penguin over an iridescent, sparkle-filled backdrop: after-hours party energy. Block-party drive, percussion and the groove taken straight to the floor.",
        credit: "Agos: A Mix — XI / V / MMXXVI · @Agos",
      },
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
    soon: {
      tag: "COMING SOON",
      title: "New things are on the way",
      body: "New sets, chapters and audiovisual experiences in the works. Stay tuned — the next Little Project release is on its way.",
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
  soundcloud: "https://soundcloud.com/littleproject",
};
