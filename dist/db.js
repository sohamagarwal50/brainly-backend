import mongoose, { model, Schema } from "mongoose";
try {
    await mongoose.connect("mongodb+srv://sohamagarwal50_db_user:GV5ujS5gdW0uboRp@cluster0.yeqhlz1.mongodb.net/brainly");
    console.log("db connected sucessfully");
}
catch (err) {
    console.log("error connection to db");
}
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});
const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }
});
const LinkSchema = new Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: "User", require: true,
        unique: true
    }
});
export const UserModel = model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);
export const LinkModel = model("ShareLink", LinkSchema);
//# sourceMappingURL=db.js.map