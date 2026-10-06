import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ShieldCheck, Recycle, Wallet, ArrowUpRight, MemoryStick, Keyboard, Monitor, Sparkles, PanelsTopLeft, Fan } from 'lucide-react';
import banner from '@/assets/store-banner.jpg';
import { Button } from '@/components/ui/button';
import { Catalog } from '@/components/catalog';
import { categories, productMeta } from '@/lib/products';

export const Route = createFileRoute('/')({ head:()=>productMeta('PC components, without the premium','Shop affordable new and refurbished RAM, keyboards, monitors, RGB lighting and PC upgrade parts.'), component:Index });
const icons = [MemoryStick,Keyboard,Monitor,Sparkles,PanelsTopLeft,Fan];
function Index() {
  return <main>
    <section className="relative bg-ink overflow-hidden">
      <img src={banner} alt="Gaming PC with green lighting and visible internal components" width={1536} height={768} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover object-right opacity-55 sm:opacity-100"/>
      <div className="absolute inset-0 bg-ink/20"/>
      <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-16 min-h-[420px] flex items-center">
        <div className="max-w-lg text-inverse"><div className="flex gap-2 items-center text-[10px] font-semibold text-primary mb-5"><span className="size-1.5 rounded-full bg-primary"/> BUILT FOR BUILDERS. PRICED FOR EVERYONE.</div><h1 className="text-4xl sm:text-5xl font-semibold leading-[1.12]">PC components.<br/>Not premium prices.</h1><p className="text-sm text-on-dark leading-7 max-w-sm mt-5">Your next upgrade doesn't need to break the bank. Discover new and refurbished parts that work as hard as you do.</p><div className="flex gap-3 mt-7"><Button asChild size="lg" className="px-5"><Link to="/shop">Find your upgrade <ArrowRight/></Link></Button><Button asChild variant="heroOutline" size="lg" className="px-4"><Link to="/sell">Sell your parts <ArrowUpRight/></Link></Button></div><div className="mt-7 flex items-center gap-2 text-xs text-on-dark"><ShieldCheck className="size-4 text-primary"/>More value. Less e-waste. Zero compromises.</div></div>
      </div>
      <div className="absolute right-8 bottom-7 hidden lg:block border-l-2 border-primary pl-3 text-inverse"><p className="text-[10px] text-on-dark">YOUR NEXT BUILD STARTS HERE</p><p className="font-display text-sm mt-1">Made for the upgrade.</p></div>
    </section>
    <div className="border-b"><div className="max-w-[1320px] mx-auto px-5 sm:px-8 grid grid-cols-3 gap-4 py-5">{[{icon:ShieldCheck,title:'Condition, clearly stated',text:'Know what you’re getting'},{icon:Wallet,title:'Budget-friendly finds',text:'More performance for less'},{icon:Recycle,title:'A second life for hardware',text:'Upgrade with less waste'}].map(({icon:Icon,title,text})=><div key={title} className="flex items-center gap-3"><Icon className="text-success size-5 shrink-0 hidden sm:block"/><div><p className="text-[11px] sm:text-xs font-semibold">{title}</p><p className="text-[10px] text-muted-foreground mt-1 hidden sm:block">{text}</p></div></div>)}</div></div>
    <section className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-9"><div className="flex items-center justify-between mb-5"><h2 className="text-xl font-semibold">Every part of your build.</h2><span className="text-xs text-muted-foreground hidden sm:block">Pick your next upgrade</span></div><div className="grid grid-cols-3 md:grid-cols-6 gap-3">{categories.slice(1).map((category,index)=>{const Icon=icons[index];return <Link key={category} to="/shop" search={{category}} className="group border rounded-md px-2 py-5 flex flex-col items-center gap-3 hover:border-success hover:bg-success-soft transition-colors">{Icon&&<Icon className="size-6 text-muted-foreground group-hover:text-success"/>}<span className="text-xs text-center font-medium">{category}</span></Link>;})}</div></section>
    <Catalog compact/>
    <section className="bg-success-soft mt-14"><div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-10 flex flex-wrap justify-between items-center gap-6"><div className="flex gap-5 items-center"><Recycle className="size-10 text-success shrink-0"/><div><h2 className="text-2xl font-semibold">Your old parts. Someone’s next upgrade.</h2><p className="text-sm text-muted-foreground mt-2">Make space for your next build. Give good hardware a second life.</p></div></div><Button asChild variant="dark"><Link to="/sell">Start selling <ArrowUpRight/></Link></Button></div></section>
  </main>;
}