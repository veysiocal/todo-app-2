export default function reducer(state, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLogin: true,
                username: action.username,
            }
            default: 
            return {
                ...state
            }
    }
}