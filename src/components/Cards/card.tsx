import { CardProps } from "../types";
import Text from "../Text/text";
import Heading from "../Heading/heading";
import Button from "../Button/button";
import { Heart } from "phosphor-react";
import { useState } from "react";

const Card = ({ price, image, name } : CardProps) => {
    const [favorites, setFavorites] = useState(false);

    return (  
        <div className="h-[550px] flex flex-col justify-center shadow-lg p-6 rounded-md relative">
            <div onClick={() => setFavorites(!favorites)} className="w-[45px] h-[45px] duration-200 cursor-pointer rounded-full absolute right-6 top-6 flex items-center justify-center hover:bg-grey-800">
                <Heart weight={favorites ? "fill" : "regular"} size={30} className="float-right" color="#FF8A29"/>
            </div>
            <img className="object-cover h-[220px] block m-[0_auto]" src={image} alt={name} />
            <Text className={"text-lg my-3"}>{name?.toUpperCase()}</Text>
            <div className="my-2">
                <Heading className={"text-xl"}>R$ {price.value}</Heading>
                <Text className={"text-black/60"}>OU EM 10X {Math.round(price.value / 10)}.99</Text>
            </div>
            <Button className="w-[80%] my-3 text-lg bottom-4 left-[50%] -translate-x-[50%] absolute">COMPRAR</Button>
        </div>
    );
}
 
export default Card;