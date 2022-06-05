const mongoose = require('mongoose')
const {SchemaTypes} = require("mongoose");

const profileSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    rollNo : {
        type : String,
        required : true
    },
    branch : {
        type : String,
        required: true
    },
    contactNo : {
        type : String,
    },
    email: {
        type: String,
    },
    internships: {
        type: [
            {
                organisation: {
                    type: String,
                },
                designation: {
                    type: String,
                },
                duration: {
                    type: Number,
                },
                location: {
                    type: String,
                },
                description: {
                    type: String,
                }
            }
        ]
    },
    offers: {
        type: [
            {
                organisation: {
                    type: String,
                },
                designation: {
                    type: String,
                },
                package: {
                    type: SchemaTypes.Decimal128,
                },
                location: {
                    type: String,
                }
            }
        ]
    },
    currentPosition: {
        organisation: {
            type: String,
        },
        package: {
            type: SchemaTypes.Decimal128,
        },
        location: {
            type: String,
        }
    },
    courses: [
        {
            name: {
                type: String,
            },
            organisation: {
                type: String,
            }
        },
    ],
    achievements: [
        {
            achType: {
                type: String,
            },
            achBody: {
                type: String,
            }
        }
    ],
    journeyLink: {
        type: String,
        required: true,
    },
    goals: {
        type: String,
    },
    relDetails: {
        type: String,
    }
},{collection:'Profile'})

module.exports = mongoose.model('Profile', profileSchema)