/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'

function FadeInWrapper({children}) {
  return (
    <motion.div initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:0.5,ease:"easeInOut"}}>
       {children} 
    </motion.div>
  )
}

export default FadeInWrapper