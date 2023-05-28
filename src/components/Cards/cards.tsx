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
            spaceBetween={30}
            slidesPerView={4}
            speed={200}
            autoplay
            modules={[Scrollbar, Autoplay ]}
            scrollbar={{ draggable: true }}
            className="!px-2 !pb-16"
        >
            {
                <SwiperSlide>
                    <div>
                        <p>loading</p>
                    </div>
                </SwiperSlide>
                // :
                // shoes?.map((shoes, index) => {
                //         return (
                //         <SwiperSlide key={index}>
                //             <Card
                //                 soldout={shoes.soldout}
                //                 name={shoes.name}
                //                 price={shoes.price}
                //                 image={shoes.image}
                //             />
                //         </SwiperSlide>
                //     )
                // })
            }
        </Swiper>
    );
}
 
export default Cards;