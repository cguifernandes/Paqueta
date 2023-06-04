import { CardProps } from "../types";
import Text from "../Text/text";
import Heading from "../Heading/heading";
import Button from "../Button/button";
import { Heart } from "phosphor-react";
import { useState } from "react";
import clsx from "clsx";
import Number from "@/components/Number/number";
import Link from "next/link";

const Card = ({ price, image, name, soldout, id, product } : CardProps) => {
    const [favorites, setFavorites] = useState(false);

    if (product) {
        return (
            <>
                <Text className={"absolute left-[15%]"}>Paquetá &gt; <span className="font-bold text-orange-100">{name}</span></Text>
                <div className="flex items-center justify-evenly">
                    <img src={image} />
                    <div className="flex flex-col justify-around w-[500px] h-[500px]">
                        <div>
                            <Heading className={"text-4xl font-montserrat"}>{name?.toUpperCase()}</Heading>
                            <Text className={"text-grey-500"}>Código do produto {id}</Text>
                        </div>
                        <div>
                            {
                                price.discount != 0 &&
                                <div className="flex items-center py-4 gap-x-4">
                                    <Text className={"line-through text-grey-500 text-lg"}>R$ {price.value}</Text>
                                    <span>
                                        <Text className={"bg-[rgba(101,_194,_57,_1)] px-4 py-2 text-white rounded"}>{price.discount * 100}% DE DESCONTO</Text>
                                    </span>
                                </div>
                            }
                            <div className="pb-4">
                                <Heading className={"text-3xl"}>R$ {price.discount != 0 ? (price.value - price.discount * price.value).toFixed(2) : price.value}</Heading>
                                <Text className={"text-grey-500"}>OU EM 10X {Math.round(price.value / 10)}.99</Text>
                            </div>
                        </div>
                        <div>
                            <Text className={"text-grey-500"}>Escolha a numeração:</Text>
                            <div className="flex justify-between items-center py-3">
                                <Number product number={34} />
                                <Number product number={35} />
                                <Number product number={36} />
                                <Number product number={37} />
                                <Number product number={38} />
                                <Number product number={39} />
                                <Number product number={40} />
                            </div>
                            <div className="group w-[200px] flex mt-2 items-center duration-200 transition-colors rounded-md cursor-pointer justify-center py-2 hover:bg-orange-100">
                                <Text className={"text-black group-hover:text-white "}>Guia de tamanhos</Text>
                            </div>
                        </div>
                        <Button className="text-xl">COMPRAR</Button>
                    </div>
                </div>
            </>
        )
    }

    else {
        return (  
            <div className="group h-[550px] w-[330px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md mt-2 relative font-montserrat">
                <Link className="flex flex-col justify-center h-full p-6" href={`shoes/${id}`}>
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
                        <Heading className={"text-xl !font-poppins"}>R$ {price.value}</Heading>
                        <Text className={"text-grey-500 !font-poppins"}>OU EM 10X {Math.round(price.value / 10)}.99</Text>
                    </div>
                    {
                        soldout == false ?
                        <Button className="w-[85%] my-3 text-lg bottom-4 left-[50%] -translate-x-[50%] absolute">COMPRAR</Button>
                        :
                        <Button soldOut className="w-[85%] my-3 text-lg bottom-4 left-[50%] -translate-x-[50%] absolute">ME AVISE QUANDO CHEGAR</Button>
                    }
                </Link>
            </div>
        );
    }
}
 
export default Card;