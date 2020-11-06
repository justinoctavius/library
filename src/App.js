import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<h1>Hello world</h1>
				<BookList />
        <AddBook />
			</div>
		</ApolloProvider>
	);
}

export default App;
