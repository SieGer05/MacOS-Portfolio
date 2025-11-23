import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
   const Wrapped = (props) => {
      const { focusWindow, toggleMaximize, windows } = useWindowStore();
      const windowState = windows[windowKey];
      const ref = useRef(null);

      const isOpen = windowState?.isOpen ?? false;
      const zIndex = windowState?.zIndex ?? 0;
      const isMaximized = windowState?.isMaximized ?? false;
      const isMinimized = windowState?.isMinimized ?? false;

      useGSAP(() => {
         if (!windowState) return; 
         
         const element = ref.current;
         if (!element) return;

         if (isOpen) {
            element.style.display = "block";
            gsap.set(element, { transformOrigin: "bottom center" });

            if (isMinimized) {
               gsap.to(element, {
                  scale: 0, opacity: 0, y: 200, duration: 0.3,
                  ease: "power3.in", overwrite: "auto"
               });
            } 
            
            else {
               if (!Draggable.get(element)?.isDragging) {
                  gsap.to(element, {
                  scale: 1, opacity: 1, y: 0, duration: 0.4,
                  ease: "power3.out", overwrite: "auto"
                  });
               }
            }

            if (!Draggable.get(element)) {
               Draggable.create(element, {
                  type: "x,y",
                  inertia: true,
                  trigger: element.querySelector(".window-header"),
                  allowEventDefault: true,
                  onPress: () => focusWindow(windowKey),
                  
                  bounds: { 
                     top: 40,             
                     left: -2000,         
                     width: 5000,         
                     height: "150%"       
                  },

                  onDragStart: function() {
                     if (this.target.classList.contains("maximized")) {
                        toggleMaximize(windowKey);

                        const restoredWidth = 640;
                        const newX = this.pointerX - (restoredWidth / 2);
                        const newY = this.pointerY - 20; 

                        gsap.set(this.target, { x: newX, y: newY });
                        this.update(); 
                     }
                  }
               });
            }

            const tracker = Draggable.get(element);
            if (tracker && !tracker.enabled()) {
               tracker.enabled(true);
            }

         } else {
            element.style.display = "none";
         }

         return () => {
            const tracker = Draggable.get(element);
            if (tracker) {
               tracker.kill();
            }
            gsap.killTweensOf(element);
         };
      }, [isOpen, isMinimized, isMaximized]); 

      if (!windowState) return null;

      const sizeClasses = isMaximized 
         ? "maximized fixed inset-0 w-full h-full rounded-none z-[9999] !transform-none" 
         : "w-[40rem] rounded-xl";

      return (
         <section 
            id={windowKey}
            ref={ref}
            style={{ zIndex: isMaximized ? 9999 : zIndex, display: 'none' }} 
            className={`absolute bg-[#f1f1f1] border border-white/40 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${sizeClasses}`}
            onMouseDown={() => focusWindow(windowKey)}
         >
            <Component {...props} windowKey={windowKey} />
         </section>
      );
   };

   Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
   return Wrapped;
}

export default WindowWrapper;