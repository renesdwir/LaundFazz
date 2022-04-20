import { gql, useMutation } from "graphql-tag";

export const GET_STAFFTRANSACTION = gql`
query GetStaffTransactions {
    getStaffTransactions {
      id
      CustomerId
      StaffId
      isPaid
      status
      pickupDate
      deliveryDate
      longitude
      latitude
      totalPrice
    }
  }
`

export const GET_TRANSACTIONDETAIL = gql`
query GetStaffTransactionById($getStaffTransactionByIdId: ID!) {
  getStaffTransactionById(id: $getStaffTransactionByIdId) {
    id
    CustomerId
    StaffId
    isPaid
    status
    pickupDate
    deliveryDate
    longitude
    latitude
    totalPrice
    TransactionProducts {
      id
      TransactionId
      ProductId
      Product {
        id
        name
        price
      }
    }
    createdAt
  }
}
`

export const PUT_STATUS = gql`
mutation PutTransaction($putTransactionId: ID!) {
  putTransaction(id: $putTransactionId) {
    id
    status
  }
}
`
export const PATCH_LOCATION = gql`
  mutation StaffPatchPosition($longitude: String, $latitude: String) {
    staffPatchPosition(longitude: $longitude, latitude: $latitude) {
      longitude
      latitude
    }
  }
`;
