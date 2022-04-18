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

export const POST_TRANSACTIONS = gql`
  mutation Mutation($staffId: ID!, $productArrays: [Int], $totalPrice: Int) {
    userAddTransaction(
      StaffId: $staffId
      productArrays: $productArrays
      totalPrice: $totalPrice
    ) {
      status
      id
      CustomerId
      StaffId
      isPaid
      pickupDate
      deliveryDate
      longitude
      latitude
      totalPrice
    }
  }
`;
