import { WindowControls } from '#components';
import { blogPosts } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, ShieldHalf, Book, Hash } from 'lucide-react';
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Safari() {
   const [searchQuery, setSearchQuery] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 3;

   // Sidebar & Category State
   const [showSidebar, setShowSidebar] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState("All");

   // --- GSAP SETUP ---
   const sidebarRef = useRef(null);

   useGSAP(() => {
      if (showSidebar) {
         gsap.to(sidebarRef.current, {
            width: "12rem", // w-48
            duration: 0.4,
            ease: "power3.out"
         });
      } else {
         gsap.to(sidebarRef.current, {
            width: 0,
            duration: 0.3,
            ease: "power3.in"
         });
      }
   }, [showSidebar]);

   // Get Categories
   const categories = ["All", ...new Set(blogPosts.map(post => post.category || "General"))];

   // Filter Logic
   const filteredPosts = blogPosts.filter(post => {
      const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = selectedCategory === "All" || (post.category || "General") === selectedCategory;
      return matchSearch && matchCategory;
   });

   const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
   const indexOfLastPost = currentPage * itemsPerPage;
   const indexOfFirstPost = indexOfLastPost - itemsPerPage;
   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

   const goToNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
   };

   const goToPrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
   };

   const handleSearch = (e) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1); 
   };

   const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setCurrentPage(1);
   };

   return (
      <>
         <div id='window-header' className='window-header'>
            <WindowControls target="safari" />

            <PanelLeft 
               className={`ml-10 icon cursor-pointer transition-colors duration-300 ${showSidebar ? 'bg-gray-300 text-blue-600' : ''}`} 
               onClick={() => setShowSidebar(!showSidebar)}
            />

            <div className='flex items-center gap-1 ml-5'>
               <ChevronLeft 
                  className={`icon ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-300'}`} 
                  onClick={goToPrevPage} 
               />
               <ChevronRight 
                  className={`icon ${currentPage >= totalPages ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-300'}`} 
                  onClick={goToNextPage} 
               />
            </div>

            <div className='flex-1 flex-center gap-3'>
               <ShieldHalf 
                  className='icon cursor-pointer' 
                  title="Reset All"
                  onClick={() => { setSearchQuery(""); setCurrentPage(1); setSelectedCategory("All"); }} 
               />

               <div className='search'>
                  <Search className='icon' />
                  <input 
                     type='text' 
                     placeholder='Search or enter website name'
                     className='flex-1 min-w-0 focus:outline-none focus:ring-0' 
                     value={searchQuery}
                     onChange={handleSearch}
                  />
               </div>
            </div>

            <div className='flex items-center gap-5'>
               <Search className='icon' />
               <Plus className='icon' />
               <Copy className='icon' />
            </div>
         </div>

         <div className="flex h-[calc(100%-3rem)] overflow-hidden">
            
            {/* --- SIDEBAR (Animated) --- 
               Note: I removed the {showSidebar && ...} check so GSAP can animate it closing.
               I moved the width/padding styles to GSAP and the inner container.
            */}
            <div 
               ref={sidebarRef} 
               className="bg-gray-50 border-r border-gray-200 flex flex-col h-full overflow-hidden"
               style={{ width: 0 }} 
            >
               <div className="w-48 p-4"> {/* Inner container maintains layout structure */}
                  <div className="min-w-40"> 
                     <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 pl-2">Topics</h3>
                     <ul className="space-y-1">
                        {categories.map((cat) => (
                           <li 
                              key={cat}
                              onClick={() => handleCategoryChange(cat)}
                              className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer ${selectedCategory === cat ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-200'}`}
                           >
                              {cat === "All" ? <Book size={14} /> : <Hash size={14} />}
                              {cat}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="blog flex-1 overflow-y-auto p-10">
               <div className="flex justify-between items-end mb-6">
                  <div>
                     <h2>Cybersecurity Insights</h2>
                     {selectedCategory !== "All" && <p className="text-xs text-blue-500 font-mono mt-1"> {selectedCategory}</p>}
                  </div>
                  
                  {filteredPosts.length > 0 && (
                     <span className="text-xs text-gray-400 mb-2 mr-2 font-mono">
                        Page {currentPage} of {totalPages}
                     </span>
                  )}
               </div>

               <div className='space-y-8'>
                  {currentPosts.length > 0 ? (
                     currentPosts.map(({ id, image, title, date, link }) => (
                        <div key={id} className='blog-post'>
                           <div className='image-container'>
                              <img src={image} alt={title} />
                           </div>

                           <div className='content'>
                              <p>{date}</p>
                              <h3>{title}</h3>
                              <a 
                                 href={link} 
                                 target='_blank' 
                                 rel='noopener noreferrer'
                              >
                                 Check out the full post 
                                 <MoveRight className='icon-hover' />
                              </a>
                           </div>
                        </div>
                     ))
                  ) : (
                     <div className="flex flex-col items-center justify-center opacity-50 mt-10">
                        <p>No articles found for "{searchQuery}"</p>
                        <button 
                           className="text-blue-500 underline mt-2 text-sm cursor-pointer hover:text-blue-600"
                           onClick={() => { setSearchQuery(""); setCurrentPage(1); setSelectedCategory("All"); }}
                        >
                           Clear Search
                        </button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;