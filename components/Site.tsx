"use client";

import { useState } from "react";
import { COPY, LINKS, type Lang } from "@/lib/copy";
import { Reveal } from "./Reveal";
import { MediaImg } from "./MediaImg";
import CircularText from "./CircularText";
import MetaBalls from "./MetaBalls";
import { Logo } from "./Logo";

export function Site() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = COPY[lang];

  return (
    <div className="page">
      {/* TOP BAR */}
      <header className="topbar">
        <a href="#top" className="brand">
          <Logo className="brand__logo" />
        </a>
        <div className="lang" role="group" aria-label="Language">
          <button
            type="button"
            className={`lang__btn ${lang === "pt" ? "is-active" : ""}`}
            aria-pressed={lang === "pt"}
            onClick={() => setLang("pt")}
          >
            PT
          </button>
          <button
            type="button"
            className={`lang__btn ${lang === "en" ? "is-active" : ""}`}
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </header>

      <main id="top">
        {/* 01 — CAPA */}
        <section className="hero hero--light" aria-label="Little Project">
          <MetaBalls
            className="hero__balls"
            color="#cbc5b7"
            cursorBallColor="#cbc5b7"
            ballCount={12}
            animationSize={28}
            speed={0.22}
            clumpFactor={1}
            enableMouseInteraction={false}
            enableTransparency
          />
          <div className="hero__inner">
            <Logo slogan className="hero__logo" />
            <p className="hero__sub">{t.hero.sub}</p>
          </div>
        </section>

        {/* 02 — MANIFESTO */}
        <section className="section container">
          <Reveal>
            <p className="tag">{t.manifesto.tag}</p>
            <p className="manifesto__body">{t.manifesto.body}</p>
            <p className="manifesto__tagline">{t.manifesto.tagline}</p>
          </Reveal>
          <Reveal className="grid grid--3 grid--tall" delay={80}>
            <MediaImg src="/assets/agos-05.jpg" alt="Agos com vinis" className="cover" glitch="subtle" />
            <MediaImg src="/assets/agos-02.jpg" alt="Agos com vinil" className="cover" glitch="subtle" />
            <MediaImg src="/assets/agos-01.jpg" alt="Agos em cena" className="cover" glitch="subtle" />
          </Reveal>
        </section>

        {/* 03 — VOL 01 */}
        <section className="section container">
          <Reveal>
            <p className="tag">{t.vol01.tag}</p>
            <h2 className="h2">{t.vol01.title}</h2>
            <p className="lead">{t.vol01.body}</p>
          </Reveal>
          <Reveal className="grid grid--big" delay={80}>
            <MediaImg src="/assets/agos-06.jpg" alt="Agos no set" className="cover" glitch="subtle" />
            <MediaImg src="/assets/capa.jpg" alt="Capa" className="cover" glitch="subtle" />
          </Reveal>
          <Reveal className="grid grid--2 grid--mid" delay={120}>
            <MediaImg src="/assets/agos-ideia.jpg" alt="Agos ideia" className="cover" glitch="subtle" />
            <MediaImg src="/assets/agos-04.jpg" alt="Agos retrato" className="cover" glitch="subtle" />
          </Reveal>
          <Reveal delay={140}>
            <div className="actions">
              <a className="btn" href={LINKS.youtube} target="_blank" rel="noreferrer">
                {t.vol01.watch}
              </a>
            </div>
            <p className="credit">{t.vol01.credit}</p>
          </Reveal>
        </section>

        {/* 04 — A MIX */}
        <section className="section container">
          <Reveal>
            <p className="tag">{t.amix.tag}</p>
          </Reveal>
          <Reveal delay={80}>
            <MediaImg src="/assets/amix-geral.png" alt="Capa geral A Mix" className="amix-hero cover" glitch />
          </Reveal>
        </section>

        {/* 05 — UNIVERSO A MIX */}
        <section className="section container">
          <Reveal>
            <p className="tag">{t.universe.tag}</p>
            <h2 className="h2">{t.universe.title}</h2>
            <p className="section__sub">{t.universe.sub}</p>
          </Reveal>
          <Reveal className="cards" delay={80}>
            <article className="card">
              <MediaImg src="/assets/amix-marola.png" alt="Capa A Mix — Marola" className="card__img" glitch />
              <h3 className="card__title">{t.universe.marola.title}</h3>
              <p className="card__desc">{t.universe.marola.desc}</p>
              <p className="card__meta">{t.universe.marola.credit}</p>
            </article>
            <article className="card">
              <MediaImg src="/assets/amix-clubpenguin.png" alt="Capa A Mix — Digital / Club Penguin" className="card__img" glitch />
              <h3 className="card__title">{t.universe.digital.title}</h3>
              <p className="card__desc">{t.universe.digital.desc}</p>
              <p className="card__meta">{t.universe.digital.credit}</p>
            </article>
            <article className="card">
              <MediaImg src="/assets/amix-folia.png" alt="Capa A Mix — Folia e Groove" className="card__img" glitch />
              <h3 className="card__title">{t.universe.carnaval.title}</h3>
              <p className="card__desc">{t.universe.carnaval.desc}</p>
              <p className="card__meta">{t.universe.carnaval.credit}</p>
            </article>
          </Reveal>
        </section>

        {/* 06 — DIREÇÃO AUDIOVISUAL */}
        <section className="section container">
          <Reveal className="split split--center">
            <div>
              <p className="tag">{t.direction.tag}</p>
              <h2 className="h2 h2--sm">{t.direction.title}</h2>
              <p className="body">{t.direction.body}</p>
            </div>
            <MediaImg src="/assets/agos-02.jpg" alt="Agos com vinil" className="cover cover--portrait" glitch="subtle" />
          </Reveal>
        </section>

        {/* 07 — PRESENÇA DIGITAL */}
        <section className="section container">
          <Reveal>
            <p className="tag">{t.digital.tag}</p>
            <h2 className="h2">{t.digital.title}</h2>
          </Reveal>
          <Reveal className="links" delay={80}>
            <a className="linkcard" href={LINKS.instagram} target="_blank" rel="noreferrer">
              <div className="linkcard__title">Instagram</div>
              <div className="linkcard__meta">@little_project_tv</div>
            </a>
            <a className="linkcard" href={LINKS.youtube} target="_blank" rel="noreferrer">
              <div className="linkcard__title">YouTube</div>
              <div className="linkcard__meta">{t.digital.yt}</div>
            </a>
            <a className="linkcard" href={LINKS.soundcloud} target="_blank" rel="noreferrer">
              <div className="linkcard__title">SoundCloud</div>
              <div className="linkcard__meta">{t.digital.sc}</div>
            </a>
          </Reveal>
        </section>

        {/* 08 — CONEXÃO COM A CENA */}
        <section className="section container">
          <Reveal className="split split--center split--rev">
            <MediaImg src="/assets/fuso-poster.jpg" alt="Fuso" className="cover cover--portrait" glitch="subtle" />
            <div>
              <p className="tag">{t.scene.tag}</p>
              <h2 className="h2 h2--sm">{t.scene.title}</h2>
              <p className="body">{t.scene.body}</p>
            </div>
          </Reveal>
        </section>

        {/* 09 — ENCERRAMENTO */}
        <section className="section container closing">
          <Reveal>
            <div className="closing__sealwrap">
              <CircularText
                text="LITTLE PROJECT ✦ A PROJECT BY AGOS ✦ "
                onHover="speedUp"
                spinDuration={18}
                className="closing__seal"
              />
            </div>
            <Logo slogan className="closing__logo" />
            <p className="closing__sub">{t.closing.sub}</p>
            <div className="closing__links">
              <a href={LINKS.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={LINKS.youtube} target="_blank" rel="noreferrer">
                YouTube
              </a>
              <a href={LINKS.soundcloud} target="_blank" rel="noreferrer">
                SoundCloud
              </a>
            </div>
            <div className="closing__credit">{t.closing.credit}</div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
