import { ButtonHTMLAttributes, CSSProperties, Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react"

export type TextProps = {
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg',
    className?: String,
    align?: 'left' | 'center' | 'right'
}

export type ShoppingProps = {
    soldout: boolean | undefined
    id: string
    products?: boolean
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

export type FavoriteProps = {
    soldout?: boolean | undefined,
    className?: string,
    id: string,
    style?: CSSProperties | undefined
}

export type TamanhoProps = {
    setVisibleTamanho: Dispatch<SetStateAction<boolean>>
}

export type SociaisProps = {
    className?: string
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    width?: number
    className?: string
    soldOut?: boolean,
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
    isFavorite?: boolean
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