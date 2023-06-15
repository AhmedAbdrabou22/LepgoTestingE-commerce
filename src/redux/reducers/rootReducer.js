// هنا هنعمل compine all reducers

import {combineReducers} from 'redux'
import categoryReducer from './CategoryReducer'
import GetProductReducer from './GetProductReducer'


let rootReducer = combineReducers({
    allCategory : categoryReducer,
    allProducts : GetProductReducer
})  

export default rootReducer