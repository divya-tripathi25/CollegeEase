import bcrypt from "bcryptjs";
import createError from "http-errors";
import moment from "moment";
import { signAccessToken } from "../utils/jwt.config.js";
import adminModel from "../models/admin.user.model.js";


export const registerAdminController = async (req, res, next) => {
    try {
        const { name, phone, email, password } = req.body;
        const checkAdminIsExist = await adminModel.findOne({ email });
        if (checkAdminIsExist) return next(createError.Conflict("Admin already exists with this email"));
        const hashedPassword = await bcrypt.hash(password, 10);
        const registerAdmin = new adminModel({ name, phone, email, password: hashedPassword, role: "Admin" });
        const savedAdmin = await registerAdmin.save();
        const adminRegisterDateTime = moment(savedAdmin.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        const accessToken = await signAccessToken(savedAdmin);
        res.status(201).json({ adminRegisterDateTime, accessToken });
    } catch (error) {
        console.log(error);
        next(createError.InternalServerError());
    }
}

export const loginAdminController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const checkAdmin = await adminModel.findOne({ email }).select("+password");
        if (!checkAdmin) return next(createError.NotFound('Credentials not found'));

        const checkPassword = await bcrypt.compare(password, checkAdmin.password);
        if (!checkPassword) return next(createError.NotFound('Credentials not found'));

        const adminLoginDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        const accessToken = await signAccessToken(checkAdmin);
        res.json({ adminLoginDateTime, accessToken});
    } catch (error) {
        console.log(error);
        next(createError.InternalServerError());
    }
}

export const getLoggedInAdminController = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const user = await adminModel.findById(userId);
        if (!user) return next(createError.NotFound('User not found'));
        res.json({ user });
    } catch (error) {
        console.log(error);
        next(createError.InternalServerError());
    }
}