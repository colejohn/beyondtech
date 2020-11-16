import StorageDrive from '../../models/storage_model'

export default {
    Query: {
        storage: async ( parent , {
            _id
        }, context, info ) => {
            return await StorageDrive.findOne({_id}).exec();
        },
        all_storage: async (parent,args, context, info ) => {
            const res = await StorageDrive.find({}).populate().exec();
            return res.map((s) => ({
                _id: s._id.toString(),
                name: s.name,
                capacity: s.capacity,
                seq_read: s.seq_read,
                seq_write: s.seq_write,
                power: s.power,
                interface_type: s.interface_type
            }));
        }
    },
    Mutation: {
        createStorageDrive: async (parent, { storage }, context, info)=> {
            const newStorageDrive = await new StorageDrive({
                name: storage.name,
                capacity: storage.capacity,
                seq_read: storage.seq_read,
                seq_write: storage.seq_write,
                power: storage.power,
                interface_type: storage.interface_type
            })
            return await new Promise((resolve, reject)=>{
                newStorageDrive.save((err,res)=>{
                    err ? reject(err): resolve(res);
                })
            })
        },
        updateStorageDrive: async (parent, {
            _id, storage
        }, context, info) => {
            return new Promise((resolve, reject) => {
                StorageDrive.findOneAndUpdate(_id,{
                    $set: {
                        ...storage
                    }
                }, {
                    new: true
                }).exec((err, res)=>{
                    err ? reject(err): resolve(res);
                })
            })
        },
        deleteStorageDrive: async (parent, {
            _id
        }, context, info) => {
            return new Promise((resolve, reject)=>{
                StorageDrive.findByIdAndDelete(_id).exec((err,res)=>{
                    err ? reject(err) : resolve(res);
                })
            })
        }
    }
}