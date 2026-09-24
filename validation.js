function validateFeedback(data) {
    const { name, email, course, feedback } = data;

    if (!name || !email || !course || !feedback) {
        return {
            valid: false,
            message: "All fields are required."
        };
    }

    if (!email.includes("@")) {
        return {
            valid: false,
            message: "Please enter a valid email address."
        };
    }

    return {
        valid: true,
        message: "Validation successful."
    };
}

module.exports = { validateFeedback };
