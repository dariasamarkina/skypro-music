// /* eslint-disable default-param-last */
// import { SET_CURRENT_PLAYLIST, SET_CURRENT_TRACK, SET_IS_PLAYING } from "../actions/types/script";

// const initialState = {
//     track: {},
//     isPlaying: false,
// }

// export default function currentTrackReducer (state = initialState, action) {
//     switch(action.type) {

//         case SET_CURRENT_TRACK: {
//             return {
//                 ...state,
//                 track: action.payload,
//             }
//         }

//         case SET_IS_PLAYING: {
//             return {
//                 ...state,
//                 isPlaying: action.payload,
//             }
//         }

//         case SET_CURRENT_PLAYLIST: {
//             return {
//                 ...state,
//                 playlist: action.payload,
//             }
//         }

//         default:
//             return state;
//     }
// }