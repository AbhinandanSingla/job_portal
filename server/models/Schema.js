import pkg from 'graphql';
import {getJobs} from "../controllers/admin.js";

const {GraphQLInt, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString} = pkg;


const userType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
        _id: {
            type: GraphQLID
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "name",
    fields: {
        codeimprove: {
            type: new GraphQLList(userType),
            resolve(parent, args) {
                return [{
                    id: 12, name: "hmmm", email: 'fwff'
                }];
            }
        },
        userList: {
            type: new GraphQLList(userType),
            resolve(parent, args) {
                let a = getJobs()
                return a;
            }
        }
    }
})
export default new GraphQLSchema({query: RootQuery})