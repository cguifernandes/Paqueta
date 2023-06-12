import { CardProps } from "../types";
import Text from "../Text/text";
import Heading from "../Heading/heading";
import { useState } from "react";
import Number from "@/components/Number/number";
import Link from "next/link";
import Tamanho from "../Tamanho/tamanho";
import Icon from "../iconFavorite";
import ButtonShopping from "../buttonShopping";

const Card = ({ price, image, name, soldout, id, product } : CardProps) => {
    const [visibleTamanho, setVisibleTamanho] = useState(false);

    if (product) {
        return (
            <>
                {
                    visibleTamanho &&
                    <Tamanho setVisibleTamanho={setVisibleTamanho} />
                }
                <Text className={"absolute text-center px-6 w-full -top-4 text-lg xl:text-base xl:w-auto xl:left-[15%] xl:px-0"}>Paquetá &gt; <span className="font-bold text-orange-100">{name}</span></Text>
                <div className="flex items-center justify-evenly flex-col xl:flex-row">
                    <img className="w-[400px] md:w-[400px]" src={image} />
                    <div className="flex flex-col justify-around w-[85%] sm:w-[70%] min-h-[550px] xl:w-[500px]">
                        <Icon id={id} />
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
                        <ButtonShopping id={id} soldout={soldout} products={true} />
                    </div>
                </div>
            </>
        )
    }

    else {
        return (  
            <div className="group h-[550px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md mt-2 relative font-montserrat">
                <Icon className="absolute right-6" style={!soldout ? {top: "24px"} : {top: "48px"}} id={id} />
                <Link className="flex flex-col justify-center h-full p-6 items-center" href={`shoes/${id}`}>
                    {
                        soldout && 
                        <div className="bg-orange-300 absolute top-0 w-full left-[50%] -translate-x-[50%] rounded-t-md">
                            <Heading align="center" className={"text-white py-2 text-lg"}>PRODUTO ESGOTADO</Heading>
                        </div>
                    }
                    
                    <img className="group-hover:scale-[1.3] duration-500 ease-out object-cover h-[260px] block m-[0_auto] lg:h-[220px]" src={image} alt={name} />
                    <div className="w-[94%]">
                        <Text className={"text-lg my-3"}>{name?.toUpperCase()}</Text>
                        <div className="my-2">
                            <Heading className={"text-xl !font-poppins"}>R$ {price.value}</Heading>
                            <Text className={"text-grey-500 !font-poppins"}>OU EM 10X {Math.round(price.value / 10)}.99</Text>
                        </div>
                    </div>
                </Link>
                <ButtonShopping id={id} soldout={soldout} />
            </div>
        );
    }
}
 
export default Card;