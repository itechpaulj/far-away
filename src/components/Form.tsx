import { FormEvent, useState } from "react";
import { AddItem } from "../App";

// validation number
type Num = Number;
const initIsNumeric: Num = 0;

type Str = String;
const initIsStrin: Str = "";

interface FormElem extends HTMLFormControlsCollection {
  quantity: HTMLInputElement;
  description: HTMLInputElement;
}

interface SubmitForm extends HTMLFormElement {
  readonly elements: FormElem;
}

type FormProps = {
  onHandleSubmit(add: AddItem): void;
};

function Form({ onHandleSubmit }: FormProps) {
  const [quantity, setQuantity] = useState<Num>(initIsNumeric);
  const [description, setDescription] = useState<Str>(initIsStrin);

  function handleSubmit(e: FormEvent<SubmitForm>) {
    e.preventDefault();

    const target = e.currentTarget.elements;

    const quantity = target.quantity.value;
    const description = target.description.value;

    if (!description) return;

    const newItem = {
      id: +Date.now(),
      description: description,
      quantity: +quantity,
      packed: false,
    };

    onHandleSubmit(newItem);
    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need your 🥰 trip?</h3>
      <select
        id="quantity"
        value={Number(quantity)}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, function (_, i) {
          return +i + 1;
        }).map(function (num: Number) {
          return (
            <option value={Number(num)} key={Number(num)}>
              {Number(num)}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        id="description"
        value={`${description}`}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}

export default Form;
