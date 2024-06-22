
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
        return "Please create with real Email Id";
    }
    return "";
};

export const validatePassword = (password) => {
    if (password.length < 8) {
        return "Password must contain 8 digits or more";
    }
    return "";
};


export const validatePinCode = (pincode) => {
    const allowedPinCodes = [
        "829205", "829210", "829209", "829208", "835204", "834008", "834002", "835102", "835325", 
        "835227", "835225", "835103", "835210", "835221", "835301", "835216", "835205", "834010",
        "834009", "835303", "835219", "835202", "835222", "835234", "835209", "835214", "835217",
        "834002", "834001", "834003"
    ];

    if (!allowedPinCodes.includes(pincode.trim())) {
        return "We currently do not deliver to your area.";
    }
    return "";
};
