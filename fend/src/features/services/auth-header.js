
const authHeader = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    // check if an authorized user exists and add their token to the request header
    if (user && user.accesToken){
        return {Authorization:'Bearer'+user.accesToken}
    }
    else{
        return {}
    }
}

export default authHeader