import pkg from "graphql";

const {
    GraphQLInt, GraphQLID,
    GraphQLList, GraphQLObjectType,
    GraphQLSchema, GraphQLString,
} = pkg;

export const userType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        name: {
            type: GraphQLString
        }
    })
})

export const categoryType = new GraphQLObjectType({
    name: 'getJobsTitle',
    fields: () => ({
        _id: {type: GraphQLID},
        companyID: {
            type: GraphQLID
        }, companyName: {
            type: GraphQLString,
        },
        jobTitle: {
            type: GraphQLString,
        }, jobCategory: {
            type: GraphQLString,
        }, jobLocation: {
            type: GraphQLString,
        }, jobType: {
            type: GraphQLString,
        },
        jobDescription: {
            type: GraphQLString,
        },
        ApplicationDeadline: {
            type: GraphQLString,
        },
        Qualifications: {
            type: new GraphQLList(userType)
        },
        Experience: {
            type: GraphQLString,
        },
        SalaryRange: {
            type: GraphQLString,
        }
    })
})