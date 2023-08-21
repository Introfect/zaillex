import axios from "axios";

export const doLogin=(data)=>{
   localStorage.setItem('token',data.token)  
   localStorage.setItem('user',data.user.name) 
}

//isLOgin
   export const isLogin=()=>{
       if(localStorage.getItem('token')){
           return true
       }
       return false
   }

   //do logout
   export const doLogout=()=>{
       localStorage.removeItem('token')

   }
   //currentUser
   export const currentUser=()=>{
       if(isLogin()){
           const data=localStorage.getItem('user')
           return data
       }
       return false
   }

   //get token
   export const getToken=()=>{
       if(isLogin()){
           const data=localStorage.getItem('token')
           return data
           console.log(    data)
       }
       return false
   }
//  export const privateAxios = axios.create({
//    baseURL: 'http://localhost:5000/api/v1',
// })
// privateAxios.interceptors.request.use((config) => {
//    const token = getToken()
//    if(token){
//    config.headers.authorization = `Bearer ${token}`
//    return config
//    }
// }, error=> Promise.reject(error))

