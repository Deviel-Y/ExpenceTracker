import { useState } from "react";
import ExpenceList, { Expence } from "./Components/ExpennceList";
import ExpenceFilter from "./Components/ExpenceFilter";
import ExpenceForm from "./Components/ExpenceForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expences, setExpences] = useState<Expence[]>([]);

  const visibleExpences = selectedCategory
    ? expences.filter((e) => e.category === selectedCategory)
    : expences;

  return (
    <>
      <ExpenceForm
        onSubmit={(newExpence) =>
          setExpences([...expences, { ...newExpence, id: expences.length + 1 }])
        }
      />
      <ExpenceFilter
        onSelectCategory={(category: string) => setSelectedCategory(category)}
      />
      <ExpenceList
        expences={visibleExpences}
        onDelete={(id) => setExpences(expences.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
