import moongoose from 'mongoose';

const vehicleSchema = new moongoose.Schema({
    vehicleid: {
        type: String,
        required: true,
        unique: true
    },
    vehiclename: {
        type: String,
        required: true
    },
    vehiclecategory: {
        type: String,
        required: true
    },
    vehicleprice: {
        type: Number,
        required: true
    },
    vehiclequantity: {
        type: Number,
        required: true
    }
});

export const vehicle = moongoose.model('vehicle', vehicleSchema);