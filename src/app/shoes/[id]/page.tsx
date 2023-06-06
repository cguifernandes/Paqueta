import Product from "@/components/Cards/product";
import { Metadata } from "next";

export async function generateMetadata ({params}: any): Promise<Metadata> {
    const response = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${params.id}`).then((res) => res.json());

    return {
        title: `Paquetá | ${response[0].name}`
    }
}

export const Shoes = ({params} : any) => {
    return (  
        <div className="flex items-center justify-around flex-col py-20">
            <Product params={params} />
        </div>
    );
}
 
export default Shoes;