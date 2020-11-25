import gql from "graphql-tag";

export const MY_BRANDS = gql`
      query MY_BRANDS {
            user {
                id
                  brands {
                        id
                        name
                        logo
                  }
            }
      }
`;
