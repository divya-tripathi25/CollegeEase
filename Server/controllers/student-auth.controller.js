import createError from "http-errors";
import studentModel from "../models/student.model.js";
import { signAccessToken } from "../utils/jwt.config.js";
import moment from "moment";
import bcrypt from "bcryptjs";

export const registerStudentController = async (req, res, next) => {
    try {
        const { name, course, semester, admissionId, phone, email, password } = req.body;
        const checkStudentIsExist = await studentModel.findOne({ email });
        if (checkStudentIsExist) return next(createError.Conflict("Student already exists with this email"));
        const hashedPassword = await bcrypt.hash(password, 10);
        const registerStudent = new studentModel({ name, course, semester, admissionId, phone, email, password: hashedPassword, role: "Student" });
        const savedStudent = await registerStudent.save();
        const studentRegisterDateTime = moment(savedStudent.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        const accessToken = await signAccessToken(savedStudent);
        res.status(201).json({ studentRegisterDateTime, accessToken });
    } catch (error) {
        console.log(error);
        next(createError.InternalServerError());
    }
}

export const loginStudentController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        const checkStudent = await studentModel.findOne({ email }).select("+password");
        if (!checkStudent) return next(createError.NotFound('Credentials not found'));

        const checkPassword = await bcrypt.compare(password, checkStudent.password);
        if (!checkPassword) return next(createError.NotFound('Credentials not found'));

        const studentLoginDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        const accessToken = await signAccessToken(checkStudent);
        res.json({ studentLoginDateTime, accessToken });
    } catch (error) {
        console.log(error);
        next(createError.InternalServerError());
    }
}

export const getLoggedInStudentController = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const user = await studentModel.findById(userId);
        if (!user) return next(createError.NotFound('User not found'));
        res.json({ user });
    } catch (error) {
        console.log(error);
        next(createError.InternalServerError());
    }
}