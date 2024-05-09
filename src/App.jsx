// const accessKey = "kqurjjRC0wq5u0imyFvKxZZzaRzkRW-XuMfm3B5N5q8";

import { useEffect, useState } from "react";

// import axios from 'axios';

import "./App.css";

// import {Loader, ErrorMessage, LoadMoreBtn, ImageModal, SearchBar,ImageGallery} from './components'
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage.jsx";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { ImageModal } from "./components/ImageModal/ImageModal.jsx";
import { SearchBar } from "./components/SearchBar/SearchBar.jsx";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import { fetchSearchImages } from "./service/serviceAPI.js";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const [selectedImage, setSelectedImage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {
      if (!searchTerm) return;
      try {
        setError(false);
        setLoading(true);

        const data = await fetchSearchImages(searchTerm, page);

        setImages((prevState) => [...prevState, ...data]);
        setHasMore(data.length === 15);
      } catch (error) {
        console.error("Failed to fetch images:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [searchTerm, page]);

  //функ- я добавления картинок по клик кнопк
  const fetchMoreImages = () => {
    setPage((prev) => prev + 1);
  };
  // модал
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleSubmit = (searchTerm) => {
    setSearchTerm(searchTerm);
    setPage(1);
    setImages([]);
  };
  return (
    <>
      <h1>Enter what you want to receive?</h1>
      <SearchBar onSearch={handleSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {searchTerm && images.length === 0 && <h2>Nothing in search</h2>}
      {images.length > 0 && hasMore && (
        <LoadMoreBtn
          onLoadMore={fetchMoreImages}
          onImageClick={handleImageClick}
        />
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </>
  );
}

export default App;
