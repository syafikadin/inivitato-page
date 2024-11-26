import React from "react";

export default function Home() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column flex-lg-row p-0">
      {/* Bagian Kiri */}
      <div className="d-none d-lg-block col-lg-7 position-relative">
        <img
          src="https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539"
          alt="Couple"
          className="img-fluid vh-100 w-100 object-fit-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 text-white d-flex flex-column p-5">
          <p className="text-uppercase wedding-announcement text-animated">Wedding Announcement</p>
          <h2 className="text-uppercase mt-3 wedding-title">Tiffany &</h2>
          <h2 className="text-uppercase wedding-title wedding-title-second">Jared</h2>
          <p className="mt-1 fst-italic wedding-description text-animated">
            "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
            diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
            mencintaimu dengan sederhana; dengan isyarat yang tak sempat
            disampaikan awan kepada hujan yang menjadikannya tiada."
            <br />
            — Sapardi Djoko Damono
          </p>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="col-12 col-lg-5 position-relative">
        <img
          src="https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920"
          alt="Couple Picnic"
          className="img-fluid vh-100 w-100 object-fit-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 text-white d-flex flex-column">
          <div className="text-center">
            <h5 className="text-uppercase wedding-announcement wedding-announcement-mobile">Wedding Announcement</h5>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="text-uppercase wedding-title-2">Tiffany & Jared</h2>
            <h2 className="fst-italic timetoshare">#TImetoshaRE</h2>
            <button className="btn btn-light mt-2 px-5 py-1 btn-up-down">Open</button>
          </div>
        </div>
      </div>
    </div>
  );
}
