import useWindowStore from "#store/window";

function WindowControls({ target }) {
   const { closeWindow, minimizeWindow, toggleMaximize } = useWindowStore();

   return (
      <div id="window-controls">
         <div 
            className="close" 
            onClick={(e) => {
               e.stopPropagation();
               closeWindow(target);
            }} 
         />

         <div 
            className="minimize"
            onClick={(e) => {
               e.stopPropagation();
               minimizeWindow(target);
            }}  
         />

         <div 
            className="maximize" 
            onClick={(e) => {
               e.stopPropagation();
               toggleMaximize(target);
            }} 
         />
      </div>
   );
}

export default WindowControls