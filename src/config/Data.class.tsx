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
		additionnals: ["Permis B, véhiculé"],
		softskills: ["Curieux", "Rigoureux", "Travail d'équipe"],
		bio:
			"Je suis un développeur full-stack passionné. J'aime la structure, l'ordre et la qualité. J'aime passer du temps à corriger les petits détails et à optimiser les applications web. J'aime aussi travailler en équipe, pour progresser et apprendre plus vite.",
		picture: picture,
		role: "Développeur Full-Stack",
	};
	skills: Array<Skill> = [
		{
			name: "Programmation",
			comment: "",
			details: ["Java", "Javascript", "React", "Angular"],
		},
		{
			name: "Conception Web",
			comment: "",
			details: ["HTML5", "CSS3"],
		},
		{
			name: "Base de données",
			comment: "",
			details: ["MySQL", "IBM DB2"],
		},
		{
			name: "Gestion de versions",
			comment: "",
			details: ["SVN", "GIT"],
		},
		{
			name: "IDE",
			comment: "",
			details: ["Eclipse", "VSCode", "DBeaver"],
		},
		{
			name: "Langue",
			comment: "",
			details: ["Anglais, niveau B2"],
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
				"Gestion de projet",
				"Marketing et Communication",
				"Ergonomie et UX",
				"Développement web",
			],
			keywords: [
				"Alternance",
				"Gestion de projet",
				"UX",
				"Ergonomie",
				"SEO",
				"E-commerce",
				"Javascript",
				"PHP",
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
				"Contexte professionnel: Séminaires professionnels, gestion de projets, ingénierie des tests, sécurité des systèmes d’information, anglais",
				"Développement réparti: Développement service web, développement client web, développement client mobile",
				"Mise en oeuvre: Analyse métier, conception matérielle et logicielle, ergonomie et communication, gestion de projet AGILE, développement",
				"Projet ACROBAT: développement d'un jeu multijoueur et multiplateforme",
			],
			keywords: [
				"Alternance",
				"Java",
				"AngularJS",
				"Android",
				"REST API",
				"Ionic",
				"Hibernate",
				"SCRUM",
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
				"Algorithme, Programmation, Réseaux, Web",
				"Développement Android",
				"Systèmes de gestion de bases de données",
				"Projet tuteuré: Développement d'un assistant vocal sur PC",
			],
			keywords: [
				"Java",
				"MySQL",
				"HTML",
				"CSS",
				"PHP",
				"Javascript",
				"Android",
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
				"Communcation et Sciences",
				"Etude technique et économique",
				"Préparation de chantier",
				"Conduite de chantier",
			],
			keywords: [],
		},
	];
	roles: Array<Role> = [
		{
			title: "Apprenti analyste programmeur",
			company: "Les Grands Chais de France",
			city: "Petersbach",
			startDate: new Date("2016-08"),
			endDate: new Date("2020-07"),
			current: false,
			missions: [
				"Développement d'applications web pour l'intranet et les extranets",
				"Développement de Jobs récurrents",
			],
			keywords: ["Apprentissage", "Java", "IBM DB2", "JQuery", "Velocity"],
		},
		{
			title: "Agent de stérilisation",
			company: "Nouvel hopital civil",
			city: "Strasbourg",
			startDate: new Date("2015-07-01"),
			endDate: new Date("2015-08-31"),
			current: false,
			missions: [
				"Réceptionner les outils de médecines avant leur stérilisation",
				"Effectuer le premier traitement de la stérilisation",
			],
			keywords: ["Emploi saisonnier"],
		},
		{
			title: "Stagiaire chef de chantier",
			company: "COLAS",
			city: "Ostwald",
			startDate: new Date("2013-05"),
			endDate: new Date("2013-07"),
			current: false,
			missions: ["Gestion du budget journalier"],
			keywords: ["Stagiaire"],
		},
	];
	hobbies: Array<Hobby> = [
		{
			name: "Développement",
			comment:
				"Veille technologique: React, Docker, GraphQL, Grafana, Synology, SCRUM",
			icon: ["fas", "code"],
		},
		{
			name: "Sport",
			comment: "Course à pied",
			icon: ["fas", "running"],
		},
		{
			name: "Culture asiatique",
			comment: "Voyage, gastronomie, langues, musiques",
			icon: ["fas", "globe-asia"],
		},
		{
			name: "Cinéphile & Series addict",
			comment: "",
			icon: ["fas", "film"],
		},
		{
			name: "Jeux vidéos",
			comment: "Gamer à mes heures perdues",
			icon: ["fas", "gamepad"],
		},
	];
	links: Array<Link> = [
		{
			name: "GitHub",
			pseudo: "Babasile",
			url: "https://github.com/Babasile",
			icon: ["fab", "github"],
		},
		{
			name: "Twitter",
			pseudo: "@Baabasile",
			url: "https://twitter.com/Baabasile",
			icon: ["fab", "twitter"],
		},
		{
			name: "Instagram",
			pseudo: "@Baabasile",
			url: "https://www.instagram.com/baabasile/",
			icon: ["fab", "instagram"],
		},
	];
	contact: Link = {
		name: "Linkedin",
		url: "https://www.linkedin.com/in/basilebuchler/",
		icon: ["fab", "linkedin"],
	};
}
