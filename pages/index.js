
import Router from "next/router"
import { useEffect } from "react";


export default function Index() {
    
    useEffect(()=>{
        Router.push('/covid')
    },[])
    
    return(
        <div></div>
    )
    
};
