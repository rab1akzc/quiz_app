import React from "react";
import Link from "next/link";

const Results = ({ answers }) => {
    return (
        <>
            <div class="wave-container">
                <h2 class="animated tada">TEBRİKLER!</h2>
            </div>
            <div className="containerAnswers">
                <div className="row">
                    <div className="col-12">
                        <label className="labelText">Quizi tamamladınız. Verilen cevaplar aşağıda listelenmiştir.
                        </label>
                        <div className="contentList">
                            <table class="table">
                                <thead>
                                    <tr className="tableRow">
                                        <th scope="col">#</th>
                                        <th scope="col">Soru</th>
                                        <th scope="col">Cevap</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {answers.map((i, index) => {
                                        return (
                                            <>
                                                <React.Fragment key={index}>
                                                    <tr  className={i.cevap==="" ? "table-danger":""}>
                                                        <th scope="col">{index + 1}</th>
                                                        <td> <label className="tableText">{i.soru}</label></td>
                                                        <td>{i.cevap!==""? i.cevap+") " + i.text:""}</td>
                                                    </tr>
                                                </React.Fragment>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <Link href={{ pathname: `/` }}
                    title="Quizi Yeniden Başlat"
                    className="text-decoration-none">
                    <button className="buttonStart">
                        Quizi Yeniden Başlat
                    </button>
                </Link>
            </div>

        </>
    )
}
export default Results