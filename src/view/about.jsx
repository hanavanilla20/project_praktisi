import nurul from "./nuwrullsss.jpg";
import sijey from "./sijeyyyyy.jpg";
import ".././App.css";
import _header from "../components/header"

function contact() {
  return (
    <div className="App">
      <h1 className="text-3xl font-semibold mt-9"> About Us </h1>
      <div className="text-lg flex mx-32 my-10">
        <img src={nurul} alt="" className="w-60 h-60 rounded-full" />

        <p className="ml-16 mt-28 text-justify about">
          Halo, nama saya adalah Nurul Hasanah. Saya merupakan mahasiswa Politeknik Negeri Jakarta 
          jurusan Teknik Informatika dan Komputer dengan prodi Teknik Informatika.
          Saya juga merupakan orang yang cukup friendly dan humble. Saya juga menyukai hal baru dan 
          cepat dalam mempelajari hal baru tersebut.
        </p>
      </div>
      <hr/>
      <div className="text-lg flex mx-32 my-14">
        <p className="mr-16 mt-14 text-justify">
        Halo, nama saya adalah Allia Chyanda Putri, tapi saya biasa dikenal dengan Sijey. Saya merupakan 
        mahasiswa Politeknik Negeri Jakarta jurusan Teknik Informatika dan Komputer prodi Teknik Informatika. 
        Saya merupakan orang yang jarang bersosialisasi di kampus tapi saya sebenarnya orang yang cukup bisa 
        untuk mencairkan suasana. Saya tipikal orang yang memiliki kesibukan diluar kampus, jadi saya lumayan 
        kupu-kupu, alisa kuliah pulang - kuliah pulang hehehe.
        </p>
        <img src={sijey} alt="" className="w-60 rounded-full" />
      </div>
      <br/>
      <hr/>
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

export default contact;
