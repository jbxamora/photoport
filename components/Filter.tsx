import React, { useState, useEffect } from "react";

type FilterComponentProps = {
  categories: string[];
  initialCategory: string;
  onCategorySelect: (category: string) => void;
};

const FilterComponent: React.FC<FilterComponentProps> = ({
  categories,
  initialCategory,
  onCategorySelect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  return (
    <>
      <div className="hidden flex-wrap justify-around gap-4 rounded bg-white/10 py-3 shadow-highlight sm:flex sm:px-0">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`m-1 rounded-lg px-2 py-1 text-xs text-gray-200 shadow-highlight transition-colors duration-200 hover:animate-pulse focus:border focus:outline-none sm:m-0 sm:px-4 sm:py-2 sm:text-base ${
              category === selectedCategory ? "selected-category-class" : ""
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <select
        className="block w-full rounded-lg bg-white/10 py-3 text-center text-gray-200 shadow-highlight sm:hidden"
        onChange={(e) => handleCategorySelect(e.target.value)}
        value={selectedCategory}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterComponent;
