import { Identity } from "./Identity.interface";
import { Education } from "./Education.interface";
import { Hobby } from "./Hobby.interface";
import { Language } from "./Language.interface";
import { Link } from "./Link.interface";
import { Role } from "./Role.interface";

export default interface Props {
	identity?: Identity;
	skills?: Map<string, Array<string>>;
	educations?: Array<Education>;
	hobbies?: Array<Hobby>;
	languages?: Array<Language>;
	links?: Array<Link>;
	roles?: Array<Role>;
}
