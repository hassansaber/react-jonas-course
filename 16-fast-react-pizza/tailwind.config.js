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
Tailwind Setup 
1) tailwind config on Doc
2) tailwind extension 
3) npm install -D prettier prettier-plugin-tailwindcss
4) config 3  based on Doc 
 prettier.config.js  =>>> prettier.config.cjs
  module.exports = {
    tailwindConfig: './styles/tailwind.config.js',
  }

*/




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
    Best-approach :
     first build for mobile devices (
      all screens below 640px  width
      ) and then use custom breakpoints based on devices(
        // 'tablet': '640px',@media (min-width: 640px) { ... } sm
        // 'laptop': '1024px',@media (min-width: 1024px) { ... } lg
        // 'desktop': '1280px',@media (min-width: 1280px) { ... }} xl
      // )

  Flex Layout:
    flex
    horizontal (right ot left): justify-between
    vertical (top to bottom): items-center

  Grid Layout:
    *useful for overall page layout*
    grid
    grid-cols-3
    grid-rows-[auto_1fr_auto]
    for child (page content)(
      overflow-scroll  //make main content scroll
      max-w-3xl //free sides of content in big screens
      mx-auto //set content at middle
      )

  Button States & Transitions:
    States: hover , active , disabled ...
    ex : (
      **color**
        bg-yellow-400
        text-stone-800
      **text**
        font-semibold 
        tracking-wide
        uppercase
      **spacing**
      inline-block
        px-4
        py-3
        rounded-full
      **animation**
        transition-colors //all => for all css properties
        duration-300
      **states**
        hover:bg-yellow-300
        focus:bg-yellow-300
        focus:outline-none //disable default style 
        focus:ring // new style (for tailwind)
        focus:ring-yellow-300
        focus:ring-offset-2 // space between element and newStyle(ring)
        disabled:cursor-not-allowed
    )


  Form Inputs:
    ex: (
           w-28 rounded-full bg-yellow-100 px-4
         py-2 text-sm transition-all duration-300
          placeholder:text-stone-400 focus:outline-none 
          focus:ring focus:ring-yellow-500 
         focus:ring-opacity-50 sm:w-64 sm:focus:w-72
         ) 
    *do not set margins for each input*
    accent-yellow-400 //background of checkbox

  Reuse Style with apply:
      *DO NOT use it as possible*
      because it is not what tailwind gives us, it goes back to css
    layer - apply (inside index.css)


*/