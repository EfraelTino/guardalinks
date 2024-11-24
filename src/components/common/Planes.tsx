import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Plan {
    ispro: boolean;
    title: string;
    most?: string;
    before?: string;
    text: string;
    price: string;
    money: string;
    labelInner: string;
    content: string[];
    btnText: string;
    redirect: string;
    oferta?: string;
}

interface DetailPlan {
    id: number;
    plan: Plan;
}

interface Suscribe {
    title: string;
    label: string;
    desc: string;
    dataCard: DetailPlan[];
}

interface Home {
    data?: {
        suscribe: Suscribe;
        emaillab?: string;
        waitlistText?: string
    };
}

function Planes({ data }: Home) {
    if (!data?.suscribe) return null;

    return (
        <section className="flex justify-center p-4" id='acceder'>
            <div className="flex flex-col items-center justify-center">
                <span className="text-orange-600 bg-orange-100 px-4  rounded-full text-sm font-medium text-center md:mb-4">
                    {data.suscribe.label}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    {data.suscribe.title}
                </h2>
                <p className="text-center text-muted-foreground mb-16">
                    {data.suscribe.desc}
                </p>
                <div className="relative max-w-6xl rounded-md flex flex-col md:flex-row gap-6 md:gap-4">
                    {data.suscribe.dataCard.map((item) => (
                        <Card
                            key={item.id}
                            className={`rounded-xl border text-card-foreground shadow w-full md:w-[400px] bg-white relative hover:shadow-lg transition-all py-4 ${item.plan.oferta ? 'rounded-xl text-card-foreground shadow w-full md:w-[400px] bg-white relative hover:shadow-lg transition-all border border-orange-400 ring-2 ring-orange-300/20' : ''}`}
                        >
                            {item.plan.most && (
                                <div className="absolute left-0 right-0 -top-3 flex justify-center"><span className="bg-orange-500 md:py-1 rounded-full px-3  text-white uppercase font-semibold flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.226 11.33l6.998-8.983c.547-.703 1.573-.266 1.573.67V9.97c0 .56.402 1.015.899 1.015H18.1c.773 0 1.185 1.03.674 1.686l-6.998 8.983c-.547.702-1.573.265-1.573-.671V14.03c0-.56-.403-1.015-.899-1.015H5.9c-.773 0-1.185-1.03-.674-1.686" color="currentColor"></path></svg>
                                    {item.plan.most}
                                </span></div>

                            )}
                            <CardHeader className="space-y-2">
                                <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                                    {item.plan.title}
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    {item.plan.text}
                                </CardDescription>
                                <div className="flex items-center gap-2">
                                    {item.plan.before && (
                                        <span className="text-sm line-through text-muted-foreground">
                                            {item.plan.before}
                                        </span>
                                    )}
                                    <h4 className="text-4xl font-bold">{item.plan.price}</h4>
                                    <p className="text-xs text-muted-foreground uppercase font-semibold">
                                        {item.plan.money}
                                    </p>
                                </div>
                                <CardDescription className="text-sm">
                                    {item.plan.labelInner}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {item.plan.content.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-4 h-4 text-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <p className="text-sm">{feature}</p>
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter className='flex-col'>
                                <Button
                                    className={`${item.plan.oferta ? "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow px-4 w-full py-3 h-10 bg-orange-500 text-white hover:bg-orange-600": "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground px-4 w-full py-3 h-10 text-black"}`}
                                >
                                   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.226 11.33l6.998-8.983c.547-.703 1.573-.266 1.573.67V9.97c0 .56.402 1.015.899 1.015H18.1c.773 0 1.185 1.03.674 1.686l-6.998 8.983c-.547.702-1.573.265-1.573-.671V14.03c0-.56-.403-1.015-.899-1.015H5.9c-.773 0-1.185-1.03-.674-1.686" color="currentColor"></path></svg> {item.plan.btnText}
                                </Button>
                                {item.plan.oferta ? (
                                <p className="flex mt-1 items-center justify-center text-sm text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4 mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    {item.plan.oferta}
                                </p>
                            ): ''}
                            </CardFooter>
                            
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Planes;