import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const ScrollTop = () => {
    const location = useLocation();
    console.log(location.pathname);
    
    useEffect(()=>{
        window.scroll({
            top: 0,
            left:0
        })
    },[])
    return null;
}
 