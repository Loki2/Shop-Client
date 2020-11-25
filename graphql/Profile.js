import gql from "graphql-tag";

export const MY_PROFILE = gql`
      query MY_PROFILE {
            user {
                  id
                  username
                  email
                  profile {
                        id
                        firstname
                        lastname
                        age
                        gender
                        birthdate
                        mentalStatus
                        profileImage
                        coverImage
                  }
            }
      }
`;

export const CREATE_PROFILE = gql`
      mutation CREATE_PROFILE(
            $firstname: String!
            $lastname: String!
            $birthdate: String!
            $age: Int
            $gender: String!
            $mentalStatus: String!
            $profileImage: String!
            $coverImage: String!
      ) {
            createProfile(
                  firstname: $firstname
                  lastname: $lastname
                  birthdate: $birthdate
                  age: $age
                  gender: $gender
                  mentalStatus: $mentalStatus
                  profileImage: $profile
                  coverImage: $coverImage
            ) {
                  id
                  firstname
                  lastname
                  birthdate
                  age
                  gender
                  mentalStatus
                  profileImage
                  coverImage
                  createAt
            }
      }
`;

export const MY_CONTACT = gql`
      query MY_CONTACT {
            user {
                  id
                  contact {
                        id
                        type
                        contactNo
                        conditionEmail1
                        conditionEmail2
                  }
            }
      }
`;

export const MY_CURRENTADDRESS = gql`
      query MY_CURRENTADDRESS {
            user {
                  id
                  currentAddress {
                        id
                        address1
                        address2
                        village
                        city
                        province
                  }
            }
      }
`;

export const MY_HOMETOWNADDRESS = gql`
      query MY_HOMETOWNADDRESS {
            user {
                  id
                  hometownAddress {
                        id
                        address1
                        address2
                        village
                        city
                        province
                  }
            }
      }
`;
