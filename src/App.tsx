import React from "react";
import "./App.css";
import { Data } from "./config/Data.class";

import { Navigation } from "./components/navigation/Navigation";
import { Education } from "./components/education/Eductation";
import { Role } from "./components/role/Role";
import { Skill } from "./components/skill/Skill";
import { Language } from "./components/language/Language";
import { Hobby } from "./components/hobby/Hobby";
import { Footer } from "./components/footer/Footer";
import { Info } from "./components/info/Info";

function App() {
	let resume = new Data();
	return (
		<div>
			<Navigation />
			<Info identity={resume.identity} />
			<Education educations={resume.educations} />
			<Role roles={resume.roles} />
			<Skill skills={resume.skills} />
			<Language languages={resume.languages} />
			<Hobby hobbies={resume.hobbies} />
			<Footer links={resume.links} />
		</div>
	);
}

export default App;
