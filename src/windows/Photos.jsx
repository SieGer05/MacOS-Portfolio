import { WindowControls } from '#components';
import { gallery, photosLinks } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import { Mail, Search } from 'lucide-react';
import React from 'react'

function Photos() {
   const { openWindow } = useWindowStore();
   
   return (
      <div className="flex flex-col h-full w-full"> 
         
         <div id='window-header' className='window-header flex-none border-b border-gray-200'>
            <WindowControls target="photos" />

            <div className='flex-1 flex justify-end items-center gap-3 text-gray-400 pr-2'>
               <Mail className='size-4 cursor-pointer hover:text-gray-600' />
               <Search className='size-4 cursor-pointer hover:text-gray-600' />
            </div>
         </div>

         <div className='flex flex-1 overflow-hidden'> 
            
            <div className='sidebar'>
               <h2>Photos</h2>
               <ul className="space-y-1">
                  {photosLinks.map(({ id, icon, title }) => (
                     <li key={id} className={id === 1 ? 'bg-gray-200/60 text-black' : 'text-gray-600'}>
                        <img src={icon} alt={title} className="opacity-70" />
                        <p>{title}</p>
                     </li>
                  ))}
               </ul>
            </div>
                  
            <div className='gallery'>
               <ul>
                  {gallery.map(({ id, img }) => (
                     <li
                        key={id}
                        onClick={() =>
                           openWindow("imgfile", {
                              id,
                              name: "Gallery image",
                              icon: "/images/image.png",
                              kind: "file",
                              fileType: "img",
                              imageUrl: img,
                           })
                        }
                     >
                        <img src={img} alt={`Gallery image ${id}`} loading="lazy" className='cursor-pointer' />
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
PhotosWindow.displayName = "Photos";

export default PhotosWindow;