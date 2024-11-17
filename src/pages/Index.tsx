import { useState } from "react";
import { DateCard } from "@/components/DateCard";
import { DateForm } from "@/components/DateForm";
import { CategoryFilter } from "@/components/CategoryFilter";
import { toast } from "sonner";

interface DateIdea {
  id: number;
  title: string;
  description: string;
  category: string;
}

const Index = () => {
  const [dates, setDates] = useState<DateIdea[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleAddDate = (date: Omit<DateIdea, "id">) => {
    const newDate = {
      ...date,
      id: Date.now(),
    };
    setDates([newDate, ...dates]);
    toast.success("New date idea added! 🎉");
  };

  const filteredDates = dates.filter((date) =>
    selectedCategory === "all" ? true : date.category === selectedCategory
  );

  return (
    <div className="container py-8 px-4 max-w-5xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Cute Date Planner 💖
        </h1>
        <p className="text-kawaii-gray text-lg">
          Plan your perfect dates with a touch of cuteness!
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <DateForm onSubmit={handleAddDate} />
        </div>
        
        <div className="space-y-6">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          {filteredDates.length === 0 ? (
            <div className="kawaii-card text-center py-12">
              <p className="text-2xl mb-2">No dates yet! 🌸</p>
              <p className="text-kawaii-gray">
                Add your first date idea to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDates.map((date) => (
                <DateCard
                  key={date.id}
                  title={date.title}
                  description={date.description}
                  category={date.category}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;