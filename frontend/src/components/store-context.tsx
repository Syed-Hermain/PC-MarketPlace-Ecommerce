import { createContext, useContext, useState, type ReactNode } from 'react';

type Store = {
  cart: Record<string, number>; saved: string[]; add: (id: string, quantity?: number) => void;
  update: (id: string, quantity: number) => void; toggleSaved: (id: string) => void;
};
const StoreContext = createContext<Store | null>(null);
export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [saved, setSaved] = useState<string[]>([]);
  const update = (id: string, quantity: number) => setCart(current => {
    const next = { ...current };
    if (quantity <= 0) delete next[id]; else next[id] = Math.min(quantity, 10);
    return next;
  });
  return <StoreContext.Provider value={{ cart, saved, update,
    add: (id, quantity = 1) => setCart(current => ({ ...current, [id]: Math.min((current[id] || 0) + quantity, 10) })),
    toggleSaved: id => setSaved(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]),
  }}>{children}</StoreContext.Provider>;
}
export function useStore() {
  const store = useContext(StoreContext);
  if (!store) throw new Error('StoreProvider is required');
  return store;
}