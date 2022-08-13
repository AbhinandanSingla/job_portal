import pkg from "graphql";
import {getJobs} from "../controllers/admin.js";
import {jobType} from "./Queries.js";

const {
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} = pkg;

const RootQuery = new GraphQLObjectType({
    name: "name",
    fields: {
        jobList: {
            type: new GraphQLList(jobType),
            args: {
                id: {
                    type: GraphQLString, defaultValue: ""
                }
            },
            resolve(parent, args) {
                return getJobs(args.id);
            },
        },
        jobDesc: {
            type: jobType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parent, args) {
                return getJobs(args.id);
            },
        }
    },
});
export default new GraphQLSchema({query: RootQuery});
