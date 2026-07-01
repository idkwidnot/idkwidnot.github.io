const mascotArt = document.querySelector(".hero-art img");
const languageButtons = document.querySelectorAll(".lang-button");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translations = {
  "en-US": {
    navAbout: "Who are we?",
    navGames: "Games",
    navProcess: "Process",
    heroEyebrow: "Indie games for curious people",
    heroLine1: "I DON'T KNOW",
    heroLine2: "WHAT I'M",
    heroLine3: "DOING",
    heroSubtitle: "But somehow... we keep making games.",
    heroText: "Making games without pretending we have all the answers.",
    heroPrimaryCta: "See our games",
    heroSecondaryCta: "Google Play developer page",
    heroTag1: "We're figuring it out.",
    heroTag2: "It compiled.",
    heroTag3: "Powered by Ctrl+Z.",
    aboutEyebrow: "Who are we?",
    aboutTitle: "An indie studio built from curiosity, chaos and retries.",
    aboutBody1: "Every developer has opened a new project and immediately asked: \"What am I doing?\"",
    aboutBody2: "That feeling became our company. We create games by experimenting, learning and occasionally breaking everything.",
    aboutQuote: "\"Every masterpiece starts as a terrible idea.\"",
    aboutQuoteTag: "Probably.",
    philosophyEyebrow: "Philosophy",
    philosophyTitle: "We ship by learning in public.",
    learnTitle: "Learn",
    learnBody: "We learn by building instead of pretending we already know the answer.",
    breakTitle: "Break",
    breakBody: "Sometimes everything breaks. That is part of the process, not a surprise.",
    improveTitle: "Improve",
    improveBody: "Eventually the mess becomes a game worth sharing with the world.",
    gamesEyebrow: "Games",
    gamesTitle: "Current experiments and future releases.",
    featuredStatus: "Studio showcase",
    featuredTitle: "First game coming soon",
    featuredBody: "The next weird, heartfelt and probably over-ambitious thing is in production.",
    featuredCta: "Visit our Google Play page",
    comingSoon: "Coming soon",
    proto1Body: "It wasn't a bug. It was a mechanic we got attached to.",
    proto2Body: "Nothing here was overplanned, which is somehow part of the charm.",
    proto3Body: "Powered by coffee, curiosity and a suspicious amount of hope.",
    processEyebrow: "Creative process",
    processTitle: "From chaos to release.",
    step1: "Idea",
    step2: "Too ambitious",
    step3: "Everything broke",
    step4: "Coffee",
    step5: "It somehow works",
    step6: "Release",
    footerText: "Made with curiosity. Powered by Ctrl+Z."
  },
  "pt-BR": {
    navAbout: "Quem somos",
    navGames: "Jogos",
    navProcess: "Processo",
    heroEyebrow: "Jogos indie para pessoas curiosas",
    heroLine1: "EU NAO SEI",
    heroLine2: "O QUE ESTOU",
    heroLine3: "FAZENDO",
    heroSubtitle: "Mas de algum jeito... continuamos criando jogos.",
    heroText: "Criamos jogos sem fingir que temos todas as respostas.",
    heroPrimaryCta: "Ver nossos jogos",
    heroSecondaryCta: "Pagina de dev no Google Play",
    heroTag1: "A gente esta descobrindo.",
    heroTag2: "Compilou.",
    heroTag3: "Movido a Ctrl+Z.",
    aboutEyebrow: "Quem somos",
    aboutTitle: "Um estudio indie movido por curiosidade, caos e varias tentativas.",
    aboutBody1: "Todo desenvolvedor ja abriu um projeto novo e pensou na hora: \"O que eu estou fazendo?\"",
    aboutBody2: "Esse sentimento virou a nossa empresa. Criamos jogos experimentando, aprendendo e quebrando tudo de vez em quando.",
    aboutQuote: "\"Toda obra-prima comeca como uma ideia terrivel.\"",
    aboutQuoteTag: "Provavelmente.",
    philosophyEyebrow: "Filosofia",
    philosophyTitle: "A gente entrega aprendendo em publico.",
    learnTitle: "Aprender",
    learnBody: "A gente aprende construindo em vez de fingir que ja sabe a resposta.",
    breakTitle: "Quebrar",
    breakBody: "As vezes tudo quebra. Isso faz parte do processo, nao e surpresa.",
    improveTitle: "Melhorar",
    improveBody: "No fim da bagunca, isso vira um jogo que vale compartilhar.",
    gamesEyebrow: "Jogos",
    gamesTitle: "Experimentos atuais e proximos lancamentos.",
    featuredStatus: "Vitrine do estudio",
    featuredTitle: "Primeiro jogo em breve",
    featuredBody: "A proxima coisa estranha, ambiciosa e carismatica ja esta em producao.",
    featuredCta: "Visitar nossa pagina no Google Play",
    comingSoon: "Em breve",
    proto1Body: "Nao era bug. Era uma mecanica pela qual a gente se apegou.",
    proto2Body: "Nada aqui foi planejado demais, e isso faz parte do charme.",
    proto3Body: "Movido a cafe, curiosidade e uma dose suspeita de esperanca.",
    processEyebrow: "Processo criativo",
    processTitle: "Do caos ao release.",
    step1: "Ideia",
    step2: "Ambicao demais",
    step3: "Tudo quebrou",
    step4: "Cafe",
    step5: "De algum jeito funciona",
    step6: "Lancamento",
    footerText: "Feito com curiosidade. Movido a Ctrl+Z."
  }
};

const setLanguage = (lang) => {
  const bundle = translations[lang] ?? translations["en-US"];
  document.documentElement.lang = lang;
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (bundle[key]) {
      node.textContent = bundle[key];
    }
  });
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  window.localStorage.setItem("idkwid-language", lang);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

const preferredLanguage = window.localStorage.getItem("idkwid-language");
if (preferredLanguage && translations[preferredLanguage]) {
  setLanguage(preferredLanguage);
}

if (mascotArt) {
  const blink = () => {
    mascotArt.animate(
      [
        { filter: "brightness(1)" },
        { filter: "brightness(0.85)" },
        { filter: "brightness(1)" }
      ],
      {
        duration: 180,
        iterations: 2,
        easing: "ease-in-out"
      }
    );
  };

  const scheduleBlink = () => {
    const delay = 2200 + Math.random() * 2400;
    window.setTimeout(() => {
      blink();
      scheduleBlink();
    }, delay);
  };

  scheduleBlink();
}
