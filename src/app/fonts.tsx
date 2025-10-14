// app/fonts.ts

import { Inter, DM_Sans, DM_Mono, DM_Serif_Display } from 'next/font/google';

// Define the Inter font for body text
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // CSS variable
});

// Define the DM Sans font for headings
export const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '700'], // Medium and Bold
  display: 'swap',
  variable: '--font-dm-sans', // CSS variable
});

// Define DM Mono for code
export const dm_mono = DM_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-dm-mono', // CSS variable
});

// Define DM Serif Display for long-form text
export const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-dm-serif-display', // CSS variable
});