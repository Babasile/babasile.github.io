import { Resume } from "../interfaces/Resume.interface";
import { Link } from "../interfaces/Link.interface";
import { Hobby } from "../interfaces/Hobby.interface";
import { Education } from "../interfaces/Education.interface";
import { Role } from "../interfaces/Role.interface";
import { Identity } from "../interfaces/Identity.interface";
import { Skill } from "../interfaces/Skill.interface";
import picture from "./beardglasses.jpg";

export class Data implements Resume {
	identity: Identity = {
		firstname: "Basile",
		lastname: "Buchler",
		birthdate: new Date("1993-08-26"),
		address: {
			number: "",
			street: "",
			city: "",
			zip: "",
			country: "France",
			state: "Grand Est",
			zone: "Dans les environs de Strasbourg",
		},
		phoneNumber: "",
		email: "",
		additionnals: [{ name: "Permis B, véhiculé" }],
		softskills: [
			{ name: "Curieux" },
			{ name: "Rigoureux" },
			{ name: "Travail d'équipe" },
		],
		bio:
			"Je suis un développeur full-stack passionné. J'aime la structure, l'ordre et la qualité. J'aime passer du temps à corriger les petits détails et à optimiser les applications web. J'aime aussi travailler en équipe, pour progresser et apprendre plus vite.",
		picture: { url: picture },
		role: "Développeur Full-Stack",
	};
	skills: Array<Skill> = [
		{
			name: "Programmation",
			comment: "",
			keywords: [
				{ name: "Java" },
				{ name: "Javascript" },
				{ name: "React" },
				{ name: "Angular" },
			],
		},
		{
			name: "Conception Web",
			comment: "",
			keywords: [{ name: "HTML5" }, { name: "CSS3" }],
		},
		{
			name: "Base de données",
			comment: "",
			keywords: [{ name: "MySQL" }, { name: "IBM DB2" }],
		},
		{
			name: "Gestion de versions",
			comment: "",
			keywords: [{ name: "SVN" }, { name: "GIT" }],
		},
		{
			name: "IDE",
			comment: "",
			keywords: [{ name: "Eclipse" }, { name: "VSCode" }, { name: "DBeaver" }],
		},
		{
			name: "Langue",
			comment: "",
			keywords: [{ name: "Anglais, niveau B2" }],
		},
	];
	educations: Array<Education> = [
		{
			diploma: "Master 360 Digital",
			school: "SupDeWeb",
			city: "Strasbourg",
			startDate: new Date("2018"),
			endDate: new Date("2020"),
			current: false,
			courses: [
				{ name: "Gestion de projet" },
				{ name: "Marketing et Communication" },
				{ name: "Ergonomie et UX" },
				{ name: "Développement web" },
			],
			keywords: [
				{ name: "Alternance" },
				{ name: "Gestion de projet" },
				{ name: "UX" },
				{ name: "Ergonomie" },
				{ name: "SEO" },
				{ name: "E-commerce" },
				{ name: "Javascript" },
				{ name: "PHP" },
			],
		},
		{
			diploma: "LP - SIL CDED",
			school: "IUT Robert Schuman",
			city: "Illkirch",
			startDate: new Date("2016"),
			endDate: new Date("2017"),
			current: false,
			courses: [
				{
					name:
						"Contexte professionnel: Séminaires professionnels, gestion de projets, ingénierie des tests, sécurité des systèmes d’information, anglais",
				},
				{
					name:
						"Développement réparti: Développement service web, développement client web, développement client mobile",
				},
				{
					name:
						"Mise en oeuvre: Analyse métier, conception matérielle et logicielle, ergonomie et communication, gestion de projet AGILE, développement",
				},
				{
					name:
						"Projet ACROBAT: développement d'un jeu multijoueur et multiplateforme",
				},
			],
			keywords: [
				{ name: "Alternance" },
				{ name: "Java" },
				{ name: "AngularJS" },
				{ name: "Android" },
				{ name: "REST API" },
				{ name: "Ionic" },
				{ name: "Hibernate" },
				{ name: "SCRUM" },
			],
		},
		{
			diploma: "DUT Informatique AS",
			school: "IUT de Metz",
			city: "Metz",
			startDate: new Date("2015"),
			endDate: new Date("2016"),
			current: false,
			courses: [
				{ name: "Algorithme, Programmation, Réseaux, Web" },
				{ name: "Développement Android" },
				{ name: "Systèmes de gestion de bases de données" },
				{ name: "Projet tuteuré: Développement d'un assistant vocal sur PC" },
			],
			keywords: [
				{ name: "Java" },
				{ name: "MySQL" },
				{ name: "HTML" },
				{ name: "CSS" },
				{ name: "PHP" },
				{ name: "Javascript" },
				{ name: "Android" },
			],
		},
		{
			diploma: "BTS Travaux Publics",
			school: "Lycée Le Corbusier",
			city: "Illkirch",
			startDate: new Date("2012"),
			endDate: new Date("2014"),
			current: false,
			courses: [
				{ name: "Communcation et Sciences" },
				{ name: "Etude technique et économique" },
				{ name: "Préparation de chantier" },
				{ name: "Conduite de chantier" },
			],
			keywords: [],
		},
	];
	jobs: Array<Role> = [
		{
			title: "Apprenti analyste programmeur",
			company: "Les Grands Chais de France",
			city: "Petersbach",
			startDate: new Date("2016-08"),
			endDate: new Date("2020-07"),
			current: false,
			missions: [
				{
					name:
						"Développement d'applications web pour l'intranet et les extranets",
				},
				{ name: "Développement de Jobs récurrents" },
			],
			keywords: [
				{ name: "Apprentissage" },
				{ name: "Java" },
				{ name: "IBM DB2" },
				{ name: "JQuery" },
				{ name: "Velocity" },
			],
		},
		{
			title: "Agent de stérilisation",
			company: "Nouvel hopital civil",
			city: "Strasbourg",
			startDate: new Date("2015-07-01"),
			endDate: new Date("2015-08-31"),
			current: false,
			missions: [
				{
					name: "Réceptionner les outils de médecines avant leur stérilisation",
				},
				{ name: "Effectuer le premier traitement de la stérilisation" },
			],
			keywords: [{ name: "Emploi saisonnier" }],
		},
		{
			title: "Stagiaire chef de chantier",
			company: "COLAS",
			city: "Ostwald",
			startDate: new Date("2013-05"),
			endDate: new Date("2013-07"),
			current: false,
			missions: [{ name: "Gestion du budget journalier" }],
			keywords: [{ name: "Stagiaire" }],
		},
	];
	hobbies: Array<Hobby> = [
		{
			name: "Développement",
			comment:
				"Veille technologique: React, Docker, GraphQL, Grafana, Synology, SCRUM",
			icon: { class: "fas", name: "code" },
		},
		{
			name: "Sport",
			comment: "Course à pied",
			icon: { class: "fas", name: "running" },
		},
		{
			name: "Culture asiatique",
			comment: "Voyage, gastronomie, langues, musiques",
			icon: { class: "fas", name: "globe-asia" },
		},
		{
			name: "Cinéphile & Series addict",
			comment: "",
			icon: { class: "fas", name: "film" },
		},
		{
			name: "Jeux vidéos",
			comment: "Gamer à mes heures perdues",
			icon: { class: "fas", name: "gamepad" },
		},
	];
	links: Array<Link> = [
		{
			name: "GitHub",
			pseudo: "Babasile",
			url: "https://github.com/Babasile",
			icon: { class: "fab", name: "github" },
		},
		{
			name: "Twitter",
			pseudo: "@Baabasile",
			url: "https://twitter.com/Baabasile",
			icon: { class: "fab", name: "twitter" },
		},
		{
			name: "Instagram",
			pseudo: "@Baabasile",
			url: "https://www.instagram.com/baabasile/",
			icon: { class: "fab", name: "instagram" },
		},
	];
	contact: Link = {
		name: "Linkedin",
		url: "https://www.linkedin.com/in/basilebuchler/",
		icon: { class: "fab", name: "linkedin" },
	};
}
