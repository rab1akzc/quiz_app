import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div class="wave-container">
                <h2 class="animated tada">QUİZ APP'E HOŞGELDİNİZ</h2>
            </div>
      <div className="containerIndex">
        <div className="containerContent mt-4">
          <div className="row">
            <div className="col-12">
              <label className="labelText">10 sorudan oluşan quize başlamak için
                <bold className="fw-semibold ms-1">Quizi Başlat</bold> butonuna tıklayınız.
              </label>
              <ul className="contentList">
                <li>Önceki sorulara geri dönülemez.</li>
                <li>Soruları cevaplamak için 30 saniye süreniz vardır.</li>
                <li>Sorular görüntülendikten 10 saniye sonra cevaplanabilir olacaktır.</li>

              </ul>
            </div>
          </div>
        </div>
        <Link href={{
          pathname: `/quiz`
        }}
          title="Quizi Başlat"
          className="text-decoration-none">
          <button className="buttonStart">

            Quizi Başlat
          </button>
        </Link>



      </div>
    </>
  );
}
