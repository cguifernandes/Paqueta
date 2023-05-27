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
import Card from "./card";

const Cards = () => {
    const [shoes, setShoes] = useState<CardProps[]>();

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
            className="!px-2 !pb-16"
        >
            {shoes?.map((shoes, index) => {
                    return (
                    <SwiperSlide key={index}>
                        <Card
                            name={shoes.name}
                            price={shoes.price}
                            image={shoes.image}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}
 
export default Cards;