const { gql } = require("apollo-boost");
const Queries = {};

Queries.getBooksQuery = gql`
	{
		books {
			name
			id
		}
	}
`;

Queries.getAuthorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`;

Queries.getBookQuery = gql`
	query($id: ID) {
		book(id: $id) {
			name
			id
			genre
			author {
				id
				name
				age
				books {
					name
					id
				}
			}
		}
	}
`;

export default Queries;
