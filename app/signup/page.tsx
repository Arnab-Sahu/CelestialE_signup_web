"use client"
import { useEffect, useState } from "react";
import { Footer, Navbar } from "../ui/ui";
export default function Home(){
    const [raw_email, setRaw_email] = useState("")
    const [raw_username, setRaw_username] = useState("")
    const [status, setStatus] = useState({ message: "", type: "" });
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (status.message) {
            const timer = setTimeout(() => {
                setStatus({ message: "", type: "" });
            }, 2000); // Message disappears after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [status]);
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault(); // Prevents the page from refreshing
        setIsLoading(true);
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                raw_email: raw_email,
                raw_username: raw_username,
            }),
        });
        if (response.ok) {
            console.log("Signup successful!");
            const data = await response.json()
            setRaw_email("")
            setRaw_username("")
            setStatus({message: data.message, type: data.type})
        } else {
            const data = await response.json()
            console.log("Signup failed.");
            setRaw_email("")
            setRaw_username("")
            setStatus({message: data.message, type: data.type})
        }
    };
    return(
    <div className="max-w-screen">
        <Navbar/>
        <div className="" style={{background: "url('images/computer_forms.png')"}}>
    <div className="flex flex-wrap flex-col items-center justify-content-center max-w-screen p-4 mx-auto backdrop-blur-2xl">
        <div className="flex flex-wrap flex-row mt-64 max-w-xl mx-auto mb-20 items-center justify-items-center bg-transparent">
            <form onSubmit={handleSubmit} className="rounded-2xl shadow-2xl shadow-black bg-white px-2 py-5 flex flex-col items-center max-w-xl gap-10">
                <div className="flex flex-row items-center justify-center gap-x-0 mb-4 backdrop-blue-2xl mx-3">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-l from-pink-300 via-indigo-700 to-purple-800">Sig</h1>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-l from-yellow-300 via-amber-500 to-orange-600">nup</h1>
                </div>
                {
                    status.type === "success" && 
                    (<div className="py-3 px-10 bg-green-800 rounded-full shadow-2xl shadow-black">
                        <h1 className="text-white">{status.message}</h1>
                    </div>)
                }
                {
                    status.type === "error" && 
                    (<div className="py-3 px-10 bg-red-800 rounded-full shadow-2xl shadow-black">
                        <h1 className="text-white">{status.message}</h1>
                    </div>)
                }
                <label>
                    <input className="rounded-full shadow-2xl shadow-black bg-zinc-900 py-3 px-8 outline-none focus:outline-none focus:border-none text-white font-medium placeholder-gray-600 mx-4" placeholder="Email Address" 
                    type="email"
                    name="email"
                    onChange={(e)=>{setRaw_email(e.target.value)}} 
                    value={raw_email} required/>
                </label>
                <label>
                    <input className="rounded-full shadow-2xl shadow-black bg-white py-3 px-8 outline-none focus:outline-none focus:border-none text-gray-900 font-medium placeholder-gray-500" 
                    placeholder="Username" 
                    type="text" 
                    name="username" 
                    onChange={(e)=>{setRaw_username(e.target.value)}} 
                    value={raw_username} required/>
                </label>
                <label className="flex flex-row gap-0.5">
                    <input type="checkbox" required/>
                    <div className="flex flex-row gap-1 mt-1">
                        <a className="text-blue-500 mb-1.5">Accept the </a>
                        <a className="text-blue-500 hover:underline" href="/terms">terms and conditions</a>
                    </div>
                </label>
                <button 
            type="submit" 
            disabled={isLoading} // 4. Disable when loading
            className={`px-5 py-1.5 font-medium text-white rounded-full transition duration-500 mb-8 
                ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-zinc-800 hover:bg-slate-950 shadow-2xl shadow-zinc-800"}`}
        >
            {isLoading ? "Signing up..." : "Submit"}
        </button>
            </form>
        </div>
    </div>
    </div>
        <Footer/>
    </div>
    )
}
