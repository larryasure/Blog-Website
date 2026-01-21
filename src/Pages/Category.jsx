import { categories } from "../Data/Categories";
import CategoryCard from "../Components/CategoryCards";
import { NavLink } from "react-router-dom";

export default function Category() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Explore Categories</h1>

      <div className="flex flex-wrap gap-8">
        {categories.map((cat) => (
          <NavLink key={cat.slug} to={`/category/${cat.slug}`}>
            <CategoryCard category={cat} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
