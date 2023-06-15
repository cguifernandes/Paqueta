import { FavoriteCard } from "@/components/Cards/card";
import Heading from "@/components/Heading/heading";
import Text from "@/components/Text/text";

export const metadata = {
    title: "Paquetá | Favoritos",
}

const Favorites = () => {
    return (  
        <div className="flex items-center justify-around flex-col py-20 relative">
            <div className="absolute top-[80px] left-[5%] lg:left-[15%] gap-y-8 flex flex-col">
                <Text>Paquetá &gt; <span className="font-bold text-orange-100">Favoritos</span></Text>
                <Heading className={"text-2xl font-montserrat"}>Items favoritos</Heading>
            </div>
            <FavoriteCard />
        </div>
    );
}
 
export default Favorites;