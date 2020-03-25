export interface Role {
	title: string;
	company: string;
	city: string;
	startDate: Date;
	endDate: Date;
	current: boolean;
	missions: Array<string>;
}
