import Rendang from './Rendang.png';
import '.././App.css';

function App() {
  return (
    <div>
      <div className="mt-20 col-img">
        <img src={Rendang} alt=""></img>
      </div>

      <div className="header-sr">
        <h1 className="text-4xl text-amber-400"> Sejarah dan Resep
        <span className="text-orange-500"> Rendang </span> </h1>
      </div>

      <div className=" text-1xl text-amber-400 content-header-sr">
        <hr/>
        <br/>
        <div className="text-2xl text-center"><b> Sejarah </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
            Asal usul rendang ditelusuri berasal dari Sumatra, khususnya Minangkabau. Bagi masyarakat Minang, rendang sudah ada 
            sejak dahulu dan telah menjadi masakan tradisi yang dihidangkan dalam berbagai acara adat dan hidangan keseharian.
            Sebagai masakan tradisi, rendang diduga telah lahir sejak orang Minang menggelar acara adat pertamanya. Kemudian seni 
            memasak ini berkembang ke kawasan serantau berbudaya Melayu lainnya; mulai dari Mandailing, Riau, Jambi, hingga ke 
            negeri seberang di Negeri Sembilan yang banyak dihuni perantau asal Minangkabau.
        </p>
        <br/>
    
        <p>
          Karena itulah rendang dikenal luas baik di Sumatra dan Semenanjung Malaya. Sejarawan Universitas Andalas, Prof. 
          Dr. Gusti Asnan menduga, rendang telah menjadi masakan yang tersebar luas sejak orang Minang mulai merantau dan 
          berlayar ke Malaka untuk berdagang pada awal abad ke-16.
        </p>
        <br/>
       </div>
       
       <div className="text-1xl text-yellow-500 text-left content-header-sr1">
        <p>
          Hal ini karena rendang kering sangat awet, tahan disimpan hingga berbulan lamanya, sehingga tepat dijadikan 
          bekal kala merantau atau dalam perjalanan niaga.
          Rendang juga disebut dalam kesusastraan Melayu klasik seperti Hikayat Amir Hamzah yang membuktikan bahwa 
          rendang sudah dikenal dalam seni masakan Melayu sejak 1550-an (pertengahan abad ke-16).
          Kelahiran rendang juga tak luput dari pengaruh beberapa negara, misalnya bumbu-bumbu dari India yang diperoleh 
          melalui para pedagang Gujarat, India. Karena diaduk terus-menerus, rendang identik dengan warna hitam dan 
          tidak memiliki kuah. <br />
        </p>
        <br/>      
          <hr/>
          <br/>
        <div className="text-2xl text-center"><b> Resep Rendang </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
        Bahan: <br/>
        - 500 gr daging <br/>
        - 1 batang serai geprek <br/>
        - 3 lembar daun jeruk <br/>
        - 2 lembar daun salam <br/>
        - 1 ruas lengkuas geprek <br/>
        - 2 cm kayu manis <br/>
        - 1 sdt gula merah <br/>
        - 1 sdt kaldu sapi dan garam <br/>
        - 1/2 sdt jintan bubuk <br/>
        - 1/2 sdt merica bubuk <br/>
        - Jeruk nipis <br/>
        - 500 ml santan dari 1/2 kelapa
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

        <div className="text-1xl text-yellow-500 text-left content-header-sr2">
        <p> 
            Bumbu halus: <br/>
            - 4 siung bawang putih <br/>
            - 6 butir bawang merah <br/>
            - 2 butir kemiri <br/>
            - 1/2 sdt ketumbar <br/>
            - 3 cabai merah besar (buang bijinya) <br/>
            - 2 cm kunyit <br/>
            - 3 cm jahe 
        </p>
       </div>

       <div className="text-1xl text-yellow-500 text-left content-header-sr3">
       <p>
            Cara membuat: <br/>
            1. Cuci bersih daging, potong sesuai selera, beri perasan jeruk nipis, lalu cuci lagi. <br/>
            2. Haluskan bumbu, lalu tumis bumbu halus dengan serai, daun jeruk, daun salam, kayu manis dan lengkuas sampai matang. <br/>
            3. Masukkan daging, aduk rata, lalu masukkan santan. Masak dengan api kecil sambil sesekali diaduk. <br/>
            4. Kemudian masukkan garam, kaldu, jintan, merica dan gula merah, diamkan hingga bumbu meresap dan airnya menyusut. <br/>
            5. Koreksi rasa, angkat dan hidangkan. 
        </p>
       </div>
  </div>
  );
}

export default App;
