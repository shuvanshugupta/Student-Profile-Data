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
            },
            feedback: {
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
    journey: {
        type: String,
        required: true,
    },
    goals: {
        type: String,
    },
    relDetails: {
        type: String,
    },
    githubLink: {
        type: String,
    },
    linkedinLink: {
        type: String,
    },
    resumeLink: {
        type: String,
    },
    collegeGithubLink: {
        type: String,
    },
    batch: {
        type: String,
    }
},{collection:'Profile'})

module.exports = mongoose.model('Profile', profileSchema)