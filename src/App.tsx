// const accessKey = "kqurjjRC0wq5u0imyFvKxZZzaRzkRW-XuMfm3B5N5q8";

import { useEffect, useState } from 'react'

import axios from 'axios';

import './App.css';
import Modal from 'react-modal';

import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import {fetchSearchImages} from './service/serviceAPI.js'

function App() {
  const [images, setImages] = useState([]);
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState(false);


// useEffect(()=> {
 const handleSearch= async (searchPhoto)=> {
  try{
    setImages([])
    setError(false)
    setLoading(true);

  const data = await fetchSearchImages(searchPhoto);
  setImages(data);
}
catch(error){
  console.error("Failed to fetch images:", error);
  setError(true);
}
finally{
  setLoading(false);
}
}
// fetchImages();
// },[searchPhoto])

  return (
    <>   
      <h1>Enter what you want to receive?</h1>
    <SearchBar  onSearch={handleSearch}/>
     <LoadMoreBtn/>
     <ImageGallery images={images}/>
     {/* <ErrorMessage/> */}
     {error &&  <ErrorMessage/>}
     {/* <Loader/> */}
     {loading && <Loader/>}
     <ImageModal/>
    </>
  )
}

export default App
