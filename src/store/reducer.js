export const reducer = (state, action) => {
    switch (action.type) {
        case "updateArtist":
            return {
                ...state,
                artistId: action.id
            };
        default: return state
    }
}