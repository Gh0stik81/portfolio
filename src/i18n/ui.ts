export const languages = {
  sk: 'Slovensky',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'sk';

export const ui = {
  sk: {
    'meta.title': 'Roland Moravčík | Portfólio',
    'meta.description': 'Portfólio: programovanie, grafika a strih videa.',
    'nav.main': 'Hlavná navigácia',
    'nav.works': 'Práce',
    'nav.about': 'O mne',
    'nav.contact': 'Kontakt',
    'nav.switchLang': 'Prepnúť jazyk',
    'hero.name': 'Roland Moravčík',
    'hero.role': 'Frontend developer',
    'hero.tagline': 'Placeholder: jedna veta o tom, čo robím a čo ma baví.',
    'timeline.label': 'Časová os prác',
    'track.code': 'Kód',
    'track.graphic': 'Grafika',
    'track.video': 'Video',
    'filter.label': 'Filter prác',
    'filter.all': 'Všetko',
    'works.title': 'Vybrané práce',
    'works.empty': 'Pre tento filter tu zatiaľ nič nie je.',
    'card.repo': 'Repozitár',
    'card.demo': 'Live demo',
    'card.play': 'Prehrať video',
    'about.title': 'O mne',
    'about.text':
      'Placeholder: pár viet o mne, štúdiu a práci. Čo ma zaujíma v programovaní a prečo robím aj grafiku a strih videa.',
    'about.skills': 'Technológie',
    'contact.title': 'Kontakt',
    'contact.text': 'Placeholder: krátka výzva na kontakt.',
    'footer.rights': 'Všetky práva vyhradené.',
    '404.title': 'Stránka sa nenašla',
    '404.back': 'Späť na úvod',
  },
  en: {
    'meta.title': 'Roland Moravčík | Portfolio',
    'meta.description': 'Portfolio: programming, graphic design and video editing.',
    'nav.main': 'Main navigation',
    'nav.works': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.switchLang': 'Switch language',
    'hero.name': 'Roland Moravčík',
    'hero.role': 'Frontend developer',
    'hero.tagline': 'Placeholder: one sentence about what I do and enjoy.',
    'timeline.label': 'Work timeline',
    'track.code': 'Code',
    'track.graphic': 'Graphics',
    'track.video': 'Video',
    'filter.label': 'Filter work',
    'filter.all': 'All',
    'works.title': 'Selected work',
    'works.empty': 'Nothing here for this filter yet.',
    'card.repo': 'Repository',
    'card.demo': 'Live demo',
    'card.play': 'Play video',
    'about.title': 'About me',
    'about.text':
      'Placeholder: a few sentences about me, my studies and work. What interests me in programming and why I also do graphics and video editing.',
    'about.skills': 'Tech stack',
    'contact.title': 'Contact',
    'contact.text': 'Placeholder: a short call to get in touch.',
    'footer.rights': 'All rights reserved.',
    '404.title': 'Page not found',
    '404.back': 'Back to home',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
