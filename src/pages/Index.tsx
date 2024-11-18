import { useState, useEffect } from "react";
import { DateCard } from "@/components/DateCard";
import { DateForm } from "@/components/DateForm";
import { CategoryFilter } from "@/components/CategoryFilter";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface DateIdea {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  completed: boolean;
}

const Index = () => {
  const [dates, setDates] = useState<DateIdea[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editingDate, setEditingDate] = useState<DateIdea | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // Load dates from localStorage on initial render
  useEffect(() => {
    const savedDates = localStorage.getItem("datePlans");
    if (savedDates) {
      setDates(JSON.parse(savedDates));
    }
  }, []);

  // Save dates to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("datePlans", JSON.stringify(dates));
  }, [dates]);

  const handleAddDate = (date: Omit<DateIdea, "id" | "completed">) => {
    const newDate = {
      ...date,
      id: Date.now(),
      completed: false,
    };
    setDates([newDate, ...dates]);
    toast.success("New date idea added! 🎉");
  };

  const handleDeleteDate = (id: number) => {
    setDates(dates.filter(date => date.id !== id));
    toast.success("Date idea removed! 👋");
  };

  const handleEditDate = (date: DateIdea) => {
    setEditingDate(date);
    setIsEditDialogOpen(true);
  };

  const handleUpdateDate = (updatedDate: Omit<DateIdea, "id" | "completed">) => {
    if (editingDate) {
      const updatedDates = dates.map(date => 
        date.id === editingDate.id 
          ? { ...updatedDate, id: date.id, completed: date.completed }
          : date
      );
      setDates(updatedDates);
      setIsEditDialogOpen(false);
      setEditingDate(null);
      toast.success("Date idea updated! ✨");
    }
  };

  const handleToggleComplete = (id: number) => {
    const updatedDates = dates.map(date =>
      date.id === id ? { ...date, completed: !date.completed } : date
    );
    setDates(updatedDates);
    const date = updatedDates.find(d => d.id === id);
    toast.success(date?.completed ? "Date completed! 🎉" : "Date uncompleted! ↩️");
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
                  {...date}
                  onDelete={() => handleDeleteDate(date.id)}
                  onEdit={() => handleEditDate(date)}
                  onToggleComplete={() => handleToggleComplete(date.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Date Idea ✏️</DialogTitle>
          </DialogHeader>
          {editingDate && (
            <DateForm
              onSubmit={handleUpdateDate}
              initialValues={editingDate}
              submitLabel="Update Date Idea"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;