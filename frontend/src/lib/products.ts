import ram from '@/assets/ram.jpg';
import keyboard from '@/assets/keyboard.jpg';
import monitor from '@/assets/monitor.jpg';
import rgb from '@/assets/rgb.jpg';
import bezel from '@/assets/bezel.jpg';
import cooler from '@/assets/cooler.jpg';

export type Product = {
  id: string; name: string; brand: string; category: string; condition: 'New' | 'Refurbished';
  price: number; original: number; image: string; rating: number; reviews: number; subtitle: string;
  specs: Record<string, string>;
};
export const categories = ['All components', 'RAM & Memory', 'Keyboards', 'Monitors', 'RGB Lighting', 'Bezels & Cases', 'Cooling'];
export const products: Product[] = [
  { id: 'vengeance-16gb', name: 'Vengeance LPX 16GB DDR4', brand: 'CORSAIR', category: 'RAM & Memory', condition: 'Refurbished', price: 2499, original: 4299, image: ram, rating: 4.8, reviews: 124, subtitle: '2 × 8GB · 3200MHz · CL16', specs: {Capacity:'16GB (2 × 8GB)', Type:'DDR4', Speed:'3200MHz', Latency:'CL16', Compatibility:'DDR4 desktop motherboards'} },
  { id: 'keychron-k6', name: 'K6 Wireless Mechanical Keyboard', brand: 'KEYCHRON', category: 'Keyboards', condition: 'New', price: 3499, original: 5999, image: keyboard, rating: 4.9, reviews: 86, subtitle: '65% layout · Hot-swappable · RGB', specs: {Layout:'65% compact', Switches:'Mechanical linear', Connection:'Bluetooth / USB-C', Backlight:'RGB', Compatibility:'Windows, macOS, Linux'} },
  { id: 'ultragear-24', name: 'UltraGear 24” Gaming Monitor', brand: 'LG', category: 'Monitors', condition: 'Refurbished', price: 7999, original: 13999, image: monitor, rating: 4.7, reviews: 62, subtitle: 'Full HD · 144Hz · IPS panel', specs: {Size:'24 inches', Resolution:'1920 × 1080', Refresh:'144Hz', Panel:'IPS', Ports:'HDMI, DisplayPort'} },
  { id: 'argb-strip', name: 'Addressable RGB LED Strip Kit', brand: 'DEEPCOOL', category: 'RGB Lighting', condition: 'New', price: 699, original: 1299, image: rgb, rating: 4.6, reviews: 49, subtitle: '2 × 40cm · 5V ARGB · Magnetic', specs: {Length:'2 × 40cm', Connection:'5V 3-pin ARGB', Mount:'Magnetic / adhesive', Included:'Two strips and connector', Compatibility:'5V ARGB headers only'} },
  { id: 'airflow-bezel', name: 'Airflow Mesh Front Panel', brand: 'ANT ESPORTS', category: 'Bezels & Cases', condition: 'Refurbished', price: 499, original: 999, image: bezel, rating: 4.5, reviews: 31, subtitle: 'Mid-tower · Mesh intake · Black', specs: {Material:'ABS and steel mesh', Color:'Black', Mount:'Clip-in', Size:'Mid-tower', Compatibility:'Check case dimensions before purchase'} },
  { id: 'ak400-cooler', name: 'AK400 Performance CPU Cooler', brand: 'DEEPCOOL', category: 'Cooling', condition: 'New', price: 1899, original: 2899, image: cooler, rating: 4.8, reviews: 78, subtitle: '120mm fan · 4 heatpipes · Quiet', specs: {Fan:'120mm PWM', Heatpipes:'4 copper heatpipes', Height:'155mm', Socket:'Intel LGA1700 / AMD AM4, AM5', Type:'Single-tower air cooler'} },
];
export const money = (value: number) => `₹${value.toLocaleString('en-IN')}`;
export function productMeta(title: string, description: string) {
  return { meta: [{ title: `${title} — Partswap` }, { name:'description',content:description }, { property:'og:title',content:`${title} — Partswap` }, { property:'og:description',content:description }, { property:'og:type',content:'website' }, { name:'twitter:card',content:'summary_large_image' }] };
}