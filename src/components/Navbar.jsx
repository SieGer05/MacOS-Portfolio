import { navIcons, navLinks } from '#constants';
import useWindowStore from '#store/window';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

const Navbar = () => {
   const { openWindow } = useWindowStore();
   const [currentTime, setCurrentTime] = useState(dayjs());

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentTime(dayjs());
      }, 1000);

      return () => clearInterval(timer);
   }, []);

   return (
      <nav>
         <div>
            <img src="/images/logo.svg" alt="logo" className="w-5" />
            <p className='font-bold text-sm'>Djili's Portfolio</p>

            <ul>
               {navLinks.map(({ id, name, type }) => (
                  <li 
                     key={id}
                     onClick={() => openWindow(type)}
                  >
                     <p>{name}</p>
                  </li>
               ))}
            </ul>
         </div>

         <div>
            <ul className="flex items-center gap-3 mr-4">
               {navIcons.map(({ id, img}) => (
                  <li key={id}>
                     <img src={img} className='icon-hover w-4 h-4' alt={`icon-${id}`} />
                  </li>
               ))}
            </ul>

            <time 
               dateTime={currentTime.toISOString()}
               className="text-sm font-medium text-black min-w-[140px] text-right cursor-default select-none">
               {currentTime.format('ddd MMM D h:mm A')}
            </time>
         </div>
      </nav>
   );
}

export default Navbar;