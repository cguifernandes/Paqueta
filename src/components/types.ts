import { Dispatch, ReactNode, SetStateAction } from "react"

export type TextProps = {
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg',
    className?: String,
    align?: 'left' | 'center' | 'right'
}

export type GroupProps = {
    icon: any
    size: number
    color: string
    weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone"
    text?: string
    heading?: string
    headingOnTop?: boolean
    bold?: boolean
    width?: number
    strong?: string
    thin?: boolean
    className?: string
}

export type TamanhoProps = {
    setVisibleTamanho: Dispatch<SetStateAction<boolean>>
}

export type SociaisProps = {
    className?: string
}

export type ParamsProps = {
    params: {
        id: string
    }
}

export type ButtonProps = {
    children: ReactNode
    width?: number
    className?: string
    soldOut?: boolean
}

export type NumberProps = {
    number: number
    soldOut?: boolean
    product?: boolean
}

export type CardProps = {
    description?: string
    id: string
    image: string
    name: string
    price: PriceProps
    soldout?: boolean
    isLoading?: boolean
    product?: boolean
}

type PriceProps = {
    discount: number
    value: number
}

export type LoaderProps = {
    className?: string,
    width?: number,
    height?: number
}