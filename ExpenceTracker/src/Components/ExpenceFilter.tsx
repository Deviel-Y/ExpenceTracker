import useExpenceStore from "../store";
import categories from "./Categories";

function ExpenceFilter() {
  const { expenceFilter } = useExpenceStore();
  return (
    <div className="mb-3">
      <label htmlFor="expenceFilter" className="form-label">
        Expence Filter
      </label>
      <select
        onChange={(event) => expenceFilter(event.target.value)}
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
