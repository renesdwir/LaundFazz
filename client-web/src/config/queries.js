import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      name
      price
    }
  }
`;
export const GET_NAME = gql`
  query GetCustomerName {
    getCustomerName {
      name
    }
  }
`;
