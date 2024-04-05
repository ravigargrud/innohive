import moongoose from 'mongoose';


const collaboratorSchema = new moongoose.Schema({
    collaboratorid: {
        type: String,
        required: true,
        unique: true
    },
    collaboratorname: {
        type: String,
        required: true
    },
    collaboratorcategory: {
        type: String,
        required: true
    },
    collaboratorprice: {
        type: Number,
        required: true
    },
    collaboratorquantity: {
        type: Number,
        required: true
    }
})

export const collaborator = moongoose.model('collaborator', collaboratorSchema);