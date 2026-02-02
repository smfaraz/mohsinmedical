interface SortingBarProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  totalResults: number;
}

export default function SortingBar({ sortBy, setSortBy, totalResults }: SortingBarProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex items-center justify-between">
      <div className="text-sm text-gray-600">
        <span className="font-medium text-gray-900">{totalResults}</span> products found
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="sort" className="text-sm text-gray-700 font-medium whitespace-nowrap">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="discount">Best Discount</option>
        </select>
      </div>
    </div>
  );
}