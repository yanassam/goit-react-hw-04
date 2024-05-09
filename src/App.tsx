// const accessKey = "kqurjjRC0wq5u0imyFvKxZZzaRzkRW-XuMfm3B5N5q8";

import { useEffect, useState } from 'react'

// import axios from 'axios';

import './App.css';

// import {Loader, ErrorMessage, LoadMoreBtn, ImageModal, SearchBar,ImageGallery} from './components'
import {ErrorMessage} from './components/ErrorMessage/ErrorMessage';
import {LoadMoreBtn} from './components/LoadMoreBtn/LoadMoreBtn';
import {Loader} from './components/Loader/Loader';
import {ImageModal} from './components/ImageModal/ImageModal';
import {SearchBar} from './components/SearchBar/SearchBar';
import {ImageGallery} from './components/ImageGallery/ImageGallery';
import {fetchSearchImages} from './service/serviceAPI.js'

function App() {

  const [images, setImages] = useState([]);
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const [selectedImage, setSelectedImage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {   
    const handleSearch= async ()=> {
      if (!searchTerm) return ; 
  try{
    setImages([])
    setError(false)
    setLoading(true);

    setPage(1);
    setHasMore(true); 

  const data = await fetchSearchImages(searchTerm, 1);
  setImages(data);
  setHasMore(data.length === 15);
}
catch(error){
  console.error("Failed to fetch images:", error);
  setError(true);
}
finally{
  setLoading(false);
}
};

handleSearch();
}, [searchTerm]); 

//функ- я добавления картинок по клик кнопк 
const fetchMoreImages = async () => {
  try {
    setLoading(true);

    const nextPage = page + 1;
    const data = await fetchSearchImages(searchTerm, nextPage);
    console.log(data)

    setImages(prevImages => [...prevImages, ...data ]);  
    setPage(nextPage);
    setHasMore(data.length === 15);

  } catch (error) {
    console.error("Failed to load more images:", error);
    setError(true);

  } finally {
    setLoading(false);
  }
};
// модал
 const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>   
    <h1>Enter what you want to receive?</h1>
    <SearchBar  onSearch={(searchTerm) => setSearchTerm(searchTerm)} />    
     <ImageGallery images={images} onImageClick={handleImageClick}/>
     { searchTerm && images.length === 0 && <h2>Nothing in search</h2>}
     {images.length > 0 && hasMore && <LoadMoreBtn onLoadMore={fetchMoreImages} onImageClick={handleImageClick}/>}
     {error &&  <ErrorMessage/>}  
     {loading && <Loader/>}   
    <ImageModal isOpen={modalIsOpen} onClose={closeModal} imageSrc={selectedImage} />

    </>
  )
}

export default App
