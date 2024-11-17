import { useState } from "react";
import { DateCard } from "@/components/DateCard";
import { DateForm } from "@/components/DateForm";
import { CategoryFilter } from "@/components/CategoryFilter";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DateIdea {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
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

  const handleDeleteDate = (id: number) => {
    setDates(dates.filter(date => date.id !== id));
    toast.success("Date idea removed! 👋");
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
          <div className="flex justify-between items-center">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <span className="text-sm text-kawaii-gray">
              Total dates: {filteredDates.length}
            </span>
          </div>
          
          <ScrollArea className="h-[600px] rounded-md border p-4">
            {filteredDates.length === 0 ? (
              <div className="kawaii-card text-center py-12">
                {dates.length === 0 ? (
                  <>
                    <p className="text-2xl mb-2">No dates yet! 🌸</p>
                    <p className="text-kawaii-gray">
                      Add your first date idea to get started!
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-2xl mb-2">No dates found in this category 🔍</p>
                    <p className="text-kawaii-gray">
                      Try selecting a different category or add a new date idea!
                    </p>
                  </>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredDates.map((date) => (
                  <DateCard
                    key={date.id}
                    title={date.title}
                    description={date.description}
                    category={date.category}
                    date={date.date}
                    time={date.time}
                    location={date.location}
                    onDelete={() => handleDeleteDate(date.id)}
                  />
                ))}
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Index;