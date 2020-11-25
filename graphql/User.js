import gql from "graphql-tag";


/**
 * Export global User 
 */
export const QUERY_USER = gql` 
        query QUERY_USER {
            user {
                id
                username
                email
                products{
                    id
                    name
                    description
                    price
                }
                carts{
                    id
                    product{
                            name
                            description
                            imageUrl
                            price
                        }
                        qualtity
                }
                profile {
                    id
                    firstname
                    lastname
                    age
                    birthdate
                    mentalStatus
                    profileImage
                }
            }
        }
`;

export const SIGN_UP = gql`
      mutation SIGN_UP(
            $username: String!
            $email: String!
            $password: String!
      ) {
            signup(username: $username, email: $email, password: $password) {
                  id
                  username
                  email
            }
      }
`;

export const LOG_IN = gql`
      mutation LOG_IN($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                  user {
                        id
                        username
                        email
                        products {
                              id
                              name
                              description
                              imageUrl
                              price
                        }
                        carts {
                              id
                              product {
                                    name
                                    description
                                    price
                                    imageUrl
                              }
                              qualtity
                        }
                  }
                  jwt
            }
      }
`;

export const REQUEST_RESET_PASSWORD = gql`
      mutation REQUEST_RESET_PASSWORD($email: String!) {
            requestResetPassword(email: $email) {
                  message
            }
      }
`;
