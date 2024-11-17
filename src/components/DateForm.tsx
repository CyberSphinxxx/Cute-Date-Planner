import { useState } from "react";

interface DateFormProps {
  onSubmit: (date: { title: string; description: string; category: string }) => void;
}

export const DateForm = ({ onSubmit }: DateFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("romantic");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, category });
    setTitle("");
    setDescription("");
    setCategory("romantic");
  };

  return (
    <form onSubmit={handleSubmit} className="kawaii-card space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Date Idea ✨</h2>
      
      <div>
        <input
          type="text"
          placeholder="Date Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="kawaii-input w-full"
          required
        />
      </div>

      <div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="kawaii-input w-full h-24 resize-none"
          required
        />
      </div>

      <div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="kawaii-input w-full"
        >
          <option value="romantic">Romantic</option>
          <option value="adventure">Adventure</option>
          <option value="casual">Casual</option>
          <option value="foodie">Foodie</option>
        </select>
      </div>

      <button
        type="submit"
        className="kawaii-button bg-primary text-white w-full hover:bg-primary-hover"
      >
        Add Date Idea 💝
      </button>
    </form>
  );
};