import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 text-center sm:my-6 ">
      <h1 className="mb-8  text-xl font-semibold text-stone-800">
        The best pizza.
        <br />
        <span className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
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
