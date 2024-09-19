import { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({children}) => {
    const footerDivRef = useRef(null);

    const handleClick = () => {
        footerDivRef.current.innerHTML = "Footer Content Reference"
    }

    return (
        <div>
            <Navbar />
            {children}            
            <div ref={footerDivRef}>footer</div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
};

export default MainLayout