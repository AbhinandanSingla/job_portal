import pkg from "graphql";

const {
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} = pkg;

export const jobType = new GraphQLObjectType({
    name: "getJobsTitle",
    fields: () => ({
        _id: {type: GraphQLID},
        companyID: {
            type: GraphQLID,
        },
        companyName: {
            type: GraphQLString,
        },
        jobTitle: {
            type: GraphQLString,
        },
        jobCategory: {
            type: GraphQLString,
        },
        jobLocation: {
            type: GraphQLString,
        },
        jobType: {
            type: GraphQLString,
        },
        jobDescription: {
            type: GraphQLString,
        },
        ApplicationDeadline: {
            type: GraphQLString,
        },
        Qualifications: {
            type: new GraphQLList(GraphQLString)
        },
        Experience: {
            type: GraphQLString,
        },
        SalaryRange: {
            type: GraphQLString,
        },
        jobProfile: {
            type: GraphQLString
        }
    }),
});
export const companyType = new GraphQLObjectType({
    name: "companies",
    fields: () => ({
        _id: {
            type: GraphQLID
        },

        companyName: {
            type: GraphQLString
        },
        phoneNumber: {
            type: GraphQLInt,
        },
        jobs: {
            type: new GraphQLList(jobType)

        },
        GSTIN: {
            type: GraphQLInt
        },
        companyType: {
            type: GraphQLString
        },
        appliedDate: {
            type: GraphQLString
        }, username: {
            type: GraphQLString
        }
    })
})