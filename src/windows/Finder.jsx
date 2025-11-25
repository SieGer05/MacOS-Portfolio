import { WindowControls } from '#components';
import { locations } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import useLocationStore from '#store/location';
import useWindowStore from '#store/window';
import clsx from 'clsx';
import { Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function Finder() {
   const { openWindow } = useWindowStore();
   const { activeLocation, setActiveLocation } = useLocationStore();
   
   const [selectedItemId, setSelectedItemId] = useState(null);

   useEffect(() => {
      setSelectedItemId(null);
   }, [activeLocation]);

   const openItem = (item) => {
      if (item.fileType === 'pdf') return openWindow('resume');
      if (item.kind === 'folder') {
         setActiveLocation(item);
         setSelectedItemId(null);
         return;
      }
      if (['fig', 'url'].includes(item.fileType) && item.href)
         return window.open(item.href, "_blank");

      openWindow(`${item.fileType}${item.kind}`, item);
   };

   const handleSelection = (e, id) => {
      e.stopPropagation();
      setSelectedItemId(id);
   };

   const handleBackgroundClick = () => {
      setSelectedItemId(null);
   };

   const renderList = (name, items) => (
      <div>
         <h3>{name}</h3>
         <ul>
            {items.map((item) => (
               <li 
                  key={item.id}
                  onClick={() => setActiveLocation(item)}
                  className={clsx(item.id === activeLocation.id ? 'active' : 'not-active')}
               >
                  <img src={item.icon} className='w-4' alt={item.name} />
                  <p className='text-sm font-medium truncate'>{item.name}</p>
               </li>
            ))}
         </ul>
      </div>
   );

   return (
      <>
         <div id='window-header' className='window-header'>
            <WindowControls target="finder" />
            <span className='font-semibold ml-4 text-sm text-gray-700'>
               {activeLocation ? activeLocation.name : 'Finder'}
            </span>
            <div className='flex-1' />
            <Search className='icon w-6 h-6 text-gray-500 mr-2' />
         </div>

         <div className='bg-white flex h-full overflow-hidden rounded-b-xl'>

            <div className='sidebar w-[180px] shrink-0 bg-gray-50/80 backdrop-blur-md border-r border-gray-200 overflow-y-auto'>
               {renderList('Favorites' ,Object.values(locations))}
               {renderList('My Projects', locations.work.children)}
            </div>

            <ul 
               className='content'
               onClick={handleBackgroundClick}
            >
               {activeLocation?.children.map((item) => {
                  const isSelected = selectedItemId === item.id;
                  
                  return (
                     <li 
                        key={item.id} 
                        className={clsx(
                           "flex flex-col items-center justify-start p-2 rounded-md cursor-default transition-all duration-100 h-fit",
                           isSelected ? 'bg-[#CCE8FF] border border-[#99D1FF]' : 'border border-transparent hover:bg-gray-50'
                        )}
                        onClick={(e) => handleSelection(e, item.id)}
                        onDoubleClick={() => openItem(item)}
                     >
                        <img 
                           src={item.icon} 
                           alt={item.name} 
                           className='w-14 h-14 object-contain mb-1 drop-shadow-sm'
                        />
                        <p className={clsx(
                           "text-xs text-center wrap-break-word w-full px-1 leading-tight select-none",
                           isSelected ? 'text-blue-900 font-semibold' : 'text-gray-600'
                        )}>
                           {item.name}
                        </p>
                     </li>
                  )
               })}
            </ul>
         </div>
      </>
   );
};

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;