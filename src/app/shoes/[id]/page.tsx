import { ParamsProps } from "@/components/types";
import Product from "@/components/Cards/product";
import { Metadata } from "next";

export async function generateMetadata ({params}: ParamsProps): Promise<Metadata> {
    const response = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${params.id}`).then((res) => res.json());

    return {
        title: `Paquetá | ${response[0].name}`
    }
}

export const Shoes = ({params} : ParamsProps) => {
    
    return (  
        <div className="flex items-center justify-around flex-col py-24">
            <Product params={params} />
        </div>
    );
}
 
export default Shoes;