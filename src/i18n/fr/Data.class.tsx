import { Resume } from "../../interfaces/Resume.interface";
import { Link } from "../../interfaces/Link.interface";
import { Hobby } from "../../interfaces/Hobby.interface";
import { Education } from "../../interfaces/Education.interface";
import { Role } from "../../interfaces/Role.interface";
import { Identity } from "../../interfaces/Identity.interface";
import { Skill } from "../../interfaces/Skill.interface";
import picture from "../../assets/pictures/beardglasses.jpg";

export class Data implements Resume {

	skills: Array<Skill> = [
		{
			name: "Programmation",
			comment: "",
			keywords: [
				{ name: "Java" },
				{ name: "Javascript" },
				{ name: "React" },
				{ name: "Angular" },
				{ name: "Typescript" },
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
			keywords: [{ name: "MySQL" }, { name: "IBM DB2" }, { name: "PostgreSQL" }],
		},
		{
			name: "Gestion de versions",
			comment: "",
			keywords: [{ name: "SVN" }, { name: "GIT" }],
		},
		{
			name: "IDE",
			comment: "",
			keywords: [{ name: "Eclipse" }, { name: "VSCode" }, { name: "DBeaver" }, { name: "IntelliJ IDEA" }, { name: "WebStorm" }],
		},
		{
			name: "Langue",
			comment: "",
			keywords: [{ name: "Anglais, compétence professionnelle" }],
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
				{ name: "UI et UX" },
				{ name: "Développement web" },
			],
			keywords: [
				{ name: "Alternance" },
				{ name: "Gestion de projet" },
				{ name: "UX" },
				{ name: "UI" },
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
				{ name: "Angular" },
				{ name: "Android" },
				{ name: "JEE" },
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
				{ name: "HTML5" },
				{ name: "CSS3" },
				{ name: "PHP" },
				{ name: "Javascript" },
				{ name: "Android" },
				{ name: "JEE" },
			],
		},
	];
	jobs: Array<Role> = [
		{
			title: "Analyste Développeur Web",
			company: "Les Grands Chais de France",
			city: "Petersbach",
			startDate: new Date("2022-07"),
			endDate: new Date(),
			current: true,
			missions: [],
			keywords: [
				{ name: "Java" },
				{ name: "Angular" },
				{ name: "IntelliJ IDEA" },
				{ name: "JIRA" },
				{ name: "Git" },
				{ name: "GitLab" },
			],
		},
		{
			title: "Ingénieur en Technologie de l'Information",
			company: "CGI",
			city: "Illkirch-Graffenstaden",
			startDate: new Date("2021-07"),
			endDate: new Date("2022-06"),
			current: false,
			missions: [
				{
					name: "Maintenance évolutive et support technique sur une application de gestion financière pour un groupe agroalimentaire mondial",
				}
			],
			keywords: [
				{ name: "Java" },
				{ name: "GIT" },
				{ name: "IntelliJ IDEA" },
				{ name: "JIRA" },
				{ name: "Jenkins" },
			],
		},
		{
			title: "Développeur Full-Stack",
			company: "Transiteo",
			city: "Rosheim",
			startDate: new Date("2020-09"),
			endDate: new Date("2020-11"),
			current: false,
			missions: [
				{
					name: "Développement d’un tableau de bord (graphique, world map, etc)",
				},
				{
					name: "Développement d’un module de gestion d’utilisateurs (CRUD)"
				},
				{
					name: "Développement d’un module de calcul de taxes (formulaire en plusieurs étapes)"
				},
				{
					name: "Développement de tests unitaires, «interceptors» et «guards»"
				}
			],
			keywords: [
				{ name: "Angular" },
				{ name: "GIT" },
				{ name: "VSCode" },
				{ name: "Typescript" },
				{ name: "AWS" },
				{ name: "GitLab" }
			],
		},
		{
			title: "Apprenti analyste programmeur",
			company: "Les Grands Chais de France",
			city: "Petersbach",
			startDate: new Date("2016-08"),
			endDate: new Date("2020-07"),
			current: false,
			missions: [
				{
					name: "Développement d’une application web indiquant la faisabilité d’un projet packaging",
				},
				{
					name: "Développement d’une application intranet de réservation de vehicules"
				},
				{
					name: "Développement d’un extranet à destination des viticulteurs d’Alsace"
				},
				{
					name: "Migration des extranets sur un nouveau serveur"
				},
				{
					name: "Mise à jour et migration de jobs pour l’utilisation d’OpCon"
				}
			],
			keywords: [
				{ name: "Apprentissage" },
				{ name: "Java" },
				{ name: "JEE" },
				{ name: "Javascript" },
				{ name: "Eclipse" },
				{ name: "IBM DB2" },
				{ name: "JQuery" },
				{ name: "Velocity" },
			],
		}
	];
	hobbies: Array<Hobby> = [
		{
			name: "Développement",
			comment:
				"Veille technologique: React, Docker, GraphQL, Grafana, Synology, SCRUM, Jenkins",
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
			name: "Stack Overflow",
			pseudo: "Babasile",
			url: "https://stackoverflow.com/users/7416377/babasile",
			icon: { class: "fab", name: "stack-overflow" },
		},
	];
	contact: Link = {
		name: "Linkedin",
		url: "https://www.linkedin.com/in/basilebuchler/",
		icon: { class: "fab", name: "linkedin" },
	};

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
		role: this.jobs[0].title,
	};
}
