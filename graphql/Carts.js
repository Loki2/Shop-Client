import gql from "graphql-tag";

export const ADD_TO_CART = gql`
      mutation ADD_TO_CART($id: ID!) {
            addToCart(id: $id) {
                  id
                  product {
                        id
                        name
                        description
                        imageUrl
                        price
                  }
                  qualtity
            }
      }
`;


export const MY_CARTS = gql`
    query MY_CARTS {
        user {
                id
                username
                email
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
            }
    }
`

export const  DELETE_CART = gql`
    mutation DELETE_CART($id: ID!){
        deleteCart(id: $id){
            id
        }
    }
`
