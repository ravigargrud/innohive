import moongoose from 'mongoose';

const armyregSchema = new moongoose.Schema({
        regimentid: {
        type: String,
        required: true,
        unique: true
        },
        password: {
        type: String,
        required: true
        },
        soldierCount: {
            type: Number
        },
        weapons: [{
            type: moongoose.Schema.Types.ObjectId,
            ref: 'weapon'
        }],
        vehicles: [{
            type: moongoose.Schema.Types.ObjectId,
            ref: 'vehicle'
        }],
        infrastructure: [{
            type: moongoose.Schema.Types.ObjectId,
            ref: 'infrastructure'
        }],
        collaborators: [{
            
            type: moongoose.Schema.Types.ObjectId,
            ref: 'armyReg'
        }]
}, {timestamps: true})

export const armyReg = moongoose.model('armyReg', armyregSchema);