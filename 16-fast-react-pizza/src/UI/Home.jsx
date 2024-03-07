function Home() {
  return (
    <div>
      <h1 className=" text-center text-xl font-semibold text-stone-800">
        The best pizza.
        <br />
        <span className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
    </div>
  );
}

export default Home;

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
