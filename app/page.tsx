"use client"
import { useState } from "react";
import { Footer, Navbar } from "./ui/ui";
import { ChevronDown, CircleCheck } from "lucide-react";

export default function Home() {
  const faqs = [
        {
            "q":"What is this NFT Marketplace?",
            "a":"Our marketplace is a premium, curated platform built on Polygon's blockchain, offering exclusive digital collectibles vetted for quality and originality.",
        },
        {
            "q": "How is this marketplace different from others?",
            "a": " We focus on curation and exclusivity, ensuring only premium NFTs are listed, combined with fast, eco-friendly transactions powered by Polygon.",
        },
        {
            "q": "When will the marketplace launch?",
            "a": "The marketplace is currently in development. Early signups give you priority access and exclusive previews ahead of the official launch.",
        },
        {
            "q": "How do I signup early?",
            "a": "Click the 'Sign Up' or 'Get Early Access' button and provide your details. Early members receive updates and VIP benefits when we launch.",
        },
        {
            "q": "What is this NFT Marketplace?",
            "a": "Our marketplace is a premium, curated platform built on Polygon's blockchain, offering exclusive digital collectibles vetted for quality and originality.",
        },
        {
            "q": "What are NFTs beyond digital art?",
            "a": "NFTs represent unique digital ownership that can include art, music, access passes, memberships, virtual assets, and much more.",
        },
        {
            "q": "Will I need a crypto wallet?",
            "a": "Yes. To buy, sell, or hold NFTs on our platform, you'll need a compatible wallet that supports Polygon network tokens.",
        },
        {
            "q": "Can I sell my NFTs here?",
            "a": "Yes. Our platform allows creators to mint, list, and sell their NFTs to a global audience within a curated community.",
        },
        {
            "q": "What is this NFT Marketplace?",
            "a": "Our marketplace is a premium, curated platform built on Polygon's blockchain, offering exclusive digital collectibles vetted for quality and originality.",
        },
        {
            "q": "What fees are involved?",
            "a": "Transaction fees are competitively low, leveraging Polygon's scalability. Detailed fee info will be available upon launch.",
        },
        {
            "q": "How can I get support or help?",
            "a": "Our dedicated support team is available via email to assist you before and after the marketplace goes live.",
        },
  ]
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="w-full overflow-x-hidden">
        <Navbar/>
        <h1 className="mt-64 text-transparent">.</h1>
        <div className="w-full text-center items-center justify-center mx-auto flex-wrap">
            <h1 className="text-5xl font-bold tracking-tight text-balance text-black sm:text-7xl">Beyond Art, Beyond</h1>
            <h1 className="text-5xl font-bold tracking-tight text-balance text-black sm:text-7xl">Imagination—</h1>
            <h1 className="text-5xl font-bold tracking-tight text-balance text-black sm:text-7xl">NFTs Redefine Value</h1>
            <p className="mt-8 text-xl font-medium text-pretty text-gray-400 sm:text-xl/8">Join Early or Watch the Future Pass You By</p>
            <div className="mt-10 mb-16 flex items-center justify-center gap-x-6">
                <a href="signup" className="rounded-full border text-black border-gray-200 hover:text-white shadow-violet-400 shadow-2xl hover:bg-violet-900 transition duration-500 px-10 py-3 font-semibold" >Get started</a>
                <a href="/#mission" className="rounded-full bg-zinc-700 text-white shadow-zinc-400 shadow-2xl hover:bg-zinc-900 hover:shadow-zinc-700 transition duration-500 px-10 py-3 font-semibold">Learn more</a>
            </div>
        </div>
        <div className="flex flex-col items-center justify-content-center p-4 bg-gray-200">
          <div className="flex flex-wrap items-center justify-center p-10">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-yellow-300 via-amber-500 to-orange-600 mt-4 mb-3">Welcome to New Era of Digital Art</h1>
              <p className="text-xl text-center text-black">Step into a world where every digital creation is handpicked for its uniqueness and artistic excellence. Our marketplace isn't just another platform—it's a sanctuary for the truly exceptional.</p>
              <div className="mt-10 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                  <div className="flex flex-col items-center justify-center gap-x-6 rounded-2xl shadow-2xl bg-white px-4 py-12 w-60 h-60 hover:rotate-5 transition duration-500">
                      <h1 className="text-4xl font-bold text-black mt-4 mb-3">Latest News</h1>
                      <p className="text-black">Powered by Polygon blockchain for instant transactions</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-x-6 rounded-2xl shadow-2xl bg-white px-4 py-12 w-60 h-60 hover:rotate-5 transition duration-500">
                      <h1 className="text-4xl font-bold text-black mt-4 mb-3">Secure & Safe</h1>
                      <p className="text-black">Bank-grade security with blockchain transparency</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-x-6 rounded-2xl shadow-2xl bg-white  px-4 py-12 w-60 h-60 hover:rotate-5 transition duration-500">
                      <h1 className="text-4xl font-bold text-black mt-4 mb-3">Curated Excellence</h1>
                      <p className="text-black">Only the finest NFTs pass our selection process</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-x-6 rounded-2xl shadow-2xl bg-white px-4 py-12 w-60 h-60 hover:rotate-5 transition duration-500">
                      <h1 className="text-4xl font-bold text-black mt-4 mb-3">Vibrant Community</h1>
                      <p className="text-black">Join creators and collectors shaping the future</p>
                  </div>
              </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-content-center p-4 bg-zinc-900 flex-wrap">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center p-6 lg:p-10 w-full">
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-white">Powered by Polygon</h1>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-violet-500 to-purple-600">Designed for You</h1>
                    <p className="text-lg text-white mb-8 leading-relaxed max-w-xl">
                        Seamlessly harnessing the power of Polygon's blockchain, we deliver speed and security without compromise. Experience effortless transactions that feel as natural as owning art itself.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
                <img src="/images/photo-1.jpg" alt="" className="rounded-3xl w-full max-w-100 lg:max-w-xl h-auto shadow-2xl hover:rotate-3 transition duration-500"/>
            </div>
        </div>
        </div>
        <div className="flex flex-col items-center justify-content-center p-4 bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center p-6 lg:p-10 w-full">
            <div className="relative w-full lg:w-1/2 flex justify-center">
                <img src="images/photo-2.jpg" alt="" className="rounded-3xl w-full max-w-100 lg:max-w-xl h-auto shadow-2xl hover:rotate-3 transition duration-500"/>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-black">Curated for the</h1>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-l from-yellow-300 via-amber-500 to-orange-600">Discerning Collector</h1>
                    <p className="text-lg text-black mb-8 leading-relaxed max-w-xl">
                    Here, exclusivity is not an afterthought—it's the essence. Each NFT will be passed through a meticulous selection process, ensuring that only the finest meet your gaze and your collection.
                    </p>
                    <div className="flex flex-row items-start">
                        <CircleCheck className="text-black"/>
                        <a className="text-xl font-semibold mb-2 text-black">Handpicked by expert curators</a>
                    </div>
                    <div className="flex flex-row items-start text-black">
                        <CircleCheck className="text-black"/>
                        <a className="text-xl font-semibold mb-2 text-black">Verified authenticity guaranteed</a>
                    </div>
                    <div className="flex flex-row items-start ">
                        <CircleCheck className="text-black"/>
                        <a className="text-xl font-semibold mb-2 text-black">Premium quality standards</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-x-6 p-4 bg-linear-to-br from-slate-900 to-zinc-900">
    <div className="flex flex-col items-center justify-center gap-x-6 gap-y-3 my-24 max-h-2xl">
        <div className="flex flex-col items-center justify-center gap-x-6 mb-4">
            <h1 className="text-3xl font-bold text-white">A Centralized Touch with</h1>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-l from-green-100 via-teal-400 to-teal-800">Blockchain Integrity</h1>
        </div>
        <p className="text-xl max-w-xl font-medium text-white">Enjoy the best of both worlds—the trust and transparency of blockchain wrapped in a streamlined, intuitive experience curated just for you. Collect, trade, and showcase with confidence and ease.</p>
    </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-x-6 p-4 bg-gray-200">
    <div className="flex flex-col items-center justify-center gap-x-6 gap-y-3 my-24 max-h-2xl">
        <div className="flex flex-col items-center justify-center gap-x-6 mb-4">
            <div className="flex flex-row">
                <h1 className="text-3xl font-bold text-black mr-2">Join Us in Shaping</h1>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-pink-300 via-indigo-700 to-purple-800">Tomorrow's Legacy</h1>
            </div>
        </div>
        <p className="text-xl max-w-2xl text-slate-800 font-medium">This is more than a marketplace. It's a vibrant gallery, a dynamic community, and a future where art and innovation come alive. Your journey to owning exclusive digital masterpieces starts here.</p>
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
            <img src="images/photo-4.jpg"
                 className="w-full h-96 object-cover blur-2xl"
                 alt="Community Background"/>

            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <a href="https://discord.com/channels/1398288199616565268/1398384497044623488"
                   className="bg-zinc-900 text-white px-8 py-6 text-lg rounded-full font-semibold shadow-2xl shadow-black transition-all duration-500 hover:bg-white hover:text-slate-900">
                    Join the Community
                </a>
            </div>

        </div>
    </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-x-6 p-4 bg-linear-to-br from-slate-900 to-zinc-900">
    <div className="flex flex-col items-center justify-center gap-x-6 gap-y-3 my-24 max-h-2xl">
        <div className="flex flex-col items-center justify-center gap-x-6 mb-4">
            <h1 className="text-3xl font-bold text-white">The Journey Has Begun—</h1>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-l from-pink-300 via-indigo-700 to-purple-800">And You're Invited</h1>
        </div>
        <p className="text-xl max-w-xl font-medium text-white">Enjoy the best of both worlds—the trust and transparency of blockchain wrapped in a streamlined, intuitive experience curated just for you. Collect, trade, and showcase with confidence and ease.</p>
    </div>
    </div>
    <section id="early_access_cta_section" className="relative py-32 bg-zinc-950 flex flex-wrap">
        <div className="absolute inset-0">
            <img src="images/photo-celestial.jpg" alt="" className="w-full h-full object-cover opacity-30"/>
            <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Be First in Line for the
            <span className="bg-linear-to-r from-yellow-300 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Future
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Greatness takes time, and we're dedicated to delivering an experience that exceeds expectations.
            While we put the finishing touches on this exclusive space, you have a special opportunity to join us early.
          </p>
          <a href="/signup" className="bg-zinc-800 text-white px-12 py-7 text-xl rounded-full font-bold shadow-2xl shadow-black transition-all duration-500 hover:shadow-3xl hover:text-slate-900 hover:bg-white items-center text-center justify-items-center flex flex-wrap"
          >
            Get VIP Access Now
          </a>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center gap-x-6 p-4 bg-linear-to-br from-slate-900 to-zinc-900">
        <div className="flex flex-col items-center justify-center gap-x-6 gap-y-3 my-24 max-h-2xl">
            <div className="flex flex-row items-center justify-center gap-x-4 mb-4">
                <h1 className="text-3xl font-bold text-white">Stay Connected</h1>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-l from-pink-300 via-indigo-700 to-purple-800">Stay Exclusive.—</h1>
            </div>
            <p className="text-xl max-w-xl font-medium text-white">Enjoy the best of both worlds—the trust and transparency of blockchain wrapped in a streamlined, intuitive experience curated just for you. Collect, trade, and showcase with confidence and ease.</p>
        </div>
    </div>
    <div id="mission" className="w-full bg-gray-100 overflow-hidden">
    <div className="flex flex-col lg:flex-row items-stretch justify-center w-full">
        
        {/* Text Content Block */}
        <div className="flex flex-col items-center lg:items-start justify-center p-8 lg:p-20 w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex flex-row gap-2 mb-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-l from-pink-300 via-indigo-700 to-purple-800">Our</h1>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-yellow-300 via-amber-500 to-orange-600">Mission</h1>
            </div>
            <p className="text-lg text-slate-900 font-medium leading-relaxed max-w-xl">
                Seamlessly harnessing the power of Polygon's blockchain, we deliver speed and security without compromise. Experience effortless transactions that feel as natural as owning art itself.
            </p>
        </div>

        {/* Image Block - Fixed to Cover and Fill Gaps */}
        <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-auto min-h-100 overflow-hidden">
            <img 
                src="images/cele_back.png" 
                alt="Celestial Mission" 
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
            />
        </div>

    </div>
</div>
    <div className="flex flex-col items-center justify-center gap-x-6 p-4 bg-linear-to-br from-slate-900 to-zinc-900">
    <div className="flex flex-col items-center justify-center gap-x-6 gap-y-3 my-24 max-h-2xl">
        <div className="flex flex-col items-center justify-center gap-x-6 mb-4">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-yellow-300 via-amber-500 to-orange-600">Community and Safety</h1>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-l from-pink-300 via-indigo-700 to-purple-800">Creativity, Confidence, Community</h1>
        </div>
        <p className="text-xl max-w-xl font-medium bg-clip-text text-transparent bg-linear-to-l from-green-100 via-teal-400 to-teal-800">Enjoy the best of both worlds—the trust and transparency of blockchain wrapped in a streamlined, intuitive experience curated just for you. Collect, trade, and showcase with confidence and ease.</p>
        <p className="text-xl max-w-xl font-medium text-white">This isn't just about art. It's about what's possible—collecting, connecting, unlocking new forms of expression and belonging. Early signup means never missing out on tomorrow's legacy.</p>
        <div className="mt-10 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                <div className="flex flex-col items-center justify-center gap-x-6 rounded-2xl shadow-2xl bg-white px-4 py-12 w-60 h-60 bg-linear-to-tr/increasing from-indigo-300 via-violet-500 to-purple-600 hover:rotate-5 transition duration-500">
                    <h1 className="text-4xl font-bold text-black mt-4 mb-3">Secure Platform</h1>
                    <p className="text-white font-medium">Powered by Polygon blockchain for instant transactions</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-x-6 rounded-2xl shadow-2xl bg-white px-4 py-12 w-60 h-60 bg-linear-to-t/hsl from-green-100 via-teal-400 to-teal-800 hover:rotate-5 transition duration-500">
                    <h1 className="text-4xl font-bold text-white mt-4 mb-3">Privacy First</h1>
                    <p className="text-black font-medium">Bank-grade security with blockchain transparency</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-x-6 rounded-2xl shadow-2xl bg-white  px-4 py-12 w-60 h-60 bg-linear-to-bl/hsl from-yellow-300 via-amber-500 to-orange-600 hover:rotate-5 transition duration-500">
                    <h1 className="text-4xl font-bold text-black mt-4 mb-3">Safe Community</h1>
                    <p className="text-white font-medium">Only the finest NFTs pass our selection process</p>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-x-6 p-4 bg-linear-to-br from-slate-900 to-zinc-900">
    <div className="flex flex-col items-center justify-center gap-x-6 gap-y-3 my-24 max-h-2xl">
        <div className="flex flex-col items-center justify-center gap-x-6 mb-4">
            <h1 className="text-5xl font-bold text-white">Don't Just Watch—</h1>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-l from-green-100 via-teal-400 to-teal-800">Own the Future</h1>
        </div>
        <p className="text-xl max-w-xl font-medium text-white">Stay close: the marketplace is being crafted behind the scenes, and those who sign up now will be the first to shape and explore what's next.</p>
        <a href="/signup" className="bg-zinc-800 text-white px-12 py-7 text-xl rounded-full font-bold shadow-2xl shadow-black transition-all duration-500 hover:shadow-3xl hover:text-slate-900 hover:bg-white items-center text-center justify-items-center flex flex-wrap"
          >
            Join Waitlist Now
          </a>
        <p className="text-lg max-w-xl font-light text-white mt-4">Together, We're Building More Than a Marketplace
            We're creating a legacy—a realm where rarity meets ease, where curated excellence thrives, and where you belong.</p>
    </div>
    </div>
        <div id="faqs" className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
        <div className="flex flex-col items-center justify-center my-24 w-full max-w-4xl">

          {/* Animated Gradient Titles */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 mb-4 text-center">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-l from-yellow-300 via-amber-500 to-orange-600">Frequently</h1>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-l from-pink-300 via-indigo-700 to-purple-800">Asked</h1>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-tl from-pink-300 via-indigo-700 to-purple-800">Questions</h1>
          </div>

          <p className="text-xl max-w-xl font-medium text-black mb-10 text-center">
            Everything you need to know about CelestialE
          </p>

          <div className="w-full max-w-2xl mx-auto space-y-6">
            {faqs.map((item, index: number) => (
              <div 
                key={index} 
                className="border border-zinc-800 rounded-2xl bg-zinc-900 overflow-hidden shadow-2xl shadow-black">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full p-6 text-left transition-all duration-300 hover:bg-zinc-800/50"
                >
                  <span className="text-xl font-semibold text-white font-outfit">{item.q}</span>
                  <ChevronDown 
                    className={`text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>

                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-400 border-t border-zinc-800/50 font-medium pt-4 leading-relaxed font-outfit">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
