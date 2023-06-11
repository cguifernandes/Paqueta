import { CardProps } from "../types";
import Text from "../Text/text";
import Heading from "../Heading/heading";
import Button from "../Button/button";
import { Heart } from "phosphor-react";
import { useState } from "react";
import clsx from "clsx";
import Number from "@/components/Number/number";
import Link from "next/link";
import Tamanho from "../Tamanho/tamanho";
import Favorite from "../Favorite/favorite";

const Card = ({ price, image, name, soldout, id, product } : CardProps) => {
    const [visibleTamanho, setVisibleTamanho] = useState(false);

    if (product) {
        return (
            <>
                {
                    visibleTamanho &&
                    <Tamanho setVisibleTamanho={setVisibleTamanho} />
                }
                <div className="absolute w-full px-4 left-[50%] -translate-x-[50%] -top-6 flex items-center justify-between xl:w-[70%] sm:px-0 sm:w-[70%]">
                    <Text className={"text-lg xl:text-base"}>Paquetá &gt; <span className="font-bold text-orange-100">{name}</span></Text>
                    <Favorite className="ml-4 sm:ml-0" id={id} soldout={soldout} />
                </div>
                <div className="flex items-center justify-evenly flex-col xl:flex-row">
                    <img className="w-[400px] md:w-[400px]" src={image} />
                    <div className="flex flex-col justify-around w-[85%] sm:w-[70%] h-[500px] xl:w-[500px]">
                        <div>
                            <Heading className={"text-3xl font-montserrat sm:text-4xl"}>{name?.toUpperCase()}</Heading>
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
                                <Text className={"text-grey-500"}>OU EM 10X {Math.round((price.value - price.discount * price.value) / 10)}.99</Text>
                            </div>
                        </div>
                        <div>
                            <Text className={"text-grey-500"}>Escolha a numeração:</Text>
                            <div className="flex justify-center items-center py-3 flex-wrap gap-5 sm:justify-between">
                                <Number product number={34} />
                                <Number product number={35} />
                                <Number product number={36} />
                                <Number product number={37} />
                                <Number product number={38} />
                                <Number product number={39} />
                                <Number product number={40} />
                            </div>
                            <div onClick={() => setVisibleTamanho(true)} className="group w-[200px] flex mt-2 items-center duration-200 transition-colors rounded-md cursor-pointer justify-center py-2 hover:bg-orange-100">
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
            <div className="group h-[550px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md mt-2 relative font-montserrat">
                <Favorite className="absolute right-6" id={id} soldout={soldout} />
                <Link className="flex flex-col justify-center h-full p-6" href={`shoes/${id}`}>
                    {
                        soldout && 
                        <div className="bg-orange-300 absolute top-0 w-full left-[50%] -translate-x-[50%] rounded-t-md">
                            <Heading align="center" className={"text-white py-2 text-lg"}>PRODUTO ESGOTADO</Heading>
                        </div>
                    }
                    
                    <img className="group-hover:scale-[1.3] duration-500 ease-out object-cover h-[260px] block m-[0_auto] lg:h-[220px]" src={image} alt={name} />
                    <Text className={"text-lg my-3"}>{name?.toUpperCase()}</Text>
                    <div className="my-2">
                        <Heading className={"text-xl !font-poppins"}>R$ {price.value}</Heading>
                        <Text className={"text-grey-500 !font-poppins"}>OU EM 10X {Math.round(price.value / 10)}.99</Text>
                    </div>
                    {
                        soldout == false ?
                        <Button className="w-[85%] my-3 bottom-4 left-[50%] -translate-x-[50%] absolute">COMPRAR</Button>
                        :
                        <Button soldOut className="w-[85%] my-3 bottom-4 left-[50%] -translate-x-[50%] absolute">ME AVISE QUANDO CHEGAR</Button>
                    }
                </Link>
            </div>
        );
    }
}
 
export default Card;