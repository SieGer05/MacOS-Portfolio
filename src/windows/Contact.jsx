import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

function Contact() {
   const [copied, setCopied] = useState(false);
   const email = "aminedjili29@gmail.com";

   const handleCopy = () => {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   };

   return (
      <>
         <div id="window-header" className="window-header">
            <WindowControls target="contact" />
            <h2>Contact Me</h2>
         </div>

         <div className="p-5 space-y-5">
            <div className="relative group w-fit">
               <div className="absolute -inset-0.5 bg-linear-to-br from-blue-400 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
               
               <img 
                  src="/images/me.jpg" 
                  alt="Med Amine DJILI" 
                  className="relative w-21 rounded-full border-2 border-white shadow-sm object-cover"
               />
            </div>

            <h3>Let's Connect</h3>
            <p>Need an extra pair of hands in security or development? I’m one message away.</p>
            
            <button 
               onClick={handleCopy}
               data-tooltip-id="email-tooltip"
               data-tooltip-content={copied ? "Copied!" : "Click to copy"}
               className="group flex items-center gap-3 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl hover:bg-white hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 w-fit cursor-pointer"
            >
               <div className="p-1.5 bg-gray-200/50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <Mail className="size-4 text-gray-500 group-hover:text-blue-500 transition-colors" />
               </div>

               <span className="font-mono text-sm text-gray-600 group-hover:text-gray-900 font-medium select-none">
                  {email}
               </span>

               <div className="ml-1 text-gray-400 group-hover:text-blue-500 transition-colors">
                  {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
               </div>

            </button>
            
            <Tooltip 
               id="email-tooltip" 
               place="right" 
               style={{ backgroundColor: "#1f2937", color: "#fff", borderRadius: "8px", fontSize: "12px", padding: "8px 12px" }}
            />

            <ul>
               {socials.map(({ id, bg, link, icon, text }) => (
                  <li 
                     key={id}
                     style={{ backgroundColor: bg}}
                  >
                     <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title={text}
                        className="flex flex-col justify-between h-full"
                     >
                        <div className="space-y-3">
                           <img src={icon} alt={text} className="size-6 brightness-0 invert filter" />
                           <p className="text-md">{text}</p>
                        </div>

                        <div className="pt-3 border-t border-white/20 flex items-center justify-between group-hover:pl-1 transition-all">
                           <span className="text-xs text-white/90 font-medium tracking-wide">
                              Click to view
                           </span>
                           
                           <svg className="size-3 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                           </svg>
                        </div>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;