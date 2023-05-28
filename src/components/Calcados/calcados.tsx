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
            <motion.div animate={onHoverFemale ? "enter" : "leave"} transition={{type: 'spring'}} className="flex justify-evenly items-center">
                <div  
                    onMouseEnter={() => setOnHoverFemale(true)} 
                    onMouseLeave={() => setOnHoverFemale(false)} 
                    className="bg-calcados-femininos h-[620px] w-[668px] relative rounded-[8px]"
                >
                    <motion.div variants={{enter: { opacity: 1 }, leave: { opacity: 0 }}} className="bg-calcados-feminios-shadow h-[620px] w-[668px]">
                        <motion.p 
                            variants={{enter: { opacity: 1, translateX: "0px" }, leave: { opacity: 0, translateX: "20px" }}}  
                            className={"absolute bottom-12 left-12 p text-5xl text-white leading-tight"}
                        >
                            CALÇADOS<br/> FEMININOS
                        </motion.p>
                    </motion.div>
                </div>
                <div className="w-[630px]">
                    <Text align="right" className={"text-xl"}>Escolher o seu sapato favorito entre nossa <span className="text-black font-medium">variedade de modelos e cores</span> não será uma tarefa fácil, mas o que uma mulher não consegue fazer?</Text>
                    <Button className="mt-8 float-right" width={285}>CONFERIR</Button>
                </div>
            </motion.div>
            <motion.div animate={onHoverMale ? "enter" : "leave"} transition={{type: 'spring'}} className="flex justify-evenly items-center">
                <div className="w-[630px]">
                    <Text align="left" className={"text-xl"}>Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para o dia a dia, trabalho e até mesmo para praticar esportes!</Text>
                    <Button className="mt-8 float-left" width={285}>CONFERIR</Button>
                </div>
                <div 
                    onMouseEnter={() => setOnHoverMale(true)} 
                    onMouseLeave={() => setOnHoverMale(false)} 
                    className="bg-calcados-masculinos h-[620px] w-[668px] relative rounded-[8px]"
                >
                    <motion.div variants={{enter: { opacity: 1 }, leave: { opacity: 0 }}} className="bg-calcados-masculinos-shadow h-[620px] w-[668px]">
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