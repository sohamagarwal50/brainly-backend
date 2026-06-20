import mongoose from "mongoose";
export declare const UserModel: mongoose.Model<{
    password?: string | null;
    username?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    password?: string | null;
    username?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password?: string | null;
    username?: string | null;
}, mongoose.Document<unknown, {}, {
    password?: string | null;
    username?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ContentModel: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    title?: string | null;
    link?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    title?: string | null;
    link?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    title?: string | null;
    link?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    title?: string | null;
    link?: string | null;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    title?: string | null;
    link?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    title?: string | null;
    link?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    title?: string | null;
    link?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    title?: string | null;
    link?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const LinkModel: mongoose.Model<{
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
}, mongoose.Document<unknown, {}, {
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map