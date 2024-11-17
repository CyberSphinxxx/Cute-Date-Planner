interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  const categories = [
    { id: "all", label: "All", emoji: "✨" },
    { id: "none", label: "None", emoji: "🤍" },
    { id: "romantic", label: "Romantic", emoji: "💝" },
    { id: "adventure", label: "Adventure", emoji: "🌟" },
    { id: "casual", label: "Casual", emoji: "☺️" },
    { id: "foodie", label: "Foodie", emoji: "🍰" },
    { id: "movie", label: "Movie", emoji: "🎬" },
    { id: "outdoor", label: "Outdoor", emoji: "🌿" },
    { id: "fitness", label: "Fitness", emoji: "💪" },
    { id: "game", label: "Game Night", emoji: "🎮" },
    { id: "nature", label: "Nature", emoji: "🌸" },
    { id: "travel", label: "Travel", emoji: "✈️" },
    { id: "sports", label: "Sports", emoji: "⚽" },
    { id: "shopping", label: "Shopping", emoji: "🛍️" },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`kawaii-button whitespace-nowrap ${
            selectedCategory === category.id
              ? "bg-primary text-white"
              : "bg-white text-kawaii-purple hover:bg-primary/10"
          }`}
        >
          {category.emoji} {category.label}
        </button>
      ))}
    </div>
  );
};