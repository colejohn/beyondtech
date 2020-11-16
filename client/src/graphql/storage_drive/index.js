import gql from "graphql-tag";
export const GET_ALL_STORAGE_DRIVE = gql`
  query {
    all_storage {
      _id
      name
      capacity
      seq_read
      seq_write
      power
      interface_type
    }
  }
`;

export const CREATE_STORAGE_DRIVE = gql`
mutation createStorageDrive($storage: CreateStorageDriveInput!){
    createStorageDrive(storage: $storage) {
    name
    capacity
    seq_read
    seq_write
    power
    interface_type
  }
}

`;
export const UPDATE_STORAGE_DRIVE = gql`
    mutation updateStorageDrive($id: String! , $storage: UpdateStorageDriveInput!   ){
        updateStorageDrive( _id: $id, storage: $storage){
          _id
          name
          capacity
          seq_read
          seq_write
          power
          interface_type
      }
    }
`;
export const DELETE_STORAGE_DRIVE = gql`
    mutation deleteStorageDrive($id: String!){
        deleteStorageDrive(_id: $id){
            name
            capacity
            seq_read
            seq_write
            power
            interface_type
        }
    }
`;

