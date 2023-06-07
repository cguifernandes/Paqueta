'use client'
import { useEffect, useState } from "react";
import { CardProps } from "@/components/types";
import Text from "@/components/Text/text"
import Heading from "@/components/Heading/heading";
import Sociais from "@/components/Sociais/sociais";
import Card from "./card";
import Cards from "./cards";
import Skeleton from "../Skeleton/skeleton";

const getData = async (id  : string) => {
    const response = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${id}`);

    return response.json();
}

const Product = ({params} : any) => {
    const [shoes, setShoes] = useState<CardProps[] | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCardsData() {
            setLoading(true);
            const data = await getData(params.id);
            setShoes(data);
            setLoading(false);
        }
    
        fetchCardsData();
    }, []);


    return (  
        <>
            {
                loading ?
                <>
                    <div className="w-full relative">
                        <Text className={"absolute left-[15%] flex items-center -top-2"}>Paquetá &gt; <span className="pl-1"><Skeleton height={20} width={300} /></span></Text>
                        <div className="flex items-center justify-evenly">
                            <div>
                                <Skeleton className="block m-[0_auto]" width={500} height={350} />
                            </div>
                            <div>
                                <div>
                                    <Skeleton className="my-2" width={500} height={40} />
                                    <Skeleton className="my-2" width={500} height={20} />
                                </div>
                                <div className="my-5">
                                    <Skeleton className="my-4" width={100} height={20} />
                                    <Skeleton className="my-2" width={140} height={40} />
                                    <Skeleton width={120} height={10} />
                                </div>
                                <div>
                                    <Skeleton width={130} height={10} />
                                    <Skeleton className="my-4" width={500} height={50} />
                                    <Skeleton width={110} height={10} />
                                </div>
                                <div>
                                    <Skeleton className="my-4" width={500} height={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-12 w-[69%]">
                        <Skeleton className="my-4" width={200} height={30} />
                        <Skeleton className="w-full" />
                    </div>
                </>
                :
                <>
                    <div className="w-full relative">
                        {
                            shoes?.map((shoes, index) => {
                                return (
                                    <Card 
                                        key={index}
                                        product
                                        price={shoes.price}
                                        id={shoes.id}
                                        image={shoes.image}
                                        name={shoes.name}
                                    />
                                )
                            })
                        }
                        <div className="w-[70%] mt-12 sm:w-[380px] block m-[0_auto] xl:absolute xl:left-[15%] xl:[280px] xl:-bottom-2">
                            <Text className={"py-2 pl-[12px]"}>Compartilhe</Text>
                            <Sociais className="justify-between" />
                        </div>
                    </div>
                    <div className="py-12 w-[80%] sm:w-[69%]">
                        {
                            shoes?.map((shoes, index) => {
                                return (
                                    <>
                                        <Heading className={"text-2xl font-montserrat py-3"}>DESCRIÇÃO DO PRODUTO</Heading>
                                        <Text className={"text-grey-500 text-lg"} key={index}>{shoes.description}</Text>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="px-[8.5%] sm:px-[12.5%] w-full pt-8">
                        <Cards />
                    </div>
                </>
            }
        </>
    );
}
 
export default Product;