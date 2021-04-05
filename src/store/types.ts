import { Context, createContext } from 'react';

import KittyStore, { KittyStoreType } from './kitty-store';

export interface IStoresContextValue {
  kittyStore: KittyStoreType;
}

export const StoresContext = createContext<IStoresContextValue | null>(
  null
) as Context<IStoresContextValue>;

export const stores: IStoresContextValue = {
  kittyStore: new KittyStore(),
};
