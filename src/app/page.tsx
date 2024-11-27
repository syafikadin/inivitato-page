"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isMusic, setIsMusic] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [sliderImage, setSliderImage] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const images = [
    "https://invitato.net/test-product-engineer/static/2-9fafa4bf7091b5207804ffe51f518939.jpg",
    "https://invitato.net/test-product-engineer/static/5-ffa38a07e15195800fbcc590cb50b2d0.jpg",
    "https://invitato.net/test-product-engineer/static/1-2b43ea516254cdff99c88a7fce90ae98.jpg",
  ];

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsMusic(true);
      setIsOpen(true);
    }
  };

  const handlePauseAudio = () => {
    if (audioRef.current) {
      if (isMusic) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusic(!isMusic);
    }
  };

  const goToNextImage = () => {
    setSliderImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setSliderImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handlePreviewClick = (index: number) => {
    setSliderImage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToText = () => {
    const element = document.getElementById("scroll-text");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
        {isOpen && (
          <>
            <button
              className="btn btn-sm btn-light position-absolute bottom-0 start-0 m-3"
              onClick={handlePauseAudio}
            >
              <i className="bi bi-music-note"></i>
            </button>
          </>
        )}
      </div>

      {/* Bagian Kanan */}
      {isOpen ? (
        <div className="col-12 col-lg-5 position-relative overflow-auto" style={{ maxHeight: "100vh" }}>
          <img
            src={images[currentImage]}
            alt="Wedding Gallery"
            className="img-fluid vh-100 w-100 object-fit-cover"
            style={{
              opacity: 1,
            }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 text-white d-flex flex-column">
            <div className="text-center">
              <h5 className="text-uppercase wedding-announcement wedding-announcement-mobile">Wedding Announcement</h5>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h2 className="text-uppercase wedding-title-2">Tiffany & Jared</h2>
              <h2 className="fst-italic timetoshare">#TImetoshaRE</h2>
            </div>

            <div className="position-absolute bottom-0 end-0 m-4 text-center text-white">
              <button
                className="btn btn-transparent text-white border-0 button-scroll"
                onClick={scrollToText}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
              >
                SCROLL TO BEGIN <i className="bi bi-arrow-down"></i>
              </button>
            </div>

          </div>

          <div className="d-flex flex-column">
            <div className="text-center mt-5" id="scroll-text">
              <p className="dear-text">DEAR MR-MRS-MS,</p>
              <p className="dear-text">FAMILY & FRIENDS</p>
              <h2 className="welcome-text mt-2">
                Welcome to <br /> Tiffany & Jared's <br /> Wedding Website
              </h2>
              <p className="caption-text mt-3">
                Together with joyful hearts and the grace of God, we joyfully announce the
                upcoming of our marriage.
              </p>
            </div>

            <div className="d-flex align-items-center justify-content-center position-relative mt-4">
              {/* Preview Kiri */}
              <div
                className="position-absolute d-flex align-items-center"
                style={{
                  left: "30%",
                  zIndex: 1,
                  cursor: "pointer",
                  transform: "translateX(-120%)",
                }}
                onClick={() => handlePreviewClick((sliderImage - 1 + images.length) % images.length)}
              >
                <img
                  src={images[(sliderImage - 1 + images.length) % images.length]}
                  alt="Previous"
                  className="img-thumbnail"
                  style={{
                    maxHeight: "380px",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Gambar Utama */}
              <img
                src={images[sliderImage]}
                alt="Wedding Gallery"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  border: "2px solid white",
                }}
              />
              {/* Preview Kanan */}
              <div
                className="position-absolute d-flex align-items-center"
                style={{
                  right: "30%",
                  zIndex: 1,
                  cursor: "pointer",
                  transform: "translateX(120%)",
                  overflow: 'hidden'
                }}
                onClick={() => handlePreviewClick((sliderImage + 1) % images.length)}
              >
                <img
                  src={images[(sliderImage + 1) % images.length]}
                  alt="Next"
                  className="img-thumbnail"
                  style={{
                    maxHeight: "380px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            {/* Button Left Right */}
            <div className="d-flex justify-content-end me-5 mt-4">
              <button className="btn btn-light me-2 border btn-arrow" onClick={goToPreviousImage}>
                <i className="bi bi-arrow-left fs-4"></i>
              </button>
              <button className="btn btn-light me-5 border btn-arrow" onClick={goToNextImage}>
                <i className="bi bi-arrow-right fs-4"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Image Before Open
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
              <button
                className="btn btn-light mt-2 px-5 py-1 btn-up-down"
                onClick={handlePlayAudio}
              >
                Open
              </button>
            </div>
          </div>
        </div>
      )}

      <audio ref={audioRef} src="/music/Bernadya.mp3" preload="auto" />
    </div>
  );
}