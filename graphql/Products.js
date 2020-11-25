import gql from "graphql-tag";

export const MY_PRODUCTS = gql`
      query MY_PRODUCTS {
            user {
                  id
                  username
                  email
                  products {
                        id
                        name
                        description
                        price
                        imageUrl
                  }
            }
      }
`;

export const QUERY_PRODUCTS = gql`
      query {
            products {
                  id
                  name
                  description
                  price
                  imageUrl
                  createdAt
                  user {
                        id
                  }
            }
      }
`;

export const QUERY_PRODUCT = gql`
      query QUERY_PRODUCT($id: ID!) {
            product(id: $id) {
                  id
                  name
                  description
                  imageUrl
                  price
                  createdAt
            }
      }
`;

export const CREATE_PRODUCT = gql`
      mutation CREATE_PRODUCT(
            $name: String!
            $description: String!
            $price: Float!
            $imageUrl: String!
      ) {
            createProduct(
                  name: $name
                  description: $description
                  price: $price
                  imageUrl: $imageUrl
            ) {
                  name
                  description
                  price
                  imageUrl
            }
      }
`;

export const UPDATE_PRODUCT = gql`
      mutation UPDATE_PRODUCT(
            $id: ID!
            $name: String
            $description: String
            $price: Float
            $imageUrl: String
      ) {
            updateProduct(
                  id: $id
                  name: $name
                  description: $description
                  price: $price
                  imageUrl: $imageUrl
            ) {
                  id
                  name
                  description
                  price
                  imageUrl
            }
      }
`;
