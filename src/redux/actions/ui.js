import { SHOW_DEL_ALERT, HIDE_DEL_ALERT, SHOW_EDIT, HIDE_EDIT, SHOW_CLICK_OUTSIDE, HIDE_CLICK_OUTSIDE } from "../types"

export const showDelAlert = () => {
    return {
        type: SHOW_DEL_ALERT
    }
}

export const hideDelAlert = () => {
    return {
        type: HIDE_DEL_ALERT
    }
}

export const showEdit = () => {
    return {
        type: SHOW_EDIT
    }
}

export const hideEdit = () => {
    return {
        type: HIDE_EDIT
    }
}

export const showClickOutside = () => {
    return {
        type: SHOW_CLICK_OUTSIDE
    }
}

export const hideClickOutside = () => {
    return {
        type: HIDE_CLICK_OUTSIDE
    }
}