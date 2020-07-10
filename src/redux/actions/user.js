import { CHANGE_MENU_ITEM, MOVE_UP, MOVE_DOWN, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../types"

export const changeMenuItem = (data) => {
    return {
        type: CHANGE_MENU_ITEM,
        payload: data
    }
}

export const moveUp = () => {
    return {
        type: MOVE_UP
    }
}

export const moveDown = () => {
    return {
        type: MOVE_DOWN
    }
}

export const addItem = () => {
    return {
        type: ADD_ITEM
    }
}

export const deleteItem = () => {
    return {
        type: DELETE_ITEM
    }
}

export const editItem = (value) => {
    return {
        type: EDIT_ITEM, 
        payload: value
    }
}