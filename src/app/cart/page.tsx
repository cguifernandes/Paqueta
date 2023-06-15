import { CartCard } from "@/components/Cards/card";
import Heading from "@/components/Heading/heading";
import Text from "@/components/Text/text";

export const metadata = {
    title: "Paquetá | Carrinho",
}

const Cart = () => {
    return (  
        <div className="flex items-center justify-around flex-col py-20 relative">
            <div className="absolute top-[80px] left-[5%] lg:left-[15%] gap-y-8 flex flex-col">
                <Text className={"text-lg"}>Paquetá &gt; <span className="font-bold text-orange-100">Sacola</span></Text>
                <Heading className={"text-2xl font-montserrat"}>Sacola de compras</Heading>
            </div>
            <CartCard />
        </div>
    );
}
 
export default Cart;