
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'], 
  subsets: ['latin'], 
  display: 'swap' // Optional: for better font loading performance
});
