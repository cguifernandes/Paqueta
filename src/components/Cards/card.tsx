import { CardProps } from "../types";
import Text from "../Text/text";
import Heading from "../Heading/heading";
import Button from "../Button/button";
import { Heart } from "phosphor-react";
import { useState } from "react";
import clsx from "clsx";

const Card = ({ price, image, name, soldout } : CardProps) => {
    const [favorites, setFavorites] = useState(false);

    return (  
        <div className="group h-[550px] flex flex-col justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 rounded-md mt-2 relative">
            {
                soldout && 
                <div className="bg-orange-300 absolute top-0 w-full left-[50%] -translate-x-[50%] rounded-t-md">
                    <Heading align="center" className={"text-white py-2 text-lg"}>PRODUTO ESGOTADO</Heading>
                </div>
            }
            <div 
                onClick={() => setFavorites(!favorites)} 
                className={clsx(
                    "w-[45px] h-[45px] duration-200 cursor-pointer rounded-full absolute right-6 z-10 flex items-center justify-center hover:bg-grey-800",
                    soldout == false ?
                    "top-6"
                    :
                    "top-12"
                )}
            >
                <Heart weight={favorites ? "fill" : "regular"} size={30} className="float-right" color="#FF8A29"/>
            </div>
            <img className="group-hover:scale-[1.3] duration-500 ease-out object-cover h-[220px] block m-[0_auto]" src={image} alt={name} />
            <Text className={"text-lg my-3"}>{name?.toUpperCase()}</Text>
            <div className="my-2">
                <Heading className={"text-xl"}>R$ {price.value}</Heading>
                <Text className={"text-[rgba(56,_56,_56,_0.5)]"}>OU EM 10X {Math.round(price.value / 10)}.99</Text>
            </div>
            {
                soldout == false ?
                <Button className="w-[85%] my-3 text-lg bottom-4 left-[50%] -translate-x-[50%] absolute">COMPRAR</Button>
                :
                <Button soldOut className="w-[85%] my-3 text-lg bottom-4 left-[50%] -translate-x-[50%] absolute">ME AVISE QUANDO CHEGAR</Button>
            }
        </div>
    );
}
 
export default Card;