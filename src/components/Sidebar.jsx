import { useState } from "react";
import { category } from "../data";

function Sidebar() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
    return (
        <div className="w-1/4 hidden lg:block bg-white p-4 ">
          <h2 className="font-semibold mb-4">Categories</h2>
            {category.map((category) => (
          <ul key={category.id}>
              <li onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
             className="mb-2 text-sm text-gray-700 cursor-pointer">
                {category.cat}
                {/* {category.subcat.map((subcat)=>(
                  <p key={category.id}>{subcat.head}</p>
                ))} */}
              </li>
                {hoveredCategory === category.id && (
                  <ul className="absolute right-[25%] top-[35%] ml-4 p-2 w-1/2 z-40 min-h-[400px] bg-white border border-gray-200 shadow-xl rounded-lg">
                    {category.subcat.map((sub, idx) => (
                      <li key={idx} className="p-2 hover:bg-gray-100">
                        {sub.head}
                        {sub.details.map((detail)=>(
                          <>
                          <li className="p-2 hover:bg-gray-100">
                           {detail}
                         </li>
                          </> 
                        ))}
                      </li>
                    ))}
                    </ul>
                )}
          </ul>
            ))}
            <li className="text-blue-500 cursor-pointer">More Categories</li>
        </div>
      );
}

export default Sidebar