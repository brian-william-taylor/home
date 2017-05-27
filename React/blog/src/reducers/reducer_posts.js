import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            return { ...state, [action.payload.data.id] : action.payload.data}
        /*            
            const post = action.payload.data;

            Take all posts and put them into this new object
            const newState = { ...state };
            newState[post.id] = post;
            return newState;

            Same as Below
        */
        case DELETE_POST:
            return _.omit(state, action.payload);
        default: 
            return state;
    }
}