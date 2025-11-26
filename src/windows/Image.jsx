import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

function Image() {
   const { windows } = useWindowStore();
   
   const data = windows.imgfile?.data || {};
   const { name = "Untitled", imageUrl } = data;

   return (
      <div className="flex flex-col h-full w-full bg-[#f6f6f6]">
         <div 
            id="window-header" 
            className="window-header flex items-center shrink-0 h-11 px-4 bg-[#f1f1f1] border-b border-[#dedede] rounded-t-xl select-none"
         >
            <WindowControls target="imgfile" />
            
            <div className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-gray-700 flex items-center gap-2"> 
               <img src="/icons/pngfile.png" alt="icon" className="w-4.5 opacity-80" />
               <span className="opacity-80">{name}</span>
            </div>
         </div>

         <div className="flex-1 flex items-center justify-center overflow-hidden p-1 relative">
            
            {imageUrl ? (
               <div className="relative w-full h-full flex items-center justify-center p-4">
                  <img 
                     src={imageUrl} 
                     alt={name}
                     className="max-w-full max-h-full object-contain drop-shadow-md"
                     draggable={false}
                  />
               </div>
            ) : (
               <div className="text-gray-400 text-sm">No image loaded</div>
            )}
         </div>
      </div>
   );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;