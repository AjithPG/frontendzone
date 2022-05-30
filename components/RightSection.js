import React from "react";
import Image from "next/image";
import recent from "../public/images/recent-1.png";
export default function RightSection() {
  return (
    <div className="bg-white rounded-xl px-4 py-3">
      <h2 className=" text-lg text-secondary mb-8">Recently Added</h2>
      <div className="flex flex-col">
        <div className="recent-item flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Image src={recent} alt="recent resources" width={50} height={50} />
            <h3 className="text-secondary text-base ml-3">UI Components</h3>
          </div>
          <button className="text-primary text-sm bg-secondaryLight px-4 py-2 rounded">
            View
          </button>
        </div>
        <div className="recent-item flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Image src={recent} alt="recent resources" width={50} height={50} />
            <h3 className="text-secondary text-base ml-3">UI Components</h3>
          </div>
          <button className="text-primary text-sm bg-secondaryLight px-4 py-2 rounded">
            View
          </button>
        </div>
        <button className="text-primary">View all</button>
      </div>
    </div>
  );
}
