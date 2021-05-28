import {mergeTypeDefs} from "@graphql-tools/merge";
import userType from "./types/user.js";
import movieType from "./types/movie.js";


export default mergeTypeDefs([userType, movieType]);
