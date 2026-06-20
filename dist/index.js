import express from "express";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import { userMiddleWare } from "./middlewares.js";
import { random } from "./utils.js";
const jwt_seceret = "123123";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        await UserModel.create({
            username: username,
            password: password
        });
        res.status(200).json({
            message: "user created"
        });
    }
    catch (err) {
        res.status(411).json({ message: "user already exists" });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const existingUser = await UserModel.findOne({
            "username": username,
            "password": password
        });
        console.log(existingUser);
        if (existingUser) {
            const token = jwt.sign({
                id: existingUser._id.toString()
            }, jwt_seceret);
            res.status(200).json({
                token: token
            });
        }
        else {
            res.status(403).json({
                message: "incorrect credentials"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            message: "server error"
        });
    }
});
app.post("/api/v1/content", userMiddleWare, async (req, res) => {
    const link = req.body.link;
    const title = req.body.title;
    const typ = req.body.type;
    console.log(req.body);
    try {
        await ContentModel.create({
            "title": title,
            "link": link,
            "type": typ,
            "userId": req.userId
        });
        res.json({
            message: "content added"
        });
    }
    catch (err) {
        console.log(err);
        res.status(403).json({
            message: "error"
        });
    }
});
app.get("/api/v1/content", userMiddleWare, async (req, res) => {
    const userId = req.userId;
    console.log(userId);
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username");
    res.json({
        content: content
    });
    console.log(content);
});
app.delete("/api/v1/content", userMiddleWare, async (req, res) => {
    const contentId = req.body.contentId;
    await ContentModel.deleteMany({
        contentId,
        userId: req.userId
    });
    res.json({
        message: "Deleted"
    });
});
app.post("/api/v1/brain/share", userMiddleWare, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await LinkModel.findOne({
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash,
                message: "shareable link already exists"
            });
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        });
        res.json({
            hash: hash,
            message: "Updated shareable link"
        });
    }
    else {
        await LinkModel.deleteOne({
            userId: req.userId
        });
        res.json({
            message: 'updated shareable link'
        });
    }
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({ hash: hash });
    if (!link) {
        res.status(404).json({
            message: "Invalid Share Link"
        });
        return;
    }
    //@ts-ignore
    const content = await ContentModel.find({ userId: link.userId });
    const user = await UserModel.findOne({ _id: link.userId });
    if (!user) {
        res.status(404).json({
            message: "user not found, error should not happen"
        });
        return;
    }
    res.json({
        user: user.username,
        content: content
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map