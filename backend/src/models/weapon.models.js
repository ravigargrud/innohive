import moongoose from 'mongoose';

const weaponSchema = new moongoose.Schema({
    weaponid: {
        type: String,
        required: true,
        unique: true
    },
    weaponname: {
        type: String,
        required: true
    },
    weaponcategory: {
        type: String,
        enum: {values: ['Guns', 'Artillery'], message: 'Invalid Category'},
        required: true
    },
    weaponprice: {
        type: Number,
        required: true
    },
    weaponquantity: {
        type: Number,
        required: true
    }
})

export const weapon = moongoose.model('weapon', weaponSchema);