import { Link } from "./Link.interface";
import { Hobby } from "./Hobby.interface";
import { Language } from "./Language.interface";
import { Education } from "./Education.interface";
import { Role } from "./Role.interface";
import { Identity } from "./Identity.interface";

export interface Resume {
	identity: Identity;
	skills: Map<string, Array<string>>;
	languages: Array<Language>;
	educations: Array<Education>;
	roles: Array<Role>;
	hobbies: Array<Hobby>;
	links: Array<Link>;
}
