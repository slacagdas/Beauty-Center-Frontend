import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Operation(props) {
  //function Operation(operationName, price, campaignPrice) kullanılabşlir o zaman const satırını silersin
  const { operationName, price, campaignPrice } = props; // operationName="Tüm Vücut 10 Seans Kadın Lazer Epilasyon" price={8500}  campaignPrice={5500}
  return (
    <div>
      <div>İşlem Bilgileri</div>
      <hr />
      <div>
        <div>İsim: {operationName}</div>
        <div> Fiyat: {price}TL</div>
        <div>Kampanyalı Fiyat: {campaignPrice}TL</div>
      </div>
    </div>
  );
}

export default Operation;
