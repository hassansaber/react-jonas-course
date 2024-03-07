/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/*
Tailwind : 
  *arbitrary value  :  [2rem]  
    font size ex : text-[2rem]*

  Color:
    text color : text-yellow-500 
    background color : bg-stone-800

  Text-Style:
    font size ,
    line height : text-sm
    letter spacing : tracking-widest
    text transform uppercase : uppercase

  Box-Model,Spacing:
    margin : m-10 , mx-4 , mt-2 , mr-auto 
    padding : p-8
    border: border-b-4 border-stone-400
    spacing between children : space-x-4 (no need flex tricks)
    display none : hidden , flex , grid ,block...
 
  Responsive-Design:
    *mobile-first* : all classes without prefix ,are based on smallest screen
    @media (min-width: 640px) { ... } : sm    ex: sm:text-base
    Prefixes :
      sm: from 640px
      md: from 768px
      lg: from 1024px
      xl: from 1280px
      2xl: from 1536px
    Best approuch : first build for mobile devices (
      all screens below 640px  width
    )


    





*/