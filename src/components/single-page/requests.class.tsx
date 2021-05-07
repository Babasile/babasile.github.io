import { gql } from "@apollo/client";

export default class Requests {
	static GET_DATA = gql`
		query Data($locale: String) {
			identity(locale: $locale) {
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
			educations(locale: $locale, sort: "startDate:DESC", where: { published: true }) {
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
			jobs(locale: $locale, sort: "startDate:DESC", where: { published: true }) {
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
			hobbies(locale: $locale) {
				id
				name
				comment
				icon {
					class
					name
				}
			}
			skills(locale: $locale) {
				id
				name
				comment
				keywords {
					name
				}
			}
			links(locale: $locale) {
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
