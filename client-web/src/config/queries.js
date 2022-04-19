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
  mutation Mutation(
    $staffId: ID!
    $productArrays: [Int]
    $totalPrice: Int
    $longitude: String
    $latitude: String
  ) {
    userAddTransaction(
      StaffId: $staffId
      productArrays: $productArrays
      totalPrice: $totalPrice
      longitude: $longitude
      latitude: $latitude
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

export const GET_TRANSACTIONS = gql`
  query GetUserTransactions {
    getUserTransactions {
      id
      pickupDate
      totalPrice
      Products {
        name
      }
      isPaid
      createdAt
    }
  }
`;

export const GET_BY_ID = gql`
  query GetUserTransactionById($getUserTransactionByIdId: ID!) {
    getUserTransactionById(id: $getUserTransactionByIdId) {
      transaction {
        id
        status
        pickupDate
        deliveryDate
        longitude
        latitude
        totalPrice
        Products {
          name
        }
      }
      data {
        invoice_url
      }
    }
  }
`;
