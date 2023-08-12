import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Works,
    StarsCanvas,
} from "./components";

const App = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768); // Adjust the breakpoint as needed
        };

        // Initial check
        handleResize();

        // Attach the event listener
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Works />
                <div className="relative z-0">
                    <Contact />
                    {isDesktop && <StarsCanvas />}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
