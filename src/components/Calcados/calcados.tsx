'use client'
import Button from "@/components/Button/button";
import Text from "@/components/Text/text";
import { motion } from "framer-motion";
import { useState } from "react";

const Calcados = () => {
    const [onHoverFemale, setOnHoverFemale] = useState(false);
    const [onHoverMale, setOnHoverMale] = useState(false);

    return (  
        <div className="flex flex-col py-[80px] gap-y-[80px]">
            <motion.div animate={onHoverFemale ? "enter" : "leave"} transition={{type: 'spring'}} className="flex flex-col gap-y-4 justify-evenly items-center lg:gap-y-0 lg:flex-row">
                <div  
                    onMouseEnter={() => setOnHoverFemale(true)} 
                    onMouseLeave={() => setOnHoverFemale(false)} 
                    className="bg-calcados-femininos w-[90%] md:w-[668px] h-[620px] lg:h-[520px] lg:w-[568px] xl:h-[620px] xl:w-[668px] relative rounded-[8px]"
                >
                    <motion.div variants={{enter: { opacity: 1 }, leave: { opacity: 0 }}} className="bg-calcados-feminios-shadow rounded-lg w-[90%] md:w-[668px] h-[620px] lg:h-[520px] lg:w-[568px] xl:h-[620px] xl:w-[668px]">
                        <motion.p 
                            variants={{enter: { opacity: 1, translateX: "0px" }, leave: { opacity: 0, translateX: "20px" }}}  
                            className={"absolute bottom-12 left-12 p text-5xl text-white leading-tight"}
                        >
                            CALÇADOS<br/> FEMININOS
                        </motion.p>
                    </motion.div>
                </div> 
                <div className="md:w-[630px] px-8">
                    <Text className={"text-xl text-center lg:text-right"}>Escolher o seu sapato favorito entre nossa <span className="text-black font-medium">variedade de modelos e cores</span> não será uma tarefa fácil, mas o que uma mulher não consegue fazer?</Text>
                    <Button className="mt-8 block m-[0_auto] lg:float-right" width={285}>CONFERIR</Button>
                </div>
            </motion.div>
            <motion.div animate={onHoverMale ? "enter" : "leave"} transition={{type: 'spring'}} className="flex flex-col gap-y-4 justify-evenly items-center lg:gap-y-0 lg:flex-row">
                <div className="md:w-[630px] px-8 order-last lg:-order-last">
                    <Text className={"text-xl text-center lg:text-left"}>Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para o dia a dia, trabalho e até mesmo para praticar esportes!</Text>
                    <Button className="mt-8 block m-[0_auto] lg:float-left" width={285}>CONFERIR</Button>
                </div>
                <div 
                    onMouseEnter={() => setOnHoverMale(true)} 
                    onMouseLeave={() => setOnHoverMale(false)} 
                    className="bg-calcados-masculinos w-[90%] md:w-[668px] h-[620px] lg:h-[520px] lg:w-[568px] xl:h-[620px] xl:w-[668px] relative rounded-[8px]"
                >
                    <motion.div variants={{enter: { opacity: 1 }, leave: { opacity: 0 }}} className="bg-calcados-masculinos-shadow rounded-lg w-[100%] md:w-[668px] h-[620px] lg:h-[520px] lg:w-[568px] xl:h-[620px] xl:w-[668px]">
                        <motion.p 
                            variants={{enter: { opacity: 1, translateX: "0px" }, leave: { opacity: 0, translateX: "20px" }}} 
                            className={"absolute bottom-12 right-12 text-5xl text-white leading-tight"}>
                                CALÇADOS<br/> MASCULINOS
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
 
export default Calcados;