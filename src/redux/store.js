//store : خيكون فيه كل compine reducers لان هنعمل اكتر من reducer 

import {createStore , applyMiddleware} from "redux";
import rootReducer from './reducers/rootReducer.js'
import thunk from "redux-thunk";

const intialvalue = {};
let middleware = [thunk]
const store = createStore(rootReducer , intialvalue , applyMiddleware(...middleware));
export default store