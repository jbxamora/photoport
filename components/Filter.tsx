import React from "react";

type FilterComponentProps = {
  categories: string[];
  onCategorySelect: (category: string) => void;
};

const FilterComponent: React.FC<FilterComponentProps> = ({
  categories,
  onCategorySelect,
}) => {
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
  };

  return (
    <>
      <div className="hidden flex-wrap justify-around gap-4 rounded bg-white/10 py-3 shadow-highlight sm:flex sm:px-0">
        {categories.map((category, index) => (
          <button
            key={index}
            className="m-1 rounded-lg px-2 py-1 text-xs text-gray-200 shadow-highlight transition-colors duration-200 hover:animate-pulse focus:border focus:outline-none sm:m-0 sm:px-4 sm:py-2 sm:text-base"
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <select
        className="block bg-white/10 py-3 shadow-highlight rounded-lg text-center text-gray-200 w-full sm:hidden"
        onChange={(e) => handleCategorySelect(e.target.value)}
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
