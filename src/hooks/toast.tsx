'use client'
import toast from "react-hot-toast"

export const Toast = (message : string, success : boolean) => {
    if (success) {
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
        });
    }
    else {
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
        });
    }
}