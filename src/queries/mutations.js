import { gql } from "apollo-boost";

const Mutations = {};

Mutations.addBook = gql`
  mutation($name: String!, $genre: String!, $authorId: ID! ) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
` 

export default Mutations;