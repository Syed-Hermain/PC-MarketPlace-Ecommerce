import { Link } from '@tanstack/react-router';
import { Heart, Plus, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { money, type Product } from '@/lib/products';
import { useStore } from './store-context';

export function ProductCard({ product }: { product: Product }) {
  const { add, cart, saved, toggleSaved } = useStore();
  return <article className="group min-w-0 border rounded-lg overflow-hidden bg-card">
    <div className="relative bg-photo">
      <Link to="/product/$id" params={{id:product.id}} className="block overflow-hidden"><img src={product.image} alt={product.name} width={512} height={512} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"/></Link>
      <span className={`absolute top-3 left-3 rounded px-2 py-1 text-[10px] font-bold ${product.condition==='Refurbished'?'bg-success-soft text-success':'bg-background text-foreground'}`}>{product.condition==='Refurbished'?'♻ Refurbished':'New'}</span>
      <Button variant="secondary" size="icon" className="absolute top-2 right-2 size-8 rounded-full" aria-label={`${saved.includes(product.id)?'Unsave':'Save'} ${product.name}`} title={saved.includes(product.id)?'Remove from saved':'Save product'} onClick={()=>toggleSaved(product.id)}><Heart className={saved.includes(product.id)?'fill-success text-success':'text-muted-foreground'}/></Button>
    </div>
    <div className="p-4"><p className="text-[10px] font-semibold text-muted-foreground mb-2">{product.brand}</p><Link to="/product/$id" params={{id:product.id}}><h3 className="text-sm sm:text-base font-semibold leading-snug min-h-10">{product.name}</h3></Link><p className="text-[11px] text-muted-foreground mt-1 truncate">{product.subtitle}</p><div className="flex gap-1 items-center text-xs mt-3"><Star className="size-3 fill-success text-success"/><span className="font-semibold">{product.rating}</span><span className="text-muted-foreground">({product.reviews})</span></div><div className="flex items-end justify-between mt-4 gap-2"><div><div className="flex items-baseline gap-2 flex-wrap"><span className="text-lg font-bold">{money(product.price)}</span><span className="text-xs line-through text-muted-foreground">{money(product.original)}</span></div><span className="text-[10px] text-success font-semibold">{Math.round((1-product.price/product.original)*100)}% below retail</span></div><Button variant="dark" size="icon" className="shrink-0 size-8" aria-label={`Add ${product.name} to cart`} title="Add to cart" onClick={()=>add(product.id)}>{cart[product.id]?<Check/>:<Plus/>}</Button></div></div>
  </article>;
}