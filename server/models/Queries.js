import pkg from "graphql";

const {GraphQLInt, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString} = pkg;

export const userType = new GraphQLObjectType({
    name: "user",
    fields: () => ({

    })
})
