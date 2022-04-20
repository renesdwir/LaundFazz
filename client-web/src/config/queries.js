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
  query Query {
    getUserTransactions {
      id
      pickupDate
      totalPrice
      isPaid
      createdAt
      TransactionProducts {
        Product {
          name
        }
      }
    }
  }
`;
export const GET_TRANSACTIONS_BY_ID = gql`
  query getUserTransactionById($id: ID!) {
    getUserTransactionById(id: $id) {
      transaction {
        longitude
        latitude
      }
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
        TransactionProducts {
          Product {
            name
          }
        }
      }
      data {
        invoice_url
      }
    }
  }
`;
export const GET_DRIVER = gql`
  query Query($id: ID!) {
    getStaff(id: $id) {
      longitude
      latitude
    }
  }
`;
