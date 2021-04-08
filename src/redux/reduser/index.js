import { combineReducers } from 'redux';
import list  from './list'
import coments  from './comments'

export default combineReducers({
    list,
    coments
});