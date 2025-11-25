import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

function Text() {
   const { windows } = useWindowStore();

   const data = windows.txtfile?.data || {};

   const {
      name, 
      image, 
      subtitle, 
      description 
   } = data;

   return (
      <div className="flex flex-col h-full w-full">
         <div 
            id="window-header" 
            className="window-header flex items-center shrink-0 h-11 px-4 bg-[#f1f1f1] border-b border-[#dedede] rounded-t-xl select-none"
         >
            <WindowControls target="txtfile" />
            
            <div className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-gray-700 flex items-center gap-2">
               <span className="opacity-80">{name}</span> 
               <span className="text-[10px] text-gray-400 font-normal hidden sm:block">~ Edited</span>
            </div>
         </div>

         <div className="flex-1 overflow-y-auto bg-white p-6 custom-scrollbar">
            <div className="max-w-md mx-auto space-y-6">
               
               {image && (
                  <div className="relative group">
                     <img 
                        src={image} 
                        alt={name}
                        className="w-32 h-32 md:w-full md:h-64 object-cover rounded-lg shadow-sm border border-gray-100 mx-auto"
                     />
                  </div>
               )}

               <div className="space-y-4">
                  {subtitle && (
                     <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                        {subtitle}
                     </h3>
                  )}

                  {Array.isArray(description) && description.length > 0 && (
                     <div className="text-[15px] leading-7 text-gray-700 space-y-4 font-normal">
                        {description.map((para, idx) => (
                           <p key={idx}>{para}</p>
                        ))}
                     </div>
                  )}
               </div>

               <div className="pt-6 mt-4 border-t border-gray-100 text-xs text-gray-400 text-center">
                  Last updated: Today at 8:47 PM
               </div>
            </div>
         </div>
      </div>
   );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;