import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Link {
	name: string;
	pseudo?: string;
	url: string;
	icon: IconProp;
}
