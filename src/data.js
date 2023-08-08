export default {
  fr: {
    help: [
      { command: 'clear', text: 'vide la console' },
      { command: 'help', text: 'liste de toutes les commandes valides' },
      { command: "lang 'en'", text: 'change la langue' },
      { command: 'github', text: "ouvre la page 'repositories' de mon GITHUB" },
      { command: 'awesome', text: 'surprise...' },
      { command: 'ls', text: 'montre les catégories de mon CV' },
      { command: "cat 'categorie'", text: 'ouvre le contenu des categories' },
    ],
    ls: [
      { command: 'Profile', text: '' },
      { command: 'Education', text: '' },
      { command: 'Competences', text: '' },
      { command: 'Experiences', text: '' },
      { command: 'Contact', text: '' },
    ],
    profile: [
      { command: 'Nom:', text: 'Maxime Lefranc' },
      { command: 'Date de naissance:', text: '05-12-1990' },
      {
        command: 'Email:',
        text: '<a href="mailto:maxilefranc@gmail.com">maxilefranc@gmail.com</a>',
      },
      { command: 'Nationalité:', text: 'Français' },
    ],
    education: [
      {
        command: 'Titre professionnel développeur Web - niveau V',
        text: "O'Clock - 2022 / 2023 - 798 heures (France)",
      },
      {
        command: 'Brevet Professionnel Restaurant',
        text: 'Bayonne - 2009 / 2011 - 840 heures (France)',
      },
      {
        command: 'C.A.P Restaurant',
        text: 'Bayonne - 2008 / 2009 - 490 heures (France)',
      },
    ],
    competences: [
      {
        command: 'Hard skills :',
        text: 'Javascript, React, Next.JS, PHP,Symfony,<br>,MySql HTML, CSS, SASS, Git',
      },
      {
        command: 'Soft skills :',
        text: "Adaptation, Communication, Collaboration,<br>Patience, Perfectionniste, Ouvert d'esprit",
      },
      {
        command: 'Languages :',
        text: 'Français (natif)<br>Espagnol (B2)<br>Anglais (A2)',
      },
    ],
    experiences: [
      { command: 'ETIENNE', text: '2023 / Now - Web Developer - (Remote)' },
      {
        command: "Troc'Services",
        text: '<a target="_blank" href="https://trocservices.fr">Lien vers Troc\'Services</a>',
      },
      {
        command: 'Projets perso',
        text: '<a target="_blank" href="https://github.com/MaximeLefranc?tab=repositories">GitHub</a>',
      },
      {
        command: 'ETIENNE',
        text: '2018 / 2022 - Manager + Formateur - (France)',
      },
      { command: 'ETIENNE', text: '2013 / 2018 - Manager - (France)' },
      {
        command: "Restaurant 'Le Patacrêpe'",
        text: '2013 / 2013 - Chef de rang - (France)',
      },
      {
        command: "Restaurant 'Au Lavoir'",
        text: '2012 / 2013 - Chef de rang - (France)',
      },
      {
        command: 'Hôtel du Palais *****',
        text: '2009 / 2011 - Chef de rang - (France)',
      },
      {
        command: 'Hôtel le Biarrtiz ***',
        text: '2008 / 2009 - Commis de salle - (France)',
      },
    ],
    contact: [
      {
        command: 'Twitter',
        text: '<a href="https://twitter.com/MaxiLefranc">https://twitter.com/MaxiLefranc</a>',
      },
      {
        command: 'Instagram',
        text: '<a href="https://www.instagram.com/el.gringo.34/">https://www.instagram.com/el.gringo.34/</a>',
      },
      {
        command: 'LinkedIn',
        text: '<a href="https://www.linkedin.com/in/max34">https://www.linkedin.com/in/max34</a>',
      },
      {
        command: 'GitHub',
        text: '<a href="https://github.com/MaximeLefranc">https://github.com/MaximeLefranc</a>',
      },
      {
        command: 'Mail',
        text: '<a href="mailto:maxilefranc@gmail.com">maxilefranc@gmail.com</a>',
      },
    ],
  },
  en: {
    help: [
      { command: 'clear', text: 'clear the console' },
      {
        command: 'help',
        text: 'list all the commands available in the console',
      },
      { command: "lang 'fr'", text: 'change the language' },
      { command: 'github', text: 'open the GitHub repo of this resume' },
      { command: 'awesome', text: 'surprise...' },
      { command: 'ls', text: 'show all the categories of my resume' },
      {
        command: "cat 'categorie'",
        text: 'display the content of the selected category',
      },
    ],
    ls: [
      { command: 'Profile', text: '' },
      { command: 'Education', text: '' },
      { command: 'Competences', text: '' },
      { command: 'Experiences', text: '' },
      { command: 'Contact', text: '' },
    ],
    profile: [
      { command: 'Name:', text: 'Maxime Lefranc' },
      { command: 'Birthdate:', text: '1990-12-05' },
      {
        command: 'Email:',
        text: '<a href="mailto:maxilefranc@gmail.com">maxilefranc@gmail.com</a>',
      },
      { command: 'Nationality:', text: 'French' },
    ],
    education: [
      {
        command: 'Profesional title web developer',
        text: "O'Clock - 2022 / 2023 - 798 hours (France)",
      },
      {
        command: 'Brevet Professionnel Restaurant',
        text: 'Bayonne - 2009 / 2011 - 840 hours (France)',
      },
      {
        command: 'C.A.P Restaurant',
        text: 'Bayonne - 2008 / 2009 - 490 hours (France)',
      },
    ],
    competences: [
      {
        command: 'Hard skills :',
        text: 'Javascript, React, Next.JS, PHP, Symfony,<br>MySql, HTML, CSS, SASS, Git',
      },
      {
        command: 'Soft skills :',
        text: 'Adaptation, Communication, Collaboration,<br>Patience, Perfectionist, Open minded',
      },
      {
        command: 'Languages :',
        text: 'French (natif)<br>Spanish (B2)<br>English (A2)',
      },
    ],
    experiences: [
      {
        command: 'ETIENNE',
        text: '2023 / Maintenant - Développeur Web - (Remote)',
      },
      {
        command: "Troc'Services",
        text: '<a target="_blank" href="https://trocservices.fr">Link to Troc\'Services</a>',
      },
      {
        command: 'Personal projects',
        text: '<a target="_blank" href="https://github.com/MaximeLefranc?tab=repositories">GitHub</a>',
      },
      {
        command: 'ETIENNE',
        text: '2018 / 2022 - Manager + Trainer - (France)',
      },
      { command: 'ETIENNE', text: '2013 / 2018 - Manager - (France)' },
      {
        command: "Restaurant 'Le Patacrêpe'",
        text: '2013 / 2013 - Head waiter - (France)',
      },
      {
        command: "Restaurant 'Au Lavoir'",
        text: '2012 / 2013 - Head waiter - (France)',
      },
      {
        command: "Hotel 'du Palais' *****",
        text: '2009 / 2011 - Head waiter - (France)',
      },
      {
        command: "Hotel 'le Biarrtiz' ***",
        text: '2008 / 2009 - Head waiter - (France)',
      },
    ],
    contact: [
      {
        command: 'Twitter',
        text: '<a href="https://twitter.com/MaxiLefranc">https://twitter.com/MaxiLefranc</a>',
      },
      {
        command: 'Instagram',
        text: '<a href="https://www.instagram.com/el.gringo.34/">https://www.instagram.com/el.gringo.34/</a>',
      },
      {
        command: 'LinkedIn',
        text: '<a href="https://www.linkedin.com/in/max34">https://www.linkedin.com/in/max34</a>',
      },
      {
        command: 'GitHub',
        text: '<a href="https://github.com/MaximeLefranc">https://github.com/MaximeLefranc</a>',
      },
      {
        command: 'Mail',
        text: '<a href="mailto:maxilefranc@gmail.com">maxilefranc@gmail.com</a>',
      },
    ],
  },
};
