import { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpRight, X } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { products, categories } from '@/lib/products';
import { ProductCard } from './product-card';
import { Button } from './ui/button';
import { useStore } from './store-context';

export function Catalog({ compact = false, initialCategory = 'All components', initialCondition = 'All', initialQuery = '' }: { compact?: boolean; initialCategory?: string; initialCondition?: string; initialQuery?: string }) {
  const [category, setCategory] = useState(initialCategory);
  const [condition, setCondition] = useState(initialCondition);
  const [query,setQuery] = useState(initialQuery);
  const [sort,setSort] = useState('featured');
  const [filters,setFilters] = useState(false);
  const [budget,setBudget] = useState('all');
  const [onlySaved,setOnlySaved] = useState(false);
  const {saved} = useStore();
  const filtered = products.filter(p=>(category==='All components'||p.category===category)&&(condition==='All'||p.condition===condition)&&(`${p.name} ${p.brand} ${p.category} ${p.subtitle}`.toLowerCase().includes(query.toLowerCase()))&&(budget==='all'||p.price<=Number(budget))&&(!onlySaved||saved.includes(p.id))).sort((a,b)=>sort==='low'?a.price-b.price:sort==='high'?b.price-a.price:sort==='rating'?b.rating-a.rating:0);
  return <section className="mx-auto max-w-[1320px] px-5 sm:px-8 pt-10" id="catalog">
    <div className="flex items-start justify-between gap-4"><div><p className="text-success text-[11px] font-semibold uppercase mb-2">{compact?'THE GOOD STUFF':'FIND YOUR NEXT UPGRADE'}</p><h2 className="text-2xl sm:text-3xl font-semibold">{compact?'Small prices. Big upgrades.':'Shop PC components'}</h2><p className="text-sm text-muted-foreground mt-2">{compact?'Fresh finds for your next build.':'New and refurbished hardware, all in one place.'}</p></div>{compact&&<Link to="/shop" className="text-xs sm:text-sm font-semibold flex items-center gap-2 mt-7 whitespace-nowrap">Shop all <ArrowUpRight className="size-4"/></Link>}</div>
    <div className="flex flex-wrap items-center justify-between gap-4 border-b mt-7 pb-4"><div className="flex bg-secondary rounded-md p-1">{['All','New','Refurbished'].map(c=><Button key={c} size="sm" variant={c===condition?'dark':'ghost'} onClick={()=>setCondition(c)} aria-pressed={c===condition}>{c==='All'?'All products':c}</Button>)}</div><div className="flex items-center gap-3"><Button variant="outline" size="sm" onClick={()=>setFilters(!filters)} aria-expanded={filters}><SlidersHorizontal/>Filters</Button><select aria-label="Sort products" className="bg-background outline-none text-xs py-2 max-w-40" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Sort: Featured</option><option value="low">Price: Low to high</option><option value="high">Price: High to low</option><option value="rating">Top rated</option></select></div></div>
    {filters&&<div className="flex flex-wrap gap-5 py-5 border-b items-end"><label className="text-xs flex flex-col gap-2">Category<select value={category} onChange={e=>setCategory(e.target.value)} className="border rounded-md p-2 bg-background">{categories.map(c=><option key={c}>{c}</option>)}</select></label><label className="text-xs flex flex-col gap-2">Price<select value={budget} onChange={e=>setBudget(e.target.value)} className="border rounded-md p-2 bg-background"><option value="all">Any price</option><option value="1000">Under ₹1,000</option><option value="3000">Under ₹3,000</option><option value="5000">Under ₹5,000</option></select></label><label className="text-xs flex gap-2 items-center pb-2"><input type="checkbox" checked={onlySaved} onChange={e=>setOnlySaved(e.target.checked)} className="accent-success"/>Saved products only</label><Button variant="ghost" size="sm" onClick={()=>{setCategory('All components');setBudget('all');setOnlySaved(false);setCondition('All');setQuery('');}}><X/>Reset</Button></div>}
    {!compact&&<div className="flex items-center border rounded-md max-w-md px-3 mt-5 gap-2"><Search className="size-4 text-muted-foreground"/><input aria-label="Search catalog" className="w-full py-2.5 outline-none bg-transparent text-sm" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products or brands"/></div>}
    <div className="flex justify-between mt-5 mb-4 text-xs text-muted-foreground"><span>{filtered.length} products {category!=='All components'&&`· ${category}`}</span><span>New possibilities. Less waste.</span></div>
    {filtered.length ? <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">{filtered.map(p=><ProductCard product={p} key={p.id}/>)}</div> : <div className="py-16 text-center bg-secondary"><Search className="mx-auto size-8 text-muted-foreground"/><h3 className="mt-4 text-lg font-semibold">No matching components</h3><p className="text-muted-foreground text-sm mt-2">Try another search or clear your filters.</p><Button className="mt-5" onClick={()=>{setQuery('');setCategory('All components');setCondition('All');setBudget('all');setOnlySaved(false);}}>Clear filters</Button></div>}
  </section>;
}