import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "./Icon.interface";

export interface Link {
	name: string;
	pseudo?: string;
	url: string;
	icon: Icon;
}
