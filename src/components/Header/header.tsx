'use client'
import { Bag, Headphones, HeartStraight, MapPin, User } from "phosphor-react";
import Text from "../Text/text";
import Logo from "../../assets/logo.png"
import clsx from "clsx";
import Link from "next/link";

const Header = () => {
    return (  
        <>
            <div className="bg-gradient-to-r from-orange-100 to-orange-300 flex justify-around items-center py-4">
                <Text className={"text-white"}>Loja de Calçados e Moda On-line</Text>
                <div className="flex">
                    <div className="flex items-center justify-between px-4">
                        <Headphones className="mx-2" size={28} color="#ffffff" />
                        <Text className={"text-white"}>Fale conosco</Text>
                    </div>
                    <div className="flex items-center justify-between px-4">
                        <MapPin className="mx-2" size={28} color="#ffffff" />
                        <Text className={"text-white"}>Encontrar uma loja física</Text>
                    </div>
                </div>
            </div>
            <header className="flex items-center justify-around py-12">
                <Link href={"/"}>
                    <img src={Logo.src} alt="Logo" />
                </Link>
                <div className="flex">
                    <p>DEIXAR FIXED CO ANIMACAO</p>
                    <div className="flex items-center justify-center mx-6 cursor-pointer">
                        <HeartStraight className="mx-2" size={32} color="#000" />
                        <Text>Lista de desejos</Text>
                    </div>
                    <div className="flex items-center justify-center mx-6 cursor-pointer">
                        <Bag className="mx-2 fill-orange-100" size={32} color="#000" />
                        <Text>Sacola</Text>
                    </div>
                    <div className={clsx(
                        "group ease duration-200 flex items-center justify-center mx-6 py-2 px-4 cursor-pointer rounded-md",  
                        "hover:bg-orange-100 text-white"
                    )}>
                        <User className="mr-2 text-black ease duration-200  group-hover:text-white" size={32} />
                        <Text className={"ease duration-200 group-hover:text-white"}>Entrar</Text>
                    </div>
                </div>
            </header>
            <div className="flex items-center justify-between py-4 px-[240px]">
                <Text className={'cursor-pointer hover:text-black/60'}>Novidades</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Feminino</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Masculino</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Paquetá Esportes</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Outlet</Text>
                <Text className={'cursor-pointer hover:text-black/60'}>Cashback</Text>
            </div>
        </>
    );
}
 
export default Header;