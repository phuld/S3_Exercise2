import { SHOW_DEL_ALERT, HIDE_DEL_ALERT, DELETE_ITEM, SHOW_EDIT, HIDE_EDIT, SHOW_CLICK_OUTSIDE, HIDE_CLICK_OUTSIDE } from "../types";

const initialState = {
    isShowDelAlert: false,
    isShowEdit: false,
    isShowEditField: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DEL_ALERT:
            return {
                ...state,
                isShowDelAlert: true
            }
        case HIDE_DEL_ALERT:
            return {
                ...state,
                isShowDelAlert: false
            }
        case DELETE_ITEM:
            return {
                ...state,
                isShowDelAlert: false
            }
        case SHOW_EDIT:
            return {
                ...state,
                isShowEdit: true
            }
        case HIDE_EDIT:
            return {
                ...state,
                isShowEdit: false
            }
        case SHOW_CLICK_OUTSIDE:
            return {
                ...state,
                isShowEditField: true
            }
        case HIDE_CLICK_OUTSIDE:
            return {
                ...state,
                isShowEditField: false
            }
        default:
            return state
    }
}

export default reducer