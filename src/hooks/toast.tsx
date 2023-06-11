'use client'
import toast from "react-hot-toast"

export const Toast = (message : string, success : boolean, notIcon?: boolean) => {
    return (
        success && !notIcon ?
        toast.success(message, {
            duration: 6000,
            position: "top-right",
            iconTheme: {
                primary: "#FF8A29",
                secondary: "#fff"
            },
            style: {
                padding: "16px",
                maxWidth: "100%",
                border: "1px solid #FF8A29"
            }
        })
        :
        !success && !notIcon ?
        toast.error(message, {
            duration: 6000,
            position: "top-right",
            iconTheme: {
                primary: "#FF8A29",
                secondary: "#fff"
            },
            style: {
                padding: "16px",
                maxWidth: "100%",
                border: "1px solid #FF8A29"
            }
        })
        :
        toast(message, {
            duration: 6000,
            position: "top-right",
            style: {
                padding: "16px",
                maxWidth: "100%",
                border: "1px solid #FF8A29"
            }
        })
    )
}