import { CHANGE_MENU_ITEM, MOVE_UP, MOVE_DOWN, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../types";

const initialState = {
    menus: [
        { id: 1, name: 'default', selected: true },
        { id: 2, name: 'game', selected: false },
        { id: 3, name: 'movie', selected: false },
        { id: 4, name: 'music', selected: false }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MENU_ITEM:
            const updateMenus = state.menus.map(item => item.id === action.payload.id ? {
                id: action.payload.id,
                name: action.payload.name,
                selected: true
            } : {
                    id: item.id,
                    name: item.name,
                    selected: false
                })
            return {
                ...state,
                menus: updateMenus
            }
        case MOVE_UP:
            const selectedMoveup = state.menus.filter(item => item.selected === true)[0]
            const indexMoveUp = state.menus.indexOf(selectedMoveup)
            let updateMoveUp = [...state.menus]
            if (indexMoveUp > 0) {
                const temp = updateMoveUp[indexMoveUp]
                updateMoveUp[indexMoveUp] = updateMoveUp[indexMoveUp - 1]
                updateMoveUp[indexMoveUp - 1] = temp
            }
            return {
                ...state,
                menus: updateMoveUp
            }
        case MOVE_DOWN:
            const selectedMovedown = state.menus.filter(item => item.selected === true)[0]
            const indexSelect = state.menus.indexOf(selectedMovedown)
            let updateMoveDown = [...state.menus]
            if (indexSelect !== state.menus.length - 1) {
                const temp = updateMoveDown[indexSelect]
                updateMoveDown[indexSelect] = updateMoveDown[indexSelect + 1]
                updateMoveDown[indexSelect + 1] = temp
            }
            return {
                ...state,
                menus: updateMoveDown
            }
        case ADD_ITEM:
            let updateAdd = state.menus.map(({ id, name }) => ({
                id,
                name,
                selected: false
            }))
            updateAdd.push({
                id: new Date().getTime(),
                name: 'New Folder',
                selected: true
            })
            return {
                ...state,
                menus: updateAdd
            }
        case DELETE_ITEM:
            const selectedItem = state.menus.filter(e => e.selected === true)
            const delIndex = state.menus.indexOf(selectedItem[0])
            let updateDel = state.menus.filter(e => e.selected === false)
            if (delIndex === 0) {
                updateDel[0].selected = true
            } else {
                updateDel = updateDel.map((item, index) => index === delIndex - 1 ? { ...item, selected: true } : item)
            }
            return {
                ...state,
                menus: updateDel
            }
        case EDIT_ITEM:
            const updateEdit = state.menus.map(item => item.selected === true ?
                { id: item.id, name: action.payload, selected: true } : item)
            return {
                ...state,
                menus: updateEdit
            }
        default:
            return state
    }
}

export default reducer

