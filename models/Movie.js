import mongoose from "mongoose";
const { Schema } = mongoose;

const MovieSchema = new Schema ({
    title: String,
    genre: String,
})

const Movie = mongoose.model("Movie", MovieSchema);
export default Movie;