import { body } from 'express-validator';

export const registerAdminUserValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('phone')
        .notEmpty().withMessage('Phone number is required')
        .isMobilePhone().withMessage('Please provide a valid phone number')
        .isLength({ min: 10, max: 15 }).withMessage('Phone number must be between 10 and 15 digits long'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

export const loginAdminUserValidation = [
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];


export const registerStudentUserValidation = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('course')
        .notEmpty().withMessage('Course is required')
        .isString().withMessage('Course must be a valid string'),
    body('semester')
        .notEmpty().withMessage('Semester is required'),
    body('admissionId')
        .notEmpty().withMessage('Admission ID is required')
        .isAlphanumeric().withMessage('Admission ID must be alphanumeric'),
    body('phone')
        .notEmpty().withMessage('Phone number is required')
        .isMobilePhone().withMessage('Please provide a valid phone number')
        .isLength({ min: 10, max: 15 }).withMessage('Phone number must be between 10 and 15 digits long'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];