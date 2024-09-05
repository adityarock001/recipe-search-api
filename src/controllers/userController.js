const userService = require('../services/userService')
const app_constant = require("../constants/app.json");
const validationHelper = require("../helpers/validation");

exports.userSignUp = async (request, response) => {
    try {
        //checking all the filled are given by the user or not
        const required_fields = ["username", "email", "password"];
        const validation = validationHelper.validation(
            required_fields,
            request.body
        );
        if (Object.keys(validation).length) {
            return response.json({
                success: 0,
                status_code: app_constant.BAD_REQUEST,
                message: validation,
                result: {}
            });
        }

        const valid_email = validationHelper.validEmail(request.body.email)
        if (!valid_email) {
            return response.json({
                success: 0,
                status_code: app_constant.BAD_REQUEST,
                message: 'Invalid email!',
                result: {},
            });
        }
        // if all the fields are filled then..
        const addUser = await userService.userSignup(request.body);
        return response.json(addUser);

    } catch (error) {
        console.log(error);
        response.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        });
    }
}

exports.userLogin = async (request, response) => {
    try {
        // checking all the filled are given by the user or not
        const required_fields = ["email", "password"];
        const validation = validationHelper.validation(
            required_fields,
            request.body
        );

        if (Object.keys(validation).length) {
            return response.json({
                success: 0,
                status_code: app_constant.BAD_REQUEST,
                message: validation,
                result: {},
            });
        }
        const loginUser = await userService.userLogin(request.body);

        return response.json(loginUser);
    } catch (error) {
        console.log(error);
        response.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        });
    }
};

exports.updateUserProfile = async (request, response) => {
    try {
        const userId = request.user.id;


        const updatedUser = await userService.updateUserProfile(
            userId,
            request.body
        );

        return response.json(updatedUser);
    } catch (error) {
        console.log(error);
        return response.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        });
    }
};
