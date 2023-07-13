import BikaAmbon from './bikaAmbon.jpg';
import '.././App.css';

function App() {
  return (
    <div>
      <div className="mt-20 col-img">
        <img src={BikaAmbon} alt=""></img>
      </div>

      <div className="header-sr">
        <h1 className="text-4xl text-amber-400"> Sejarah dan Resep
        <span className="text-orange-500"> Bika Ambon </span> </h1>
      </div>

      <div className=" text-1xl text-amber-400 content-header-sba">
        <hr/>
        <br/>
        <div className="text-2xl text-center"><b> Sejarah </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
          Bika ambon merupakan salah satu makanan khas Medan, Sumatra Utara. Kudapan jenis ini kerap menjadi buah tangan 
          atau oleh-oleh andalan para wisatawan. Bika ambon merupakan kue basah yang terkenal dengan warna kuning dan 
          berongga di dalamnya. Kue ini juga memiliki rasa dan aroma yang khas sehingga membuat orang ketagihan untuk 
          memakannya. <br/>
          <br/>
          Kue bika ambon adalah hasil modifikasi dari bika khas Melayu, yang ditambahkan nira atau tuak enau sebagai 
          pengembang. Dulu, pada tahun 1980-an di Jalan Majapahit di kota Medan, banyak dijual kue bika ambon. Kuliner 
          Medan ini dulunya disantap bersama dengan es krim pada 1970-an. Sementara menurut sumber lainnya,istilah bika 
          dan bibingka diperkenalkan oleh Portugis. <br/>
          <br/>
          Istilah ini pada mulanya berarti adalah kue yang terbuat dari tepung beras. Selain cerita asal-usul bika ambon 
          di atasa, ada juga beberapa cerita sejarah mengenai keberadaan bika ambon di tanah Medan.
        </p>
        <br/>
       </div>
       
      <div className="text-1xl text-yellow-500 text-left content-header-sba1">
        <br/>      
          <hr/>
          <br/>
        <div className="text-2xl text-center"><b> Cara Membuat Bika Ambon </b></div>
            <br/>
            <hr/>
            <br/>
            <p>
            Bahan: <br/>
            - 250 gram tepung terigu <br/>
            - 200 gram tepung sagu <br/>
            - 250 ml santan <br/>
            - 200 gram gula pasir <br/>
            - 6 butir telur <br/>
            - 1 sendok teh ragi instan <br/>
            - 1 sendok teh pasta pandan <br/>
            - 1/2 sendok teh vanila <br/>
            - 1/4 sendok teh garam <br/>
            - Air daun pandan secukupnya (opsional) <br/>
            - Minyak untuk melumuri loyang <br/>
            </p>
        </div>
       <div className="text-1xl text-yellow-500 text-left content-header-sba2">
        <p>
            Cara membuat: <br/>
            1. Campurkan tepung terigu, tepung sagu, dan garam dalam sebuah wadah. Aduk rata dan sisihkan. <br/>
            2. Dalam wadah terpisah, kocok telur dan gula pasir hingga larut dan gula larut sepenuhnya. <br/>
            3. Tambahkan santan sedikit-sedikit sambil terus diaduk hingga tercampur rata. <br/>
            4. Masukkan campuran tepung terigu, tepung sagu, dan garam ke dalam adonan telur secara bertahap sambil terus 
            diaduk hingga adonan menjadi lembut dan tidak bergerindil. <br/>
            5. Tambahkan ragi instan, pasta pandan, dan vanila ke dalam adonan. Aduk rata. <br/>
            6. Tutup adonan dengan kain bersih dan diamkan selama sekitar 1-2 jam hingga adonan mengembang dan berbuih. <br/>
            7. Siapkan loyang bundar dengan diameter sekitar 20-22 cm. Olesi loyang dengan minyak secara merata. <br/>
            8. Jika menggunakan air daun pandan, tuangkan air daun pandan ke dalam loyang sebelum memasukkan adonan. Ini 
            akan memberikan aroma pandan yang khas pada Bika Ambon. <br/>
            9. Panaskan oven dengan suhu 180 derajat Celsius. <br/>
            10. Tuangkan adonan ke dalam loyang yang sudah dipersiapkan, ratakan permukaannya. <br/>
            11. Panggang Bika Ambon dalam oven selama sekitar 45-50 menit atau hingga bagian atasnya kecokelatan dan 
            matang. Pastikan Bika Ambon matang dengan menggunakan tusuk gigi, tusukkan tusuk gigi ke dalam kue, jika 
            tidak ada adonan yang menempel berarti sudah matang. <br/>
            12. Setelah matang, keluarkan dari oven dan biarkan dingin sebentar sebelum dikeluarkan dari loyang. <br/>
            13. Potong-potong Bika Ambon sesuai dengan selera dan hidangkan. <br/>
        </p>
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
  </div>
  );
}

export default App;
