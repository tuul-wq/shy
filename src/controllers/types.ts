import { createContext, Context } from 'react';

import { stores } from '@/store/types';
import KittyController from './kitty-controller';

export interface IControllersContextValue {
  todoController: KittyController;
}

export const ControllersContext = createContext<IControllersContextValue | null>(
  null,
) as Context<IControllersContextValue>;

export const controllers: IControllersContextValue = {
  todoController: new KittyController(stores.kittyStore),
  // todoController: new KittyController(
  //   stores.kittyStore
  //   // createTodoAPI('/todos'),
  // ),
};
