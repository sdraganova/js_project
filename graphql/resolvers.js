import {mergeResolvers} from "@graphql-tools/merge";
import userResolver from "./resolvers/user.js";
import movieResolver from "./resolvers/movie.js";


export default mergeResolvers([userResolver, movieResolver]);