import { Address } from "./Address.interface";

export interface Identity {
	lastname: string;
	firstname: string;
	birthdate: Date;
	address: Address;
	phoneNumber: string;
	email: string;
	additionnals: Array<string>;
	softskills: Array<string>;
	bio: string;
	picture: string;
}
