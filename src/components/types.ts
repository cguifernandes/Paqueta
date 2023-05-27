import { ReactNode } from "react"

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
}

export type ButtonProps = {
    children: ReactNode
    width?: number
    className?: string
}

export type NumberProps = {
    number: number
    soldOut?: boolean
}

export type CardProps = {
    description?: string
    id?: string
    image?: string
    name?: string
    price: PriceProps
    soldout?: boolean
}

type PriceProps = {
    discount: number
    value: number
}