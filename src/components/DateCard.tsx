import { Heart } from "lucide-react";
import { useState } from "react";

interface DateCardProps {
  title: string;
  description: string;
  category: string;
}

export const DateCard = ({ title, description, category }: DateCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="kawaii-card animate-pop"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <span className="inline-block bg-secondary px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`p-2 rounded-full transition-all duration-200 ${
            isFavorite ? 'text-primary bg-primary/10' : 'text-gray-400 hover:text-primary'
          }`}
        >
          <Heart
            className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''} ${
              isHovered ? 'animate-bounce-small' : ''
            }`}
          />
        </button>
      </div>
      <p className="text-kawaii-gray">{description}</p>
    </div>
  );
};