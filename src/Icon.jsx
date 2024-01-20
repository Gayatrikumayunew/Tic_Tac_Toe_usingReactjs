import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'
import { ImCross } from "react-icons/im";

import { FiCircle } from "react-icons/fi";

import { IoFlowerSharp } from "react-icons/io5";
import { BsFlower1 } from "react-icons/bs";





function Icon ({name}){
if(name=="circle"){
    return <FiCircle/>
}
else if(name=="cross"){
    return <ImCross/>;

}
else{
    return <BsFlower1/>
}
}
export default Icon;