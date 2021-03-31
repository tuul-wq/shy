import { createContext, Context } from 'react';

import { stores } from '@/store/types';
import KittyController from './kitty-controller';
import WebWorker from '@/utils/web-worker?worker';

export interface IControllersContextValue {
  kittyController: KittyController;
}

export const ControllersContext = createContext<IControllersContextValue | null>(
  null,
) as Context<IControllersContextValue>;

export const controllers: IControllersContextValue = {
  kittyController: new KittyController(stores.kittyStore, new WebWorker()),
};
