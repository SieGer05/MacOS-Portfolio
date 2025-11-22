import { Tooltip } from "react-tooltip";
import { dockApps } from "#constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/window";

const Dock = () => {
   const { openWindow, minimizeWindow, windows } = useWindowStore();
   const dockRef = useRef(null);

   const hasOpenApps = Object.values(windows).some(win => win.isOpen);

   useGSAP(() => {
      const dock = dockRef.current;
      if (!dock) return; 
      
      gsap.to(dock, {
         paddingBottom: hasOpenApps ? "12px" : "4px", 
         duration: 0.4,
         ease: "power2.out"
      });

      const icons = dock.querySelectorAll(".dock-icon");

      const animateIcons = (mouseX) => {
         const { left } = dock.getBoundingClientRect();

         icons.forEach((icon) => {
            const { left: iconLeft, width } = icon.getBoundingClientRect();
            const center = iconLeft - left + width / 2;
            const distance = Math.abs(mouseX - center);

            const intensity = Math.exp(-(distance ** 2.5) / 25000);

            gsap.to(icon, {
               scale: 1 + 0.25 * intensity,
               y: -15 * intensity,
               duration: 0.2,
               ease: "power2.out", 
               overwrite: "auto",  
            });
         });
      };

      const handleMouseMove = (e) => {
         const { left } = dock.getBoundingClientRect();
         animateIcons(e.clientX - left);
      };

      const resetIcons = () => {
         icons.forEach((icon) => 
            gsap.to(icon, {
               scale: 1,
               y: 0,
               duration: 0.3,
               ease: "power2.out",
               overwrite: "auto",
            })
         );
      };
      
      dock.addEventListener('mousemove', handleMouseMove);
      dock.addEventListener('mouseleave', resetIcons);

      return () => {
         dock.removeEventListener("mousemove", handleMouseMove);
         dock.removeEventListener("mouseleave", resetIcons);
      };
   }, [hasOpenApps]);

   const toggleApp = ({ id, canOpen }) => {
      if(!canOpen) return;
      const win = windows[id];

      if (!win.isOpen || win.isMinimized) {
         openWindow(id);
      } else {
         minimizeWindow(id);
      }
   };

   return (
      <section id='dock'>
         <div ref={dockRef} className="dock-container items-end pb-1">
            {dockApps.map(({ id, name, icon, canOpen }) => {
               const isOpen = windows[id]?.isOpen;

               return (
                  <div key={id} className="relative flex flex-col items-center justify-end group">
                     <button 
                        type="button" 
                        className="dock-icon transition-none"
                        aria-label={name}
                        data-tooltip-id="dock-tooltip"
                        data-tooltip-content={name}
                        data-tooltip-delay-show={150}
                        disabled={!canOpen}
                        onClick={() => toggleApp({ id, canOpen })}
                     >
                        <img 
                           src={`/images/${icon}`}
                           alt={name}
                           loading="lazy"
                           className={`size-full select-none ${canOpen ? '' : 'opacity-60 grayscale'}`}
                        />
                     </button>
                     
                     <div 
                        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 size-1 rounded-full bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
                     />
                  </div>
               );
            })}

            <Tooltip 
               id="dock-tooltip" 
               place="top" 
               className="tooltip" 
               offset={20} 
            />
         </div>
      </section>
   );
};

export default Dock;