'use client'
import { StoragedContext } from "@/hooks/localStorage";
import { useContext, useEffect, useState } from "react";
import { CardProps } from "../types";
import Text from "../Text/text";
import Heading from "../Heading/heading";
import Number from "@/components/Number/number";
import Link from "next/link";
import Tamanho from "../Tamanho/tamanho";
import Icon from "../iconFavorite";
import ButtonShopping from "../buttonShopping";
import { Trash } from "phosphor-react";
import Skeleton from "../Skeleton/skeleton";

const getData = async (id: string) => {
    const response = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${id}`);

    return response.json();
}

export const CartCard = () => {
    const { GetStoraged, RemoveStoraged } = useContext(StoragedContext);
    const [shopping, setShopping] = useState<CardProps[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const items = GetStoraged('shopping');
    
    useEffect(() => {
        const fetchShopping = async () => {
            const Fetch = async () => {
                if (items.length > 0) {
                    const dataCard = [];
                    for (let i = 0; i < items.length; i++) {
                        const data = await getData(items[i]);
                        dataCard.push(data);
                    }
                    setShopping(dataCard.flat());
                }
                setIsLoading(false);
            };
            
            Fetch();
        };
        
        fetchShopping();
    }, [items]);

    if (isLoading) {
        return (
            <div className="mt-[115px] w-[90%] lg:w-[70%] flex flex-col gap-y-4">
                <Skeleton className="w-full h-[630px] lg:h-[300px]" />
                <Skeleton className="w-full h-[630px] lg:h-[300px]" />
                <Skeleton className="w-full h-[630px] lg:h-[300px]" />
            </div>
        )
    }

    return (  
        <>
            {
                items.length == 0 ?
                <div className="mt-[115px] w-[70%] rounded-lg flex flex-col items-center">
                    <Text className={"text-xl"}>Você não tem nenhum item na sacola de compras.</Text>
                </div>
                :
                <div className="bg-grey-300 mt-[115px] w-[90%] lg:w-[70%] rounded-lg flex flex-col items-center">
                    {
                        shopping?.map((shopping) => {
                            return (
                                <div key={shopping.id}  className="w-[90%] relative border-b-2 last:border-b-0">
                                    <div onClick={() => RemoveStoraged("shopping", shopping.id)} className="absolute right-6 bottom-6 lg:bottom-[20px] xl:bottom-[50px] rounded-full p-1 duration-300 cursor-pointer hover:bg-grey-700 ">
                                        <Trash size={32} />
                                    </div>
                                    <Link href={`shoes/${shopping.id}`} className="flex items-center justify-around flex-col py-10 lg:py-0 lg:flex-row" key={shopping.id}>
                                        <img src={shopping.image} className="h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]" alt="Imagem do tênis" />
                                        <div className="w-full lg:w-[550px] lg:pl-8">
                                            <Heading className={"text-2xl w-full"}>{shopping.name}</Heading>
                                            <Text className={"text-grey-500 w-full"}>Código do produto {shopping.id}</Text>
                                            <div className="pt-6 flex flex-col gap-y-1">
                                                <Text className={"font-montserrat"}><strong>Cor:</strong> Não foi escolhido</Text>
                                                <Text className={"font-montserrat"}><strong>Numeração:</strong> 39</Text>
                                                <Text className={"font-montserrat"}><strong>Quantidade:</strong> 1</Text>
                                                <Text className={"font-montserrat"}><strong>Preço</strong>: R$ {shopping.price.discount != 0 ? (shopping.price.value - shopping.price.discount * shopping.price.value).toFixed(2) : shopping.price.value}</Text>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    );
}

export const FavoriteCard = () => {
    const { GetStoraged, RemoveStoraged } = useContext(StoragedContext);
    const [favorites, setFavorites] = useState<CardProps[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const items = GetStoraged('favorites');

    useEffect(() => {
        const Fetch = async () => {
            if (items.length > 0) {
                const dataCard = [];
                for (let i = 0; i < items.length; i++) {
                    const data = await getData(items[i]);
                    dataCard.push(data);
                }
                setFavorites(dataCard.flat());
            }
            setIsLoading(false);
        };
        
        Fetch();
    }, [items]);

    if (isLoading) {
        return (
            <div className="mt-[115px] w-[90%] lg:w-[70%] flex flex-col gap-y-4">
                <Skeleton className="w-full h-[630px] lg:h-[300px]" />
                <Skeleton className="w-full h-[630px] lg:h-[300px]" />
                <Skeleton className="w-full h-[630px] lg:h-[300px]" />
            </div>
        )
    }

    return (  
        <>
            {
                items.length == 0 ?
                <div className="mt-[115px] w-[70%] rounded-lg flex flex-col items-center">
                    <Text className={"text-xl"}>Você não tem nenhum item como favorito.</Text>
                </div>
                :
                <div className="bg-grey-300 mt-[115px] w-[90%] lg:w-[70%] rounded-lg flex flex-col items-center">
                    {
                        favorites?.map((favorites) => {
                            return (
                                <div key={favorites.id}  className="w-[90%] relative border-b-2 last:border-b-0">
                                    <div onClick={() => RemoveStoraged("favorites", favorites.id)} className="absolute right-6 bottom-6 lg:bottom-[20px] xl:bottom-[50px] rounded-full p-1 duration-300 cursor-pointer hover:bg-grey-700 ">
                                        <Trash size={32} />
                                    </div>
                                    <Link href={`shoes/${favorites.id}`} className="group flex items-center justify-around flex-col py-10 lg:py-0 lg:flex-row" key={favorites.id}>
                                        <img src={favorites.image} className="h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]" alt="Imagem do tênis" />
                                        <div className="w-full lg:w-[550px] lg:pl-8">
                                            <Heading className={"text-2xl w-full"}>{favorites.name}</Heading>
                                            <Text className={"text-grey-500 w-full"}>Código do produto {favorites.id}</Text>
                                            <div className="pt-6 flex flex-col gap-y-1">
                                                <Text className={"font-montserrat"}><strong>Cor:</strong> Não foi escolhido</Text>
                                                <Text className={"font-montserrat"}><strong>Numeração:</strong> 39</Text>
                                                <Text className={"font-montserrat"}><strong>Quantidade:</strong> 1</Text>
                                                <Text className={"font-montserrat"}><strong>Preço</strong>: R$ {favorites.price.discount != 0 ? (favorites.price.value - favorites.price.discount * favorites.price.value).toFixed(2) : favorites.price.value}</Text>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    );
}

export const ProductCard = ({ price, image, name, soldout, id } : CardProps) => {
    const [visibleTamanho, setVisibleTamanho] = useState(false);

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

export const CardForCards = ({ price, image, name, soldout, id } : CardProps) => {
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