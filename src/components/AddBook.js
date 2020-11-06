import React, { Component } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import Queries from "../queries/queries";
import Mutations from "../queries/mutations";

class AddBook extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			genre: "",
			authorId: "",
		};
	}

	displayAuthors() {
		const { getAuthorsQuery } = this.props;

		if (!getAuthorsQuery.loading) {
			return getAuthorsQuery.authors.map((author) => (
				<option key={author.id} value={author.id}>
					{author.name}
				</option>
			));
		}
	}

	addNewBook = (e) => {
		e.preventDefault();
		this.props.addBook({
			variables: {
				name: this.state.name,
				genre: this.state.genre,
				authorId: this.state.authorId,
			},
			refetchQueries: [{ query: Queries.getBooksQuery }],
		});
	};

	render() {
		return (
			<div>
				<form id="add-book" onSubmit={this.addNewBook}>
					<div className="field">
						<label>Book name:</label>
						<input
							type="text"
							name="book-name"
							onChange={(e) => this.setState({ name: e.target.value })}
						/>
					</div>

					<div className="field">
						<label>Genre:</label>
						<input
							type="text"
							name="book-genre"
							onChange={(e) => this.setState({ genre: e.target.value })}
						/>
					</div>

					<div className="field">
						<label>Author:</label>
						<select
							name="book-author"
							onChange={(e) => this.setState({ authorId: e.target.value })}
						>
							<option defaultChecked>Select author</option>
							{this.displayAuthors()}
						</select>
					</div>

					<button>+</button>
				</form>
			</div>
		);
	}
}

export default compose(
	graphql(Queries.getAuthorsQuery, { name: "getAuthorsQuery" }),
	graphql(Mutations.addBook, { name: "addBook" })
)(AddBook);
