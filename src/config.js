function verificarLogin() {
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

module.exports = {
    verificarLogin
}
