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
			name: "Programming",
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
			name: "Web development",
			comment: "",
			keywords: [{ name: "HTML5" }, { name: "CSS3" }],
		},
		{
			name: "Database",
			comment: "",
			keywords: [{ name: "MySQL" }, { name: "IBM DB2" }, { name: "PostgreSQL" }],
		},
		{
			name: "Versioning",
			comment: "",
			keywords: [{ name: "SVN" }, { name: "GIT" }],
		},
		{
			name: "IDE",
			comment: "",
			keywords: [{ name: "Eclipse" }, { name: "VSCode" }, { name: "DBeaver" }, { name: "IntelliJ IDEA" }, { name: "WebStorm" }],
		},
		{
			name: "Language",
			comment: "",
			keywords: [{ name: "English, professional competence" }],
		},
	];
	educations: Array<Education> = [
		{
			diploma: "Master 360 Digital",
			school: "SupDeWeb",
			city: "Strasbourg, France",
			startDate: new Date("2018"),
			endDate: new Date("2020"),
			current: false,
			courses: [
				{ name: "Project management" },
				{ name: "Marketing and Communication" },
				{ name: "UI and UX" },
				{ name: "Web development" },
			],
			keywords: [
				{ name: "Apprenticeship" },
				{ name: "Project management" },
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
			city: "Illkirch, France",
			startDate: new Date("2016"),
			endDate: new Date("2017"),
			current: false,
			courses: [
				{
					name:
						"Professional context: Professional seminars, project management, test engineering, information systems security, English",
				},
				{
					name:
						"Distributed development: web service development, web client development, mobile client development",
				},
				{
					name:
						"Implementation: Business analysis, hardware and software design, ergonomics and communication, AGILE project management, development",
				},
				{
					name:
						"ACROBAT project: development of a multi-player and multi-platform game",
				},
			],
			keywords: [
				{ name: "Apprenticeship" },
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
			city: "Metz, France",
			startDate: new Date("2015"),
			endDate: new Date("2016"),
			current: false,
			courses: [
				{ name: "Algorithm, Programming, Networks, Web" },
				{ name: "Android Development" },
				{ name: "Database management systems" },
				{ name: "Tutored project: Development of a voice assistant on PC" },
			],
			keywords: [
				{ name: "Java" },
				{ name: "MySQL" },
				{ name: "HTML5" },
				{ name: "CSS3" },
				{ name: "PHP" },
				{ name: "Javascript" },
				{ name: "JEE" },
				{ name: "Android" },
			],
		},
	];
	jobs: Array<Role> = [
		{
			title: "Web Developer Analyst",
			company: "Les Grands Chais de France",
			city: "Petersbach, France",
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
			title: "Information Technology Engineer",
			company: "CGI",
			city: "Illkirch-Graffenstaden",
			startDate: new Date("2021-07"),
			endDate: new Date("2022-06"),
			current: false,
			missions: [
				{
					name: "Scalable maintenance and technical support on a financial management application for a global agrifood group",
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
			title: "Full-Stack Developer",
			company: "Transiteo",
			city: "Rosheim",
			startDate: new Date("2020-09"),
			endDate: new Date("2020-11"),
			current: false,
			missions: [
				{
					name: "Development of a dashboard (graph, world map, etc)",
				},
				{
					name: "Development of a user management module (CRUD)"
				},
				{
					name: "Development of a tax calculation module (multi-step form)"
				},
				{
					name: "Development of unit tests, interceptors and guards"
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
			title: "Apprentice Programmer Analyst",
			company: "Les Grands Chais de France",
			city: "Petersbach",
			startDate: new Date("2016-08"),
			endDate: new Date("2020-07"),
			current: false,
			missions: [
				{
					name: "Development of an intranet application for vehicle reservations",
				},
				{
					name: "Development of a web application indicating the feasibility of a packaging project"
				},
				{
					name: "Development of an extranet for winegrowers in Alsace"
				},
				{
					name: "Migration of extranets to a new server"
				},
				{
					name: "Updating and migrating jobs to use OpCon"
				}
			],
			keywords: [
				{ name: "Apprenticeship" },
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
			name: "Development",
			comment:
				"Technology watch: React, Docker, GraphQL, Grafana, Synology, SCRUM, Jenkins",
			icon: { class: "fas", name: "code" },
		},
		{
			name: "Sport",
			comment: "Running",
			icon: { class: "fas", name: "running" },
		},
		{
			name: "Asian culture",
			comment: "Travel, gastronomy, languages, musics",
			icon: { class: "fas", name: "globe-asia" },
		},
		{
			name: "Cinephile & Series addict",
			comment: "",
			icon: { class: "fas", name: "film" },
		},
		{
			name: "Video games",
			comment: "Gamer in my spare time",
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
			zone: "In the area of Strasbourg",
		},
		phoneNumber: "",
		email: "",
		additionnals: [{ name: "Driving licence, with vehicle" }],
		softskills: [
			{ name: "Curious" },
			{ name: "Rigorous" },
			{ name: "Teamwork" },
		],
		bio:
			"I am a passionate full-stack developer. I like structure, order and quality. I like to spend time fixing small details and optimizing web applications. I also like to work in a team, to progress and learn faster.",
		picture: { url: picture },
		role: this.jobs[0].title,
	};
}
