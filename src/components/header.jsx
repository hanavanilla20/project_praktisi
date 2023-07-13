import Home from ".././view/home";
import about from "../view/makanan";
import contact from "../view/about";

function header() {
  return (
    <div className="">
      <div className="flex justify-between items-center top-0 left-0 right-0 py-4 px-11">
        <a className="text-7xl ml-2 text-orange-400 logoCN"> CN Food Blogger </a>
        <div className="inline-block text-2xl text-orange-400 list">
          <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/"> Home </a>
          <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/makanan"> Daftar Makanan </a>
          <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/about"> About Us </a>
        </div>
      </div>
      <hr className="border-zinc-50 navbar-hr"/>
      <hr className="border-zinc-50 navbar-hr"/>
      <hr className="border-zinc-50 navbar-hr"/>
    </div>
  );
}

export default header;
