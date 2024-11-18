import { useState, useEffect } from "react";

interface DateFormProps {
  onSubmit: (date: { 
    title: string; 
    description: string; 
    category: string;
    date: string;
    time: string;
    location: string;
  }) => void;
  initialValues?: {
    title: string;
    description: string;
    category: string;
    date: string;
    time: string;
    location: string;
  };
  submitLabel?: string;
}

export const DateForm = ({ onSubmit, initialValues, submitLabel = "Add Date Idea 💝" }: DateFormProps) => {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [description, setDescription] = useState(initialValues?.description || "");
  const [category, setCategory] = useState(initialValues?.category || "none");
  const [date, setDate] = useState(initialValues?.date || "");
  const [time, setTime] = useState(initialValues?.time || "");
  const [location, setLocation] = useState(initialValues?.location || "");

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title);
      setDescription(initialValues.description);
      setCategory(initialValues.category);
      setDate(initialValues.date);
      setTime(initialValues.time);
      setLocation(initialValues.location);
    }
  }, [initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, category, date, time, location });
    if (!initialValues) {
      setTitle("");
      setDescription("");
      setCategory("none");
      setDate("");
      setTime("");
      setLocation("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="kawaii-card space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        {initialValues ? "Edit Date Idea ✏️" : "Add New Date Idea ✨"}
      </h2>
      
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

      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="kawaii-input"
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="kawaii-input"
          required
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="kawaii-input w-full"
          required
        />
      </div>

      <div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="kawaii-input w-full"
        >
          <option value="none">None</option>
          <option value="adventure">Adventure</option>
          <option value="casual">Casual</option>
          <option value="fitness">Fitness</option>
          <option value="foodie">Foodie</option>
          <option value="game">Game Night</option>
          <option value="movie">Movie</option>
          <option value="nature">Nature</option>
          <option value="outdoor">Outdoor</option>
          <option value="romantic">Romantic</option>
          <option value="shopping">Shopping</option>
          <option value="sports">Sports</option>
          <option value="travel">Travel</option>
        </select>
      </div>

      <button
        type="submit"
        className="kawaii-button bg-primary text-white w-full hover:bg-primary-hover"
      >
        {submitLabel}
      </button>
    </form>
  );
};