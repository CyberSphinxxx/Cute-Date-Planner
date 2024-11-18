import { Heart, Trash2, MapPin, Calendar, Clock, Edit, Check } from "lucide-react";
import { useState } from "react";

interface DateCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  completed: boolean;
  onDelete: () => void;
  onEdit: () => void;
  onToggleComplete: () => void;
}

export const DateCard = ({ 
  title, 
  description, 
  category, 
  date, 
  time, 
  location,
  completed,
  onDelete,
  onEdit,
  onToggleComplete
}: DateCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div 
      className={`kawaii-card animate-pop ${completed ? 'opacity-75' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className={`text-xl font-bold mb-1 ${completed ? 'line-through' : ''}`}>{title}</h3>
          <span className="inline-block bg-secondary px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onToggleComplete}
            className={`p-2 rounded-full transition-all duration-200 ${
              completed ? 'text-green-500 bg-green-50' : 'text-gray-400 hover:text-green-500 hover:bg-green-50'
            }`}
          >
            <Check className="w-6 h-6" />
          </button>
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
          <button
            onClick={onEdit}
            className="p-2 rounded-full transition-all duration-200 text-gray-400 hover:text-blue-500 hover:bg-blue-50"
          >
            <Edit className="w-6 h-6" />
          </button>
          <button
            onClick={onDelete}
            className="p-2 rounded-full transition-all duration-200 text-gray-400 hover:text-red-500 hover:bg-red-50"
          >
            <Trash2 className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <p className={`text-kawaii-gray mb-4 ${completed ? 'line-through' : ''}`}>{description}</p>
      
      <div className="space-y-2 text-sm text-kawaii-gray">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(date)}</span>
          <Clock className="w-4 h-4 ml-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};