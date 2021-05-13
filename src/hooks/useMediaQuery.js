import { useEffect, useState } from "react";
export default function useMediaQuery(widthInput) {
    const [width, setWidth] = useState(window.innerWidth);
    const handleChangeWindowResize = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleChangeWindowResize);
        return () => {
            window.removeEventListener("resize", handleChangeWindowResize);
        };
    }, []);

    return width <= widthInput;
}
