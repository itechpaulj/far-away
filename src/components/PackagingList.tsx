import { AddItem, IsToggleIdNumber } from "../App";
import Item from "./Item";

export interface PackList {
  setItems: AddItem[];
  onToggleItem(id: IsToggleIdNumber): void;
  onDeleteItem(id: IsToggleIdNumber): void;
}

function PackagingList({ setItems, onToggleItem, onDeleteItem }: PackList) {
  return (
    <div className="list">
      <ul>
        {setItems.map((item: AddItem) => (
          <Item
            item={item}
            onToggleItem={() => onToggleItem(+item.id)}
            onDeleteItem={() => onDeleteItem(+item.id)}
            key={Number(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackagingList;
