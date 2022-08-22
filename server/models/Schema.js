import pkg from "graphql";
import {getCompanyJobs, getJobs, unregisteredCompanies} from "../controllers/admin.js";
import {companyType, jobType, userType} from "./Queries.js";
import {getAppliedJobs, getUser} from "../controllers/user.js";

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
        },
        unregistercompanies: {
            type: new GraphQLList(companyType),
            resolve(parent, args) {
                return unregisteredCompanies();
            }
        },
        companyJobs: {
            type: new GraphQLList(jobType),
            args: {
                id: {type: GraphQLString}
            },
            resolve(parent, args) {
                return getCompanyJobs(args.id);
            },
        },
        user: {
            type: userType,
            args: {
                id: {type: GraphQLString, defaultValue: ""}
            },
            resolve(parent, args) {
                return getUser(args.id);
            },
        },
        appliedJobs: {
            type: new GraphQLList(jobType), args: {
                ids: {type: new GraphQLList(GraphQLString), defaultValue: ""}
            },
            resolve(parent, args) {
                return getAppliedJobs(args.ids)
            }
        }

    },
});
export default new GraphQLSchema({query: RootQuery});
