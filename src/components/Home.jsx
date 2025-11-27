import { useState, useRef } from "react";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];

function Home() {
   const { setActiveLocation } = useLocationStore();
   const { openWindow } = useWindowStore();
   
   const [selectedId, setSelectedId] = useState(null);
   const containerRef = useRef(null);

   const handleOpenProjectFinder = (project) => {
      setActiveLocation(project);
      openWindow("finder");
      setSelectedId(null); 
   };

   const handleDeselect = (e) => {
      if (e.target.id === "home" || e.target.tagName === "SECTION") {
         setSelectedId(null);
      }
   };

   useGSAP(() => {
      Draggable.create(".folder", {
         type: "x,y",
         bounds: containerRef.current,
         inertia: true, 
         edgeResistance: 0.65,
         
         onPress: function() {
            const id = Number(this.target.getAttribute("data-id"));
            setSelectedId(id);
         },

         zIndexBoost: true, 
      });
   }, { scope: containerRef });

   return (
      <section 
         id="home" 
         ref={containerRef}
         onClick={handleDeselect}
         className="w-full h-full relative z-0 max-sm:hidden"
      >
         <ul>
            {projects.map((project) => {
               const isSelected = selectedId === project.id;

               return (
                  <li 
                     key={project.id}
                     data-id={project.id}
                     className={clsx(
                        "group folder absolute flex flex-col items-center cursor-default w-35 p-2 touch-none", 
                        project.position 
                     )}
                     onDoubleClick={() => handleOpenProjectFinder(project)}
                  >
                     <div className={clsx(
                        "p-1.5 rounded-md transition-all duration-200 border border-transparent",
                        isSelected 
                           ? "bg-black/20 border-white/10" 
                           : "group-hover:bg-white/10"     
                     )}>
                        <img 
                           src="/images/folder.png" 
                           alt={project.name} 
                           draggable={false}
                           className={clsx(
                              "w-16 h-16 object-contain pointer-events-none drop-shadow-md",
                              isSelected && "brightness-[0.7] sepia-[.5] hue-rotate-190 saturate-300"
                           )} 
                        />
                     </div>

                     <p className={clsx(
                        "text-xs font-light text-white text-center px-2 py-1 max-w-[110%] leading-tight select-none",
                        isSelected 
                           ? "bg-[#0158d0] text-white" 
                           : "group-hover:bg-black/40" 
                     )}>
                        {project.name}
                     </p>
                  </li>
               );
            })}
         </ul>
      </section>
   );
};

export default Home;