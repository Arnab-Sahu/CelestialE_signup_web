export function Navbar() {
    return (
        <nav className="flex flex-row flex-wrap py-6 fixed top-0 z-50 border-b-2 border-gray-200 items-center justify-between w-full bg-white max-w-screen">
        <div>
            <h1 className="font-extrabold mx-4 text-black text-2xl">CelestialE</h1>
        </div>
        <div className="flex flex-row gap-5 items-center mr-4">
            <a href="/signup" className="rounded-full bg-pink-400 shadow-pink-400 text-black shadow-2xl hover:bg-pink-700 hover:shadow-pink-700 transition duration-500 px-10 py-3 font-semibold">Sign up</a>
        </div>
    </nav>
    )
}
export function Footer() {
    return (
        // Changed max-w-screen to w-full and removed restricted flex
        <footer className="w-full bg-zinc-900 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* GRID FIX: 
                  - cols-1 on mobile (stacks everything)
                  - md:grid-cols-3 on desktop (side-by-side)
                */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    
                    {/* Brand Section */}
                    <div className="flex flex-col items-center md:items-start tracking-tight">
                        <h1 className="font-extrabold text-2xl text-white mb-4">CelestialE</h1>
                        <p className="text-zinc-400 max-w-sm leading-relaxed">
                            A premium, curated NFT marketplace powered by Polygon. Join us in shaping tomorrow's legacy of digital art and innovation.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h1 className="font-extrabold text-xl text-white mb-2">Quick Links</h1>
                        <a className="text-zinc-400 hover:text-white transition" href="/">Home</a>
                        <a className="text-zinc-400 hover:text-white transition" href="/#mission">Mission</a>
                        <a className="text-zinc-400 hover:text-white transition" href="/#faqs">FAQ</a>
                        <a className="text-zinc-400 hover:text-white transition" href="/terms">Terms of Service</a>
                    </div>

                    {/* Social Section */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h1 className="font-extrabold text-xl text-white mb-2">Connect With Us</h1>
                        
                        <div className="flex flex-row gap-3 items-center group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white transition"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                            <a className="text-zinc-400 group-hover:text-white transition" href="mailto:celestiale333@gmail.com">celestiale333@gmail.com</a>
                        </div>

                        <div className="flex flex-row gap-3 items-center group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white transition"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                            <a className="text-zinc-400 group-hover:text-white transition" href="https://www.instagram.com/celestial._.e">Instagram</a>
                        </div>

                        <div className="flex flex-row gap-3 items-center group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white transition"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                            <a className="text-zinc-400 group-hover:text-white transition" href="https://x.com/CelestialE333">Follow on X</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
                    <p className="text-zinc-500 text-sm">© 2026 CelestialE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
