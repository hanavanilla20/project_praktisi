import jpg from "./A.jpg";

function makanan() {
  return (
    <div className="Poppins">
    <div className="col-img">
      <img src={jpg} alt="" />
    </div>

      <div className="text-4xl text-amber-300 header-dm">
        <h1> Daftar <span> Makanan </span> </h1>
      </div>

      <div className="content-header-hr">
        <br/>
        <hr/>
      </div>

      <div className=" text-1xl text content-header-dm">
        <b><h1> Berikut adalah makanan yang menurut kami wajib untuk cobain nih! </h1></b>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/rendang"> 1. Rendang </a> <br/>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/pempek"> 2. Pempek </a> <br/>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/kerakTelor"> 3. Kerak Telor </a> <br/>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/gudeg"> 4. Gudeg </a> <br/>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/papeda"> 5. Papeda Kuah Ikan Kuning </a> <br/>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/bikaAmbon"> 6. Bika Ambon </a> <br/>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/ayamBetutu"> 7. Ayam Betutu </a> <br/>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/mieAceh"> 8. Mie Aceh </a> <br/>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/ayamTaliwang"> 9. Ayam Taliwang </a> <br/>
        <a className="mx-4 hover:text-amber-300 transition-colors duration-300" href="/rujakCingur"> 10. Rujak Cingur </a> <br/>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>
      <div className="m-11 p-10 bg-orange-400 rounded-xl">
            <p className="text-center text-black text-3xl font-bold"> Contact Us </p>
            <p className="text-center text-gray-900 pt-5"> 
                Nurul Hasanah +62 838 9708 8438 <br/>
                Alliya Chyanda Putri +62 878 8316 1052
            </p>
        </div>
    </div>
  );
}

export default makanan;
