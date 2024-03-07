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
    spacing between children : space-x-4 (no need flex trickes)
    display none : hidden , flex , grid ,block...
 





*/