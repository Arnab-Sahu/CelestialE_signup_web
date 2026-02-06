"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home(){
    const tnc = [
        {
            "num":"1.",
            "heading":"Early Access Invitation",
            "text":"Your early signup grants you priority access to updates, previews, and invitations ahead of the official marketplace launch. This does not guarantee immediate access to the full platform or any NFTs until the official launch.",
        },
        {
            "num": "2.",
            "heading": "User Eligibility",
            "text": "You confirm that you are at least 18 years old, or of legal age in your jurisdiction, and have the legal capacity to enter into this agreement.",
        },
        {
            "num": "3.",
            "heading": "Information Accuracy",
            "text": "You agree to provide accurate and truthful information during signup and to keep your account information up to date.",
        },
        {
            "num": "4.",
            "heading": "Data Processing and Privacy",
            "text": "By signing up, you consent to the collection, storage, and use of your personal information as described in our Privacy Policy. This includes communication about the marketplace, promotional offers, and updates. You may opt out at any time through communication preferences.",
        },
        {
            "num": "5.",
            "heading": "No Financial Commitment",
            "text": "Early signup is free and does not obligate you to make any purchases or engage in transactions on the platform. Any future purchases will be subject to additional terms and conditions at launch.",
        },
        {
            "num": "6.",
            "heading": "Risks and Disclaimers",
            "text": "As the marketplace is under development, features and services described are subject to change. By signing up early, you acknowledge that services are provided \"as is\" and no warranties are made regarding launch timelines or content availability.",
        },
        {
            "num": "7.",
            "heading": "Communication Consent",
            "text": "You agree to receive occasional emails and announcements related to the marketplace development, launch notifications, and exclusive early access opportunities. You may unsubscribe at any time.",
        },
        {
            "num": "8.",
            "heading": "Intellectual Property",
            "text": "All content shared with early users remains the property of the marketplace and its partners. You agree not to share confidential information or materials until officially released.",
        },
        {
            "num": "9.",
            "heading": "Termination of Early Access",
            "text": "The marketplace reserves the right to terminate or suspend early access privileges at its discretion, including for violations of these terms or inappropriate conduct.",
        },
        {
            "num": "10.",
            "heading": "Governing Law and Dispute Resolution",
            "text": "These terms shall be governed by the laws applicable to the marketplace’s jurisdiction. Any disputes arising from early signup will be resolved through amicable discussions or mediation before legal action.",
        }
    ]
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
      const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    return (
        <div id="faqs" className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
        <div className="flex flex-col items-center justify-center my-24 w-full max-w-4xl">

          {/* Animated Gradient Titles */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 mb-4 text-center">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-l from-yellow-300 via-amber-500 to-orange-600">Terms</h1>
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-l from-pink-300 via-indigo-700 to-purple-800">and </h1>
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-tl from-pink-300 via-indigo-700 to-purple-800">Conditions</h1>
          </div>

          <p className="text-xl max-w-xl font-medium text-black mb-10 text-center">
            Welcome and thank you for your interest in joining our exclusive NFT marketplace community. By signing up early, you agree to the following terms and conditions
          </p>

          <div className="w-full max-w-2xl mx-auto space-y-6">
            {tnc.map((item, index: number) => (
              <div 
                key={index} 
                className="border border-zinc-800 rounded-2xl bg-zinc-900 overflow-hidden shadow-2xl shadow-black">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full p-6 text-left transition-all duration-300 hover:bg-zinc-800/50"
                >
                  <span className="text-xl font-semibold text-white font-outfit">{item.num} {item.heading}</span>
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
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}