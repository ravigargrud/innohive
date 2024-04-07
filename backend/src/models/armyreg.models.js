import moongoose from 'mongoose';

const armyregSchema = new moongoose.Schema({
        username: { 
        type: String,
        
        },
        regimentid: {
        type: String,
        
        unique: true
        },
        password: {
        type: String,
     
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