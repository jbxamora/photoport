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

  const handleAllSelect = () => {
    onCategorySelect(""); // Pass an empty string to indicate "All" category
  };

  return (
    <div className="flex flex-wrap justify-around gap-4 rounded bg-white/10 px-4 py-4 sm:px-0">
      <button
        key="all"
        className="m-1 rounded-lg border px-2 py-1 text-xs text-gray-200 shadow-md transition-colors duration-200 hover:animate-pulse focus:outline-none sm:m-0 sm:px-4 sm:py-2 sm:text-base"
        onClick={handleAllSelect}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className="m-1 rounded-lg border px-2 py-1 text-xs text-gray-200 shadow-md transition-colors duration-200 hover:animate-pulse focus:outline-none sm:m-0 sm:px-4 sm:py-2 sm:text-base"
          onClick={() => handleCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
