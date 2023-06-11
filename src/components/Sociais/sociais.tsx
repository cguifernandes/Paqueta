import clsx from "clsx";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import { SociaisProps } from "../types";

const Sociais = (className : SociaisProps) => {
    return (  
        <div className={clsx("flex items-center justify-around", className)}>
            <div className="group p-2 mr-1 cursor-pointer rounded-full duration-200 hover:bg-orange-100">
                <FaInstagram className="duration-200 text-orange-100 group-hover:text-white" size={32} />
            </div>
            <div className="group p-2 mr-1 cursor-pointer rounded-full duration-200 hover:bg-orange-100">
                <FaFacebook className="duration-200 text-orange-100 group-hover:text-white" size={32} />
            </div>
            <div className="group p-2 mr-1 cursor-pointer rounded-full duration-200 hover:bg-orange-100">
                <FaTwitter className="duration-200 text-orange-100 group-hover:text-white" size={32} />
            </div>
            <div className="group p-2 mr-1 cursor-pointer rounded-full duration-200 hover:bg-orange-100">
                <FaYoutube className="duration-200 text-orange-100 group-hover:text-white" size={32} />
            </div>
            <div className="group p-2 cursor-pointer mr-1 rounded-full duration-200 hover:bg-orange-100">
                <FaPinterest className="duration-200 text-orange-100 group-hover:text-white" size={32} />
            </div>
        </div>
    );
}
 
export default Sociais;