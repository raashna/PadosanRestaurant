
export const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        return "Please write a 10-digit number";
    }
    return "";
};

export const validateCity = (city) => {
    if (city.toLowerCase() !== "ranchi") {
        return "We only accept orders from Ranchi";
    }
    return "";
};

export const validateState = (state) => {
    if (state.toLowerCase() !== "jharkhand") {
        return "We only accept orders from Jharkhand";
    }
    return "";
};


export const validateEmail = (email) => {
    const emailRegex = /^(?:[a-zA-Z0-9._%+-]+@gmail\.com|[a-zA-Z0-9._%+-]+@icloud\.com)$/;
    if (!emailRegex.test(email)) {
        return "Please create with real mail id";
    }
    return "";
};

export const validatePassword = (password) => {
    if (password.length < 8) {
        return "Password must contain 8 digits or more";
    }
    return "";
};
