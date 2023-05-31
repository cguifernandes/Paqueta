'use client'
import { usePathname } from "next/navigation";

const Shoes = () => {
    
    const id = usePathname().split("/")[2];

    return (  
        <div>
            <p>{id}</p>
        </div>
    );
}
 
export default Shoes;