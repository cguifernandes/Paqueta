'use client'
import { useEffect, useState } from "react";
import { api } from "../api";
import { CardProps } from "../types";
import Text from "../Text/text";
import Heading from "../Heading/heading";
import Button from "../Button/button";
import { Heart } from "phosphor-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/navigation"

const Cards = () => {
    const [shoes, setShoes] = useState<CardProps[]>();
    const [favorites, setFavorites] = useState(false);

    useEffect(() => {
        api.get("/shoes").then((response) => {
            setShoes(response.data)
        })
    }, [])

    return (  
        <Swiper
            spaceBetween={30}
            slidesPerView={4}
            speed={200}
            autoplay
            modules={[Scrollbar, Autoplay ]}
            scrollbar={{ draggable: true }}
            className="!px-2 !pb-12"
        >
            {
                shoes?.map((shoes, index) => {
                    return (
                        <SwiperSlide className="shadow-lg p-6 rounded-md w-[300px] relative" key={index}>
                            <div onClick={() => setFavorites(!favorites)} className="w-[45px] h-[45px] duration-200 cursor-pointer rounded-full float-right flex items-center justify-center hover:bg-grey-800">
                                <Heart weight={favorites ? "fill" : "regular"} size={30} className="float-right" color="#FF8A29"/>
                            </div>
                            <img src={shoes.image} alt="Imagem do tenis ou sapato" />
                            <Text className={"text-xl my-3"}>{shoes.name.toUpperCase()}</Text>
                            <div className="my-3">
                                <Heading className={"text-xl"}>R$ {shoes.price.value}</Heading>
                                <Text className={"text-black/40"}>OU EM 10X {Math.round(shoes.price.value / 10)}.99</Text>
                            </div>
                            <Button className="w-full my-3 text-lg">COMPRAR</Button>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}
 
export default Cards;