import moongoose from 'mongoose';

const infrastructureSchema = new moongoose.Schema({
    infrastructureid: {
        type: String,
        required: true,
        unique: true
    },
    infrastructurename: {
        type: String,
        required: true
    },
    infrastructurecategory: {
        type: String,
        required: true
    },
    infrastructurelocation: {
        type: String,
        required: true
    }
});