import Papeda from './papeda.jpg';
import '.././App.css';

function App() {
  return (
    <div>
      <div className="mt-20 col-img">
        <img src={Papeda} alt=""></img>
      </div>

      <div className="header-sr">
        <h1 className="text-4xl text-amber-400"> Sejarah dan Resep <br/>
        <span className="text-orange-500"> Papeda Kuah Ikan Kuning </span> </h1>
      </div>

      <div className=" text-1xl text-amber-400 content-header-spk">
        <hr/>
        <br/>
        <div className="text-2xl text-center"><b> Sejarah </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
          Papeda kuah ikan kuning atau juga dikenal sebagai papeda adalah hidangan tradisional dari Papua, Indonesia. 
          Papeda adalah bubur sagu yang terbuat dari tepung sagu yang diolah dari pohon sagu, yang merupakan sumber 
          karbohidrat utama di Papua. <br/>
          <br/>
          Sejarah papeda itu sendiri berakar pada budaya dan kehidupan masyarakat asli Papua yang telah lama mengkonsumsi 
          sagu sebagai makanan pokok mereka. Proses pembuatan papeda melibatkan pengolahan tepung sagu yang dihasilkan 
          dari batang pohon sagu. Batang pohon sagu dikupas kulitnya, kemudian dagingnya diperas hingga terpisah menjadi 
          air sagu dan serat kasar. Air sagu tersebut kemudian diendapkan sehingga terbentuk lapisan tepung di bagian 
          bawah. Tepung inilah yang digunakan untuk membuat papeda. <br/>
          <br/>
        </p>
        <br/>
       </div>
       
      <div className="text-1xl text-yellow-500 text-left content-header-spk1">
        <p>
        Papeda biasanya disajikan dengan kuah ikan kuning. Kuah ikan kuning ini terbuat dari ikan kuning yang dimasak 
        dengan bumbu-bumbu seperti kunyit, bawang merah, bawang putih, serai, dan daun kemangi. Kuah ikan kuning ini 
        memberikan cita rasa gurih dan kaya rempah pada hidangan papeda. <br/>
        <br/>
        Papeda kuah ikan kuning merupakan hidangan yang sangat populer di Papua. Hidangan ini memiliki peran penting 
        dalam kehidupan sehari-hari masyarakat Papua dan sering disajikan dalam acara-acara adat, perayaan, atau acara 
        keluarga. Papeda juga sering dihidangkan sebagai hidangan utama dalam acara-acara kenegaraan di Papua.
        Sebagai hidangan tradisional yang melekat erat dengan budaya Papua, papeda kuah ikan kuning memiliki nilai 
        historis dan simbolis bagi masyarakat setempat. Hingga saat ini, hidangan ini terus menjadi bagian penting dari 
        warisan kuliner Papua dan menjadi daya tarik bagi wisatawan yang ingin mencicipi kekayaan kuliner dan budaya Papua.
        <br/>
        </p>
        <br/>      
          <hr/>
          <br/>
        <div className="text-2xl text-center"><b> Cara Membuat Papeda Kuah Ikan Kuning </b></div>
            <br/>
            <hr/>
            <br/>
            <p>
            Bahan: <br/>
            - 200 gram tepung sagu <br/>
            - Air secukupnya <br/>
            - 500 gram ikan kuning (dapat menggunakan ikan kuning segar <br/> atau fillet ikan kuning) <br/>
            - 2 cm kunyit, parut <br/>
            - 3 siung bawang merah, iris tipis <br/>
            - 2 siung bawang putih, iris tipis <br/>
            - 2 batang serai, memarkan <br/>
            - 3 lembar daun jeruk purut <br/>
            - 2 lembar daun kemangi (opsional) <br/>
            - 2 sendok makan minyak kelapa atau minyak sayur <br/>
            - Garam secukupnya <br/>
            - Merica secukupnya <br/>
            </p>
        </div>

        <div className="text-1xl text-yellow-500 text-left content-header-spk2">
        <p>
            Untuk kuah ikan kuning: <br/>
            1. Bersihkan ikan kuning dan potong menjadi beberapa bagian. <br/>
            2. Panaskan minyak dalam wajan. Tumis bawang merah dan bawang putih hingga harum dan berwarna kecokelatan. <br/>
            3. Masukkan ikan kuning ke dalam wajan dan tumis hingga berubah warna. <br/>
            4. Tambahkan kunyit parut, serai, daun jeruk purut, garam, dan merica. Aduk rata. <br/>
            5. Tuangkan air secukupnya ke dalam wajan dan biarkan mendidih. Masak hingga ikan matang dan kuah mengental. <br/>
            6. Koreksi rasa, tambahkan garam dan merica sesuai selera. <br/>
            7. Jika menggunakan daun kemangi, tambahkan pada akhir proses memasak dan aduk sebentar hingga daun kemangi layu. <br/>

        </p>
       </div>

       <div className="text-1xl text-yellow-500 text-left content-header-spk3">
        <p>
            Cara membuat: <br/>
            1. Campurkan tepung sagu dengan air hingga terbentuk adonan yang lembut dan kental. <br/>
            2. Didihkan air dalam panci besar. Setelah air mendidih, tuangkan sedikit-sedikit adonan tepung sagu sambil 
            terus diaduk hingga adonan menjadi mengental dan berubah menjadi bubur. Pastikan adonan tidak terlalu kental 
            atau terlalu cair. <br/>
            3. Biarkan papeda matang dan mengental. Setelah itu, papeda siap disajikan dalam mangkuk atau piring saji. <br/>
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
