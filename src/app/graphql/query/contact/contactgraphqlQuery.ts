import gql from 'graphql-tag';

export const contactQuery= {
    GET_ContactSalutation:gql`
    {
      contactSalutations{
        id
        name
      }
      }`,
    GET_ContactEmployeeType:gql`
    {
      contactEmployeeTypes {
            id: Int
            
          }
        
    }`,
    GET_ContactType:gql`
    {
      contactTypes {
            id: Int
            
          }
        
    }`,


    
}