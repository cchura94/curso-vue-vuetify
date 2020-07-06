export const url_base = "https://edtics.herokuapp.com/api";
export const url_login = url_base + "/auth/login";

export const getHeader = function(){
  const token = JSON.parse(atob(localStorage.getItem('token')))
  const headers = {
      'Accept': 'application/json',
      'Authorization': "bearer "+token.access_token
  }
  return headers;
}



export const verificarLogin = function(){
    try{
        var token = JSON.parse(atob(localStorage.getItem("token")))
        if(token.access_token && token){
          return true
        }else{
          return false
        } 
  
      }catch(error){
        localStorage.clear()
        return false
      }
}


