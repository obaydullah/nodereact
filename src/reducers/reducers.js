const initialState = {
    mobile: "00"
};

const phoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_phone":
            return {
                mobile: action.payload.phoneNumber
            }
        default:
            return state
    }
}

export default phoneReducer;