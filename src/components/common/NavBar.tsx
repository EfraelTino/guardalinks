import React, { type Dispatch, type SetStateAction } from "react";
import { Button } from "@/components/ui/button";


interface Data {
    title: string;
    desc: string;
}

interface LanguageData {
    principal: Data;
    waitlistText: string;
    acceder: string;
}

interface NavBarProps {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
    data?: LanguageData;
}

function NavBar({ language, setLanguage, data }: NavBarProps) {

    return (
        <nav className="flex justify-between px-4 md:px-0 items-center">
            <a href="#" className="font-black text-2xl md:text-4xl logo">
                GuardaLinks
            </a>

            <div className="gap-2 flex items-center">
            <a
            href="#acceder"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  text-primary-foreground shadow h-9 px-4 py-2 bg-primary hover:bg-primary/90" 
                    
                >
                    {data?.acceder}
                </a>
                <a
                    href="#wait"
                    className="hidden-s md:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-pri text-primary-foreground shadow hover:bg-pri h-9 px-4 py-2"
                >
                    {data?.waitlistText}
                </a>

                <Button
                className="fixed left-4 bottom-4 z-30"
                    onClick={() => {
                        setLanguage(language === 'es' ? 'en' : 'es');
                    }}
                >
                    {language === 'es' ? 'EN' : 'ES'}
                </Button>
            </div>
        </nav>
    );
}

export default NavBar;
