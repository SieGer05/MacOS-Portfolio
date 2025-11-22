import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FONT_WEIGHTS = {
   subtitle: { min: 100, max: 400, default: 100 },
   title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
   return [...text].map((char, i) => (
      <span
         key={i}
         className={className}
         style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
      >
         {char === " " ? "\u00A0" : char}
      </span>
   ));
};

const setupTextHover = (container, type) => {
   if (!container) return;

   const letters = container.querySelectorAll("span");
   const { min, max, default: defaultWeight } = FONT_WEIGHTS[type];

   const animateLetter = (letter, weight) => {
      gsap.to(letter, {
         duration: 0.25,
         ease: "power2.out",
         fontVariationSettings: `'wght' ${weight}`,
         overwrite: "auto", 
      });
   };

   const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;

      letters.forEach((letter) => {
         const { left, width } = letter.getBoundingClientRect();
         const center = left - rect.left + width / 2;
         const distance = Math.abs(mouseX - center);

         const intensity = Math.exp(-(distance ** 2) / 2000);
         const newWeight = min + (max - min) * intensity;

         animateLetter(letter, newWeight);
      });
   };

   const handleMouseLeave = () => {
      letters.forEach((letter) => {
         animateLetter(letter, defaultWeight);
      });
   };

   container.addEventListener("mousemove", handleMouseMove);
   container.addEventListener("mouseleave", handleMouseLeave);

   return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
   };
};

const Welcome = () => {
   const titleRef = useRef(null);
   const subtitleRef = useRef(null);

   useGSAP(() => {
      const cleanupTitle = setupTextHover(titleRef.current, "title");
      const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");

      return () => {
         if (cleanupTitle) cleanupTitle();
         if (cleanupSubtitle) cleanupSubtitle();
      };
   }, []);

   return (
      <section id="welcome">
         <p ref={subtitleRef} className="flex flex-wrap">
            {renderText(
               "Hey, I'm Djili! Welcome to my",
               "text-3xl font-georama",
               100
            )}
         </p>

         <h1 ref={titleRef} className="mt-7 flex flex-wrap">
            {renderText(
               "portfolio",
               "text-9xl italic font-georama"
            )}
         </h1>

         <div className="small-screen">
            <p>This Portfolio is designed for desktop/tablet screens only.</p>
         </div>
      </section>
   );
};

export default Welcome;