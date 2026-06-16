import jwt from "jsonwebtoken";
const secret = "123123";
export const userMiddleWare = (req, res, next) => {
    const token = req.headers["authorization"] ?? "";
    console.log(token + "checker");
    const decoded = jwt.verify(token, secret);
    if (decoded) {
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "you are not logged in"
        });
    }
};
//# sourceMappingURL=middlewares.js.map