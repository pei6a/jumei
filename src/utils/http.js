import {fetch as fetchPro} from "whatwg-fetch"
import qs from "qs"
const get=(url,data)=>{
    let str=""
    for (var key in data){
       str+="&"+key+"="+data[key] 
    }
    url=url+str.substr(1)
    return fetchPro(url,{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },
        credentials:"include"
    }).then(res=>res.json())
}
const post=(url,data)=>{
    return fetchPro(url,{
        method:"POST",
        headers:{
            "contents-type":"application/x-www-form-urlencoded"
        },
        credentials:"include",
        body:qs.stringify(data)
    })
}
export default {
    get,
    post
}