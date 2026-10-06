import { createFileRoute } from '@tanstack/react-router';
import { Catalog } from '@/components/catalog';
import { productMeta } from '@/lib/products';
export const Route = createFileRoute('/shop')({
  validateSearch: (search: Record<string, unknown>): {q?:string | undefined;category?:string | undefined;condition?:string | undefined} => ({q:typeof search['q']==='string'?search['q']:undefined,category:typeof search['category']==='string'?search['category']:undefined,condition:typeof search['condition']==='string'?search['condition']:undefined}),
  head:()=>productMeta('Shop new & refurbished hardware','Browse the Partswap sample catalog of PC memory, keyboards, displays, lighting, cases and cooling.'), component:Shop,
});
function Shop(){const search=Route.useSearch();return <main><Catalog key={JSON.stringify(search)} initialCategory={search['category']||'All components'} initialCondition={search['condition']||'All'} initialQuery={search['q']||''}/></main>;}