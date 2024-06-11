
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
