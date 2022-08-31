import { useEffect, useState } from "react";

const useTheme = (initialTheme = false) => {
    const [dark, setDark] = useState(initialTheme)
    const [colors, setColors] = useState({})
    const toggleDark = () => {
        setDark(!dark)
    }
    useEffect(()=>{
        if(dark){
            document.body.style.backgroundColor="hsl(230, 17%, 14%)";
            setColors({
                theme: "dark",
                topBackgroundColor: "hsl(232, 19%, 15%)",
                cardBackgroundColor: "hsl(228, 28%, 20%)",
                MainText: "white",
                TextColor: "hsl(228, 34%, 66%)",
                cardHovered: "#333a56"
            })
        }
        else{
            document.body.style.backgroundColor="white";
            setColors({
                theme: "light",
                topBackgroundColor: "hsl(225, 100%, 98%)",
                cardBackgroundColor: "hsl(227, 47%, 96%)",
                MainText: "hsl(230, 17%, 14%)",
                TextColor: "hsl(228, 12%, 44%)",
                cardHovered: "#e1e3f0"

            })
        }
        console.log(dark)
    }, [dark])

    

    return {
        toggleDark,
        colors
    }
    
}
export default useTheme;