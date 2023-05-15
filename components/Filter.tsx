import React, { useState } from "react";
import axios from "axios";

type FilterComponentProps = {
  categories: string[];
  onCategorySelect: (category: string) => void; 
};

const FilterComponent: React.FC<FilterComponentProps> = ({ categories, onCategorySelect }) => {
  // Rest of the component

  const [images, setImages] = useState([]);

  const handleCategorySelect = async (category) => {
    const res = await axios.get(`/api/images?folder=${category}`);
    setImages(res.data.images);
  };

  return (
    <div className="bg-white/10 rounded gap-4 flex flex-wrap justify-around py-4 px-4 sm:px-0">
      {categories.map((category, index) => (
        <button
          key={index}
          className="rounded-lg border px-2 py-1 text-xs text-gray-200 shadow-md transition-colors duration-200 hover:animate-pulse focus:outline-none m-1 sm:m-0 sm:px-4 sm:py-2 sm:text-base"
          onClick={() => handleCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
