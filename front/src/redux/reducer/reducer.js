import { POST_DATA ,GET_DATA,POSTSEAT} from "../actiontype/actiontype"
import { GET_CURRENT, LOG_IN, LOG_OUT, UPDATE, REGISTER, GETALL, UPDIMG} from '../actiontype/actiontypelog'
import { GETONE, GET_BASE } from "../actiontype/actiontypepost"

const initialState = {
  post:[],
  user:{},
  prod:[],
  film:[],
  users:[],
  img:[],
  seat:[]
}

 const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case POST_DATA:
    return { ...state, post:payload.makepdf }
case GET_DATA:
  return {...state, post:payload.makepdf}
  case POSTSEAT:
    return {...state, seat:payload.makepdf}
  case REGISTER:
  case LOG_IN:
    localStorage.setItem("token",payload.token)  
  return { ...state, user:payload.user}

  case GET_CURRENT:
   return {...state,user:payload.user}

   case LOG_OUT:
    localStorage.removeItem("token")
    return {user:{}}

  case UPDATE:
    return {...state,user:payload.user}

    case UPDIMG:
      return {...state,img:payload.user}
   case GET_BASE:
     return { ...state, prod:payload.crud}

     case GETONE: 
     return {...state,film:payload.crud}
    case GETALL:
    return {...state,users:payload.user}
  
  default:
    return state
  }
}
export default reducer