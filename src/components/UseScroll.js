import {useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";


export const useScroll = () => {
    const controls = useAnimationControls();
    const [element, inView] = useInView({
      threshold: 0.5,
    //   triggerOnce: true
    });
    useEffect(()=>{
        if (inView) {
            controls.start("show");
          } else {
            controls.start("hidden");
          }
    },[controls,inView])
  
    return [element, controls];
}
 