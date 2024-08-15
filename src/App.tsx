import "./App.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import Statistics from "./components/Statistics";
export interface AddItem {
  id: Number;
  description: String;
  quantity: Number;
  packed: boolean;
}

export type IsToggleIdNumber = Number;

// const initialItems: AddItem[] = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function App() {
  let items: AddItem[] = [];

  const [addItems, setItems] = useState<AddItem[]>(items);

  function handleAddItem(add: AddItem): void {
    setItems((item) => [...item, add]);
  }

  function onToggleItem(isToggleId: IsToggleIdNumber): void {
    setItems((items) =>
      items.map((item) => {
        return item.id === isToggleId
          ? {
              id: item.id,
              description: item.description,
              quantity: item.quantity,
              packed: !item.packed,
            }
          : item;
      })
    );
  }

  function onDeleteItem(isToggleId: IsToggleIdNumber): void {
    setItems((items) => items.filter((item) => item.id !== isToggleId));
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleSubmit={handleAddItem} />
      <PackagingList
        setItems={addItems}
        onToggleItem={onToggleItem}
        onDeleteItem={onDeleteItem}
      />
      <Statistics addItems={addItems} />
    </div>
  );
}

export default App;
