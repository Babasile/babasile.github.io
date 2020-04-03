import { Identity } from "./Identity.interface";
import { Education } from "./Education.interface";
import { Hobby } from "./Hobby.interface";
import { Language } from "./Language.interface";
import { Link } from "./Link.interface";
import { Role } from "./Role.interface";
import { Skill } from "./Skill.interface";

export default interface Props {
	skill?: Skill;
	identity?: Identity;
	skills?: Array<Skill>;
	educations?: Array<Education>;
	hobbies?: Array<Hobby>;
	languages?: Array<Language>;
	links?: Array<Link>;
	roles?: Array<Role>;
}
