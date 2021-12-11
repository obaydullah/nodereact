export const set_phone = (phone) => {
    return {
        type: "set_phone",
        payload: {
            phoneNumber: phone
        }
    }
}