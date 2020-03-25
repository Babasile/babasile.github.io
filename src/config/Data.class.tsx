import { Resume } from "../interfaces/Resume.interface";
import { Link } from "../interfaces/Link.interface";
import { Hobby } from "../interfaces/Hobby.interface";
import { Education } from "../interfaces/Education.interface";
import { Language } from "../interfaces/Language.interface";
import { Role } from "../interfaces/Role.interface";
import { Identity } from "../interfaces/Identity.interface";

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
		softskills: ["Curieux"],
		bio: "Passionné par le web et les nouvelles technologies",
		picture: "",
	};
	skills: Map<string, Array<string>> = new Map([
		["Programmation", ["Java", "Javascript", "Angular", "React"]],
		["Gestion de versions", ["SVN", "GIT"]],
		["Base de données", ["MySQL", "IBM DB2"]],
		["Conception Web", ["HTML5", "CSS3"]],
		["IDE", ["Eclpise", "VSCode"]],
	]);
	languages: Array<Language> = [
		{
			name: "Anglais",
			comment: "niveau B2",
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
			endDate: new Date("2015"),
			current: false,
			courses: [],
		},
	];
	roles: Array<Role> = [
		{
			title: "Apprenti analyste programmeur",
			company: "Les Grands Chais de France",
			city: "Petersbach",
			startDate: new Date("2016"),
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
			comment: "Veille technologique",
		},
		{
			name: "Course à pied",
			comment: "Old beginner",
		},
		{
			name: "Culture asiatique",
			comment: "Voyage, nourriture, langues",
		},
		{
			name: "Cinéphile & Series addict",
			comment: "",
		},
		{
			name: "Jeux vidéos",
			comment: "Gamer à mes heures perdues",
		},
	];
	links: Array<Link> = [
		{
			name: "Linkedin",
			pseudo: "",
			url: "https://www.linkedin.com/in/basilebuchler/",
			smallIcon: "",
			largeIcon: "",
		},
		{
			name: "GitHub",
			pseudo: "Babasile",
			url: "https://github.com/Babasile",
			smallIcon: "",
			largeIcon: "",
		},
		{
			name: "Twitter",
			pseudo: "@Baabasile",
			url: "https://twitter.com/Baabasile",
			smallIcon: "",
			largeIcon: "",
		},
		{
			name: "Instagram",
			pseudo: "@Baabasile",
			url: "https://www.instagram.com/baabasile/",
			smallIcon: "",
			largeIcon: "",
		},
	];
}
