import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            //always return a new instance of state
           // return state.cat([action.payload.data]);
           //Both of these are the same, bottom is es6 syntax
            return [action.payload.data, ...state];
    }
    return state;
}