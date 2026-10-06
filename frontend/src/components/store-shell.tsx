import { Link, useNavigate } from '@tanstack/react-router';
import { Search, ShoppingBag, ArrowUpRight, Menu, X, Cpu } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useStore } from './store-context';
import { categories } from '@/lib/products';

export function StoreShell({ children }: { children: ReactNode }) {
  const { cart } = useStore();
  const count = Object.values(cart).reduce((a,b) => a+b, 0);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return <div className="min-h-screen">
    <div className="bg-ink text-on-dark py-2 text-center text-[11px] sm:text-xs">Good parts. Better prices. <span className="text-primary">A smarter way to upgrade.</span></div>
    <header className="border-b bg-background">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 flex items-center gap-5 py-5">
        <Link to="/" className="font-display text-2xl font-bold flex items-center gap-2 shrink-0" aria-label="Partswap home"><Cpu className="size-7"/>partswap<span className="text-success">.</span></Link>
        <form className="hidden sm:flex flex-1 max-w-xl mx-auto" onSubmit={e => {e.preventDefault();navigate({to:'/shop', search:{q:search}});}}>
          <div className="flex items-center bg-secondary rounded-md px-3 gap-3 w-full border border-transparent focus-within:border-ring"><Search className="size-4 text-muted-foreground"/><input aria-label="Search components" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search for your next upgrade…" className="w-full py-3 text-sm bg-transparent outline-none"/><span className="text-[10px] text-muted-foreground hidden lg:block whitespace-nowrap">PC PARTS & MORE</span></div>
        </form>
        <div className="ml-auto flex items-center gap-3 sm:gap-6">
          <Link to="/sell" className="hidden lg:flex items-center gap-1.5 text-sm font-semibold">Sell your parts <ArrowUpRight className="size-4"/></Link>
          <Button asChild variant="ghost" className="gap-2" aria-label={`Shopping cart, ${count} items`}><Link to="/cart"><ShoppingBag className="size-5"/><span className="hidden md:inline">Cart</span><span className="bg-primary text-primary-foreground rounded-full size-5 grid place-items-center text-xs">{count}</span></Link></Button>
          <Button variant="ghost" size="icon" className="sm:hidden" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'}>{open?<X/>:<Menu/>}</Button>
        </div>
      </div>
      <nav className="hidden sm:flex mx-auto max-w-[1320px] px-8 pb-4 gap-7 overflow-x-auto text-xs font-medium">
        {categories.map(category=><Link key={category} to="/shop" search={{category:category==='All components'?undefined:category}} className="whitespace-nowrap hover:text-success">{category}</Link>)}
        <Link to="/shop" search={{condition:'Refurbished'}} className="ml-auto text-success whitespace-nowrap flex gap-1.5 items-center"><span className="size-1.5 rounded-full bg-success self-center"/>Refurbished finds</Link>
      </nav>
      {open && <div className="sm:hidden px-5 pb-5 flex flex-col gap-4"><form onSubmit={e=>{e.preventDefault();navigate({to:'/shop',search:{q:search}});setOpen(false);}}><input aria-label="Mobile search components" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search components…" className="w-full rounded-md bg-secondary p-3 text-sm"/></form>{categories.map(category=><Link onClick={()=>setOpen(false)} key={category} to="/shop" search={{category}} className="text-sm">{category}</Link>)}<Link to="/sell" onClick={()=>setOpen(false)}>Sell your parts</Link></div>}
    </header>
    {children}
    <footer className="border-t bg-secondary mt-16"><div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-10 flex flex-wrap justify-between gap-8"><div><Link to="/" className="font-display text-2xl font-bold">partswap.</Link><p className="mt-2 text-sm text-muted-foreground">Better hardware. A smaller footprint.</p></div><div className="flex flex-wrap gap-6 text-sm"><Link to="/shop">Shop components</Link><Link to="/shop" search={{condition:'Refurbished'}}>Refurbished</Link><Link to="/sell">Sell your parts</Link><Link to="/cart">Your cart</Link></div></div><div className="max-w-[1320px] mx-auto border-t px-5 sm:px-8 py-5 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground"><span>© 2026 Partswap</span><span>Sample catalog · Prices and listings are illustrative</span></div></footer>
  </div>;
}