'use client'
import { SetStateAction, useEffect, useState } from "react";
import { CardProps } from "../types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/navigation"
import Card from "./card";
import { api } from "../api";
import Skeleton from "../Skeleton/skeleton";

const getData = async () => {
    const response = await api.get("/shoes");

    return response.data;
}

const Cards = () => {
    const [shoes, setShoes] = useState<CardProps[] | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCardsData() {
            setLoading(true);
            const data = await getData();
            setShoes(data);
            setLoading(false);
        }
    
        fetchCardsData();
    }, []);

    return (  
        <Swiper
            speed={200}
            autoplay
            spaceBetween={20}
            breakpoints={{
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1536: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }}
            modules={[Scrollbar, Autoplay ]}
            scrollbar={{ draggable: true }}
            className="!px-2 !pb-16"
        >
            {
                loading ?
                <>
                    <SwiperSlide>
                            <Skeleton className="w-full flex justify-center items-center" height={550} />
                    </SwiperSlide>
                    <SwiperSlide>
                            <Skeleton className="w-full flex justify-center items-center" height={550} />
                    </SwiperSlide>
                    <SwiperSlide>
                            <Skeleton className="w-full flex justify-center items-center" height={550} />
                    </SwiperSlide>
                    <SwiperSlide>
                            <Skeleton className="w-full flex justify-center items-center" height={550} />
                    </SwiperSlide>
                </>
                :
                shoes?.map((shoes, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <Card
                                soldout={shoes.soldout}
                                name={shoes.name}
                                price={shoes.price}
                                image={shoes.image}
                                id={shoes.id}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}
 
export default Cards;