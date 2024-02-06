import { createAction } from '@reduxjs/toolkit';
import { createItem, removeItem, updateItem } from '../data';
import { ActionType } from '../types';

export const add = createAction(ActionType.Add, (name: string) => ({
  payload: { name },
}));

export const update = createAction(
  ActionType.Update,
  (id: string, properties: Partial<Item>) => {
    return { payload: { id, ...properties } };
  },
);

export const remove = createAction(ActionType.Remove, (id: string) => ({
  payload: { id },
}));

export const markAllAsUnpacked = createAction(ActionType.MarkAllAsUnpacked);

export type Action =
  | ReturnType<typeof add>
  | ReturnType<typeof update>
  | ReturnType<typeof remove>
  | ReturnType<typeof markAllAsUnpacked>;

export const reducer = (items: Item[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.Add: {
      const item = createItem(action.payload.name);
      return [...items, item];
    }
    case ActionType.Update: {
      const { id, ...properties } = action.payload;
      return updateItem(items, id, properties);
    }
    case ActionType.Remove: {
      return removeItem(items, action.payload.id);
    }
    case ActionType.MarkAllAsUnpacked: {
      return items.map((item) => ({ ...item, packed: false }));
    }
    default:
      return items;
  }
};

//   if (action.type === add.type) {
//     const item = createItem(action.payload.name);
//     return [...items, item];
//   }

//   if (action.type === update.type) {
//     const { id, ...properties } = action.payload;
//     return updateItem(items, id, properties);
//   }

//   if (action.type === remove.type) {
//     return removeItem(items, action.payload.id);
//   }

//   if (action.type === markAllAsUnpacked.type) {
//     return items.map((item) => ({ ...item, packed: false }));
//   }

//   return items;
