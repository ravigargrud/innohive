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
        weapons: {
            type: moongoose.Schema.Types.weapon,
            ref: 'weapon'
        },
        vehicles: {
            type: moongoose.Schema.Types.vehicle,
            ref: 'vehicle'
        },
        infrastructure: {
            type: moongoose.Schema.Types.infrastructure,
            ref: 'infrastructure'
        },
        collaborators: {
            type: moongoose.Schema.Types.collaborator,
            ref: 'collaborator'
        }
})

export const armyReg = moongoose.model('armyReg', armyregSchema);