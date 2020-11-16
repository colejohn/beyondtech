import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function () {
  return this.totring();
};

const StorageDriveSchema = new Schema({
name:{
    type: String,
    required: true
},
capacity:{
    type: String,
    required: true
},
seq_read:{
    type: String,
    required: true
},
seq_write:{
    type: String,
    required: true
},
power: {
    type:String,
    required:true
},
interface_type: {
    type: String,
    required: true
}
});

export default mongoose.model("StorageDrive", StorageDriveSchema);
