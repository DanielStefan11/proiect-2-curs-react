import React from "react";
// components
import { SelectPicker } from "rsuite";

const ProductFilters = () => {
  return (
    <div className="w-100 mb-5 d-flex justify-content-center flex-wrap filters-wrapper">
      <SelectPicker
        searchable={false}
        placeholder="Sort by name"
        className="mr-0 mr-sm-3 mt-3 filters"
      />
      <SelectPicker
        searchable={false}
        placeholder="Sort by brand"
        className="mr-0 mr-sm-3 mt-3 filters"
      />
      <SelectPicker
        searchable={false}
        placeholder="Sort by price"
        className="mr-0 mr-sm-3 mt-3 filters"
      />
      <SelectPicker
        searchable={false}
        placeholder="Sort by stock"
        className="mt-3 filters"
      />
    </div>
  );
};

export default ProductFilters;
