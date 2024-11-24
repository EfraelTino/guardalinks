import { API, validateEmail } from "@/components/api/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
interface Principal {
    title: string, desc: string, error: string, msgBackend:string

}
interface Home {
    data?: { principal: Principal, emaillab: string, waitlistText: string },

}

function Home({ data }: Home) {
    const [email, setEmail] = useState('')
    const [errordata, setErrorData] = useState({ emaildata: "" });
    const [message, setMessage] = useState("");
    const [loading, setloading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (email.trim() === "") {
            setErrorData((prevErrors) => ({
                ...prevErrors,
                emaildata: data?.principal.error,
            }));
            return;
        }
        setloading(true);
    

        try {
            let info = new FormData();
            info.append('action', 'insertwaitlist');
            info.append('email', email);
            info.append('project', 'savelinks');
            
            const response = await fetch(`${API}`, {
                body: info,
                method: 'post',
            });
            
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
        
            const res = await response.json();
            const { success } = res;
        
            if (success) {
                console.log(res);
                setMessage(data?.principal.msgBackend);
                setEmail('');
            } else {
                setMessage('Error!');
            }
        } catch (error) {
            console.log(error);
            setMessage('Hubo un problema con la solicitud');
        } finally {
            setloading(false);
        }  
    }


    return (
        <section className="flex justify-center py-10 pb-0 md:pb-20 md:py-20 px-4 md:px-0">
            <div className=" flex flex-col items-center justify-center" id="wait">
                <h1 className="text-2xl md:text-6xl  my-3 head text-center font-bold">
                    {
                        data?.principal.title
                    }
                </h1>
                <p className="text-center my-3 text-gray-600 text-sm md:text-lg font-light max-w-xl" dangerouslySetInnerHTML={{ __html: data?.principal.desc || '' }} />

                <form onSubmit={handleSubmit} action=""  className="flex flex-col md:flex-row my-3 max-w-md w-full items-center gap-2">
                    <Input type="email" className="border-input h-10 ocus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2  bg-white disabled:cursor-not-allowed disabled:opacity-50 px-3 py-2" placeholder={data?.emaillab} id="email"
                        value={email} onChange={(e) => {
                            setEmail(e.target.value);

                            if (!validateEmail(e.target.value)) {
                                setErrorData((prevErrors) => ({
                                    ...prevErrors,
                                    emaildata: data?.principal.error,
                                }));
                            } else {
                                setErrorData((prevErrors) => ({
                                    ...prevErrors,
                                    emaildata: "",
                                }));
                            }
                        }} />
                         {errordata.emaildata && (
                      <small className="error  flex md:hidden" style={{ color: "red" }}>
                        {errordata.emaildata}
                      </small>
                    )}
                    <Button className={` w-full h-10 ${loading ? 'bg-orange-300':'bg-orange-500  hover:bg-orange-600'}`}>
                        {
                          loading ?   (<div className="flex justify-center items-center">
                            <div className="w-8 h-8 border-4 border-t-4 border-white border-t-orange-500 rounded-full animate-spin"></div>
                        </div> ): data?.waitlistText
                        
                        }
                    </Button>

                </form>
                {errordata.emaildata && (
                      <small className="error hidden-s md:flex" style={{ color: "red" }}>
                        {errordata.emaildata}
                      </small>
                    )}
                     {message&& (
                      <small className= "text-center text-green-500">
                        {message}
                      </small>
                    )}
                <div className="mt-5 md:mt-20 relative max-w-5xl rounded-md"><img src="https://res.cloudinary.com/dhleanjv2/image/upload/v1732079520/muestra_fyvkmc.webp" alt="Panel de control de Shadcn" className="rounded-md border border-border z-0" /><div className="pointer-events-none absolute rounded-md demo z-20"></div></div>
            </div>
        </section>
    )

}
export default Home;