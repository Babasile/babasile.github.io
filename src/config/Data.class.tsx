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
			"Je suis un développeur full-stack passioné. J'aime la structure, l'ordre et la qualité. J'aime passer du temps à corriger les petits détails et à optimiser les applications web. J'aime aussi travailler en équipe, pour progresser et apprendre plus vite.",
		picture: picture,
		role: "Développeur Full-Stack",
	};
	skills: Array<Skill> = [
		{
			name: "Programmation",
			comment: "",
			details: ["Java", "Javascript", "Angular", "React"],
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
			current: true,
			courses: [],
		},
		{
			diploma: "Master 1 Informatique ILC",
			school: "Pôle API",
			city: "Illkirch",
			startDate: new Date("2017"),
			endDate: new Date("2018"),
			current: false,
			courses: [],
		},
		{
			diploma: "LP - SIL CDED",
			school: "IUT Robert Schuman",
			city: "Illkirch",
			startDate: new Date("2016"),
			endDate: new Date("2017"),
			current: false,
			courses: [],
		},
		{
			diploma: "DUT Informatique AS",
			school: "IUT de Metz",
			city: "Metz",
			startDate: new Date("2015"),
			endDate: new Date("2016"),
			current: false,
			courses: [],
		},
		{
			diploma: "BTS Travaux Publics",
			school: "Lycée Le Corbusier",
			city: "Illkirch",
			startDate: new Date("2012"),
			endDate: new Date("2014"),
			current: false,
			courses: [],
		},
	];
	roles: Array<Role> = [
		{
			title: "Apprenti analyste programmeur",
			company: "Les Grands Chais de France",
			city: "Petersbach",
			startDate: new Date("2016-08"),
			endDate: new Date(),
			current: true,
			missions: [
				"Analyser les besoins",
				"Développer des applications web sur l'intranet et les extranets",
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
				"Réceptionner les outils de médecines avant leur stérilisation",
				"Effectuer le premier traitement de la stérilisation",
			],
		},
		{
			title: "Stagiaire chef de chantier",
			company: "COLAS",
			city: "Ostwald",
			startDate: new Date("2013-05"),
			endDate: new Date("2013-07"),
			current: false,
			missions: ["Gestion du budget journalier"],
		},
	];
	hobbies: Array<Hobby> = [
		{
			name: "Développement",
			comment: "Veille technologique: React, Docker, Grafana, Synology, SCRUM ",
			icon: ["fas", "code"],
		},
		{
			name: "Course à pied",
			comment: "Old beginner",
			icon: ["fas", "running"],
		},
		{
			name: "Culture asiatique",
			comment: "Voyage, nourriture, langues, musiques",
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
