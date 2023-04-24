import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  FILTER_SERVICE,
} from '../actionTypes';

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

let itemsCopy = initialState;

export default function serviceListReducer(items = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      let newItem = { id: nanoid(), name, price: Number(price) };
      itemsCopy = [...itemsCopy, newItem];
      return [...items, newItem];

    case REMOVE_SERVICE:
      let { id } = action.payload;
      let currentItems = items.filter((service) => service.id !== id);
      itemsCopy = itemsCopy.filter((service) => service.id !== id);
      return currentItems;

    case EDIT_SERVICE:
      let { newName, newPrice } = action.payload;
      let localItems = [...items];
      let itemIndex = items.findIndex(
        (service) => service.id === action.payload.id
      );
      let item = localItems[itemIndex];

      item.name = newName;
      item.price = Number(newPrice);

      return localItems;

    case FILTER_SERVICE:
      let { nameFilter } = action.payload;
      if (nameFilter && nameFilter !== '') {
        return itemsCopy.filter((x) => x.name.includes(nameFilter));
      }
      return itemsCopy;

    default:
      return items;
  }
}
