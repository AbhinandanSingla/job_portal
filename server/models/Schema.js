import pkg from 'graphql';
import {getJobs} from "../controllers/admin.js";
import {categoryType, userType} from "./Queries.js";

const {GraphQLInt, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString} = pkg;


const RootQuery = new GraphQLObjectType({
    name: "name",
    fields: {
        jobList: {
            type: new GraphQLList(categoryType),
            resolve(parent, args) {
                return getJobs();
            }
        }
    }
})
const userList = {
    type: userType,
    args: {
        name: {type: GraphQLString,},
        email: {type: GraphQLString},
        gender: {type: GraphQLString}
    }, resolve(parent, args) {
        return args
    }
}
const Mutation = new GraphQLObjectType({
    name: 'mutation', fields: {createUser: userList}
})
export default new GraphQLSchema({query: RootQuery, mutation: Mutation})