import { useState } from "react";
import { Modal } from "../../components/Modal";
import { photoList } from "../../data/photoList";
import "./styles.css";

export function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleImageClick = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="main-container">
        <div className="content-container">
          <h1>Fotos Intergalacticas</h1>

          <div className="photo-container">
            {photoList.map((item) => (
              <img
                key={item.id}
                src={`/public/assets/photos/${item.photoUrl}`}
                alt=""
                className="photo-img"
                onClick={() => handleImageClick(`/public/assets/photos/${item.photoUrl}`)}
              />
            ))}
          </div>
        </div>
      </div>

      {openModal && (
        <>
          <Modal imageUrl={selectedImageUrl} onClose={handleCloseModal} />
        </>
      )}
    </>
  );
}
