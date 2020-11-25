import gql from "graphql-tag";

export const MY_CATEGORIES = gql`
      query MY_CATEGORIES {
            user {
                  id
                  username
                  categories {
                        id
                        name
                        imageUrl
                  }
            }
      }
`;

export const CREATE_CATEGORY = gql`
      mutation CREATE_CATEGORY(
          $name: String!, 
          $imageUrl: String!
          ) {
            createUserCategory(
                name: $name, 
                imageUrl: $imageUrl
                ) {
                  id
                  name
                  imageUrl
            }
      }
`;
