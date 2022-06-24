import React from "react";
import Image from "next/image";
import recent from "../public/images/Books/book_1.jpg";
export default function RightSection() {
  return (
    <div className="bg-white rounded-xl px-4 py-3">
      <h2 className=" text-lg text-secondary mb-8">Recently Added</h2>
      <div className="flex flex-col">
        <div className="recent-item flex items-start justify-start mb-4">
         <Image src={recent} alt="recent resources" width={60} height={90} />
          <div className="flex flex-col ml-3">
          <a href="www.amazon.com" className="text-secondary text-base mb-4">Cracking Coding Interview</a>
          <a href="www.amazon.com" className="w-max text-white text-xs bg-primary px-2 py-2 rounded">
            Get Book
          </a>
            
          </div>
          
        </div>
        <div className="recent-item flex items-start justify-start mb-4">
         <Image src={recent} alt="recent resources" width={60} height={90} />
          <div className="flex flex-col ml-3">
          <a href="www.amazon.com" className="text-secondary text-base mb-4">Cracking Coding Interview</a>
          <a href="www.amazon.com" className="w-max text-white text-xs bg-primary px-2 py-2 rounded">
            Get Book
          </a>
            
          </div>
          
        </div>
        
        <button className="text-primary">View all</button>
      </div>
    </div>
  );
}
