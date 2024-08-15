import { AddItem, IsToggleIdNumber } from "../App";

export type LiItems = {
  item: AddItem;
  onToggleItem(id: IsToggleIdNumber): void;
  onDeleteItem(id: IsToggleIdNumber): void;
};

function Item({ item, onToggleItem, onDeleteItem }: LiItems) {
  return (
    <li>
      <input
        type="checkbox"
        value={`${item.packed}`}
        onChange={() => onToggleItem(+item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {Number(item.quantity)} {item.description}
      </span>
      <button onClick={() => onDeleteItem(+item.quantity)}>❌</button>
    </li>
  );
}
export default Item;
