const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id // Use action.id, since we're passing it as id in the action creator
            }

        default:
            return state
    }
}

// action creators
export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any

// types
type ActionType = { type: 'SET_THEME_ID', id: number }
type InitialStateType = typeof initState

