import axios from "axios"
const gitHubUrl="https://api.github.com"

export async function getGitHubInfo(){
    const res= await axios({url:"/users/MariaLemos/repos",method:"GET",baseURL:gitHubUrl})
    if(res.status===200){
    return await res.data
}
}