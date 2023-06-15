
import baseURL from '../../Api/baseURL.js'

const getAllCategory = () => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/categories')

            dispatch({ type: 'getAllCategory', payload: res.data })
        }catch(e){
            dispatch({ type: 'Get_Errors', payload: "Error through Loadin Data"+e })
        }
    }
}

const getAllProducts = () => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get(`/api/v1/products`)
            
            dispatch({ type: 'getAllProducts', payload: res.data })
        }catch(e){
            dispatch({ type: 'Get_Errors', payload: "Error through Loadin Data"+e })
        }
    }
}
const getAllProductsPage = (page) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get(`/api/v1/products?page=${page}`)
            
            dispatch({ type: 'getAllProducts', payload: res.data })
        }catch(e){
            dispatch({ type: 'Get_Errors', payload: "Error through Loadin Data"+e })
        }
    }
}




export  {getAllCategory , getAllProducts ,getAllProductsPage}