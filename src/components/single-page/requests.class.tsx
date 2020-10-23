import { gql } from "@apollo/client";

export default class Requests {
	static GET_DATA = gql`
		query Data {
			identity {
				firstname
				lastname
				birthdate
				phoneNumber
				email
				role
				bio
				address {
					id
					street
					city
					country
					state
					zone
					number
					zip
				}
				picture {
					url
				}
				additionnals {
					name
				}
				softskills {
					name
				}
			}
			educations(sort: "startDate:DESC", where: { published: true }) {
				id
				diploma
				school
				city
				startDate
				endDate
				current
				courses {
					name
				}
				keywords {
					name
				}
			}
			jobs(sort: "startDate:DESC", where: { published: true }) {
				id
				title
				company
				city
				startDate
				endDate
				current
				missions {
					name
				}
				keywords {
					name
				}
			}
			hobbies {
				id
				name
				comment
				icon {
					class
					name
				}
			}
			skills {
				id
				name
				comment
				keywords {
					name
				}
			}
			links {
				id
				name
				pseudo
				url
				icon {
					class
					name
				}
			}
			contact {
				name
				url
				icon {
					class
					name
				}
			}
		}
	`;
}
