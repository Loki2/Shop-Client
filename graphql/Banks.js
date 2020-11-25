import gql from "graphql-tag";

export const MY_BRANKS = gql`
      query MY_BRANKS {
            user {
                  id
                  bankAccounts {
                        id
                        bankName
                        accountName
                        qrcodeUrl
                  }
            }
      }
`;
