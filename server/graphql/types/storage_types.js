export default `
    type StorageDrive {
        _id: String!
        name: String!
        capacity: String!
        seq_read: String!
        seq_write: String!
        power: String!
        interface_type: String!
    }

    type Query {
        storage( _id: ID! ) : StorageDrive!
        all_storage: [StorageDrive!]!
    }

    type Mutation {
        createStorageDrive( storage: CreateStorageDriveInput! ): StorageDrive!
        updateStorageDrive( _id: String!, storage: UpdateStorageDriveInput! ): StorageDrive!
        deleteStorageDrive( _id: String! ): StorageDrive!
    }
    
    input CreateStorageDriveInput {
        name: String!
        capacity: String!
        seq_read: String!
        seq_write: String!
        power: String!
        interface_type: String!
    }
    
    input UpdateStorageDriveInput {
        name: String
        capacity: String
        seq_read: String
        seq_write: String
        power: String
        interface_type: String
    }

`