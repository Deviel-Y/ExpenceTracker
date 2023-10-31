import categories from "./Categories";

interface Probs {
  onSelectCategory: (category: string) => void;
}

function ExpenceFilter({ onSelectCategory }: Probs) {
  return (
    <div className="mb-3">
      <label htmlFor="expenceFilter" className="form-label">
        Expence Filter
      </label>
      <select
        onChange={(event) => onSelectCategory(event.target.value)}
        id="expenceFilter"
        className="form-select"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default ExpenceFilter;
