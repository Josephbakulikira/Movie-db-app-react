import React,{Fragment, useEffect, useState} from 'react';
import MovieList from './components/MovieList/MovieList';
import Header from './components/Header/Header';
import {Alert, Container } from 'react-bootstrap';
import Particles from 'react-particles-js';
import './App.css';
import {FaYoutube} from 'react-icons/fa'
import {FetchData, FetchSearchData, FetchGenreData} from './components/api/index';
function App() {
  const [currentRequest, setRequest] = useState('popular');
  const [movieList, SetList] = useState([]);

  const [pages, setPages] = useState();
  const [page, setPage] = useState();
  const [inputField, setField] = useState('');
  const [error, setError] = useState('')
  const [genre, setGenre] = useState([])

  useEffect(async ()=>{
    const res = await FetchData(currentRequest)
    setGenre( await FetchGenreData())
    SetList(res.results);
    setPages(res.total_pages);
    setPage(res.page)
  }, [])

  async function updateRequestHandler(value, id){
    
    const res = await FetchData(value, id)
    SetList(res.results);
    setPages(res.total_pages);
    setPage(res.page)
    setRequest(value)
    console.log(movieList)
  }
  function HandlePageChanged(val){
    setPage(val)
  }
  const SearchHandler = (event) => {
    setField(event.target.value)
  }
  async function onSubmitHandler()  {
    console.log("Clicked")
    console.log(inputField)

    if(inputField !== ''){
      setError('')
      const res = await FetchSearchData(inputField)
      SetList(res.results);
      setPages(res.total_pages);
      setPage(res.page)
    }else{
      setError("The SearchField is Empty!!!")
    }
  }

  return (
    <Fragment >
      <Particles className="particles" params={
               {
                "particles": {
                  "number": {
                    "value": 80,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": false
              }
              }/>
      <div className="App">
      <Header search={SearchHandler} HandleButtonClick={onSubmitHandler} RequestChange={updateRequestHandler} />
    
    {error!== ''? <Container>
      <br></br>
      <Alert variant={"danger"}> {error}</Alert>
      </Container>: <br></br>}
      <MovieList genre={genre} pages={pages} pageChange={HandlePageChanged} page={page} requestValue={currentRequest} movieList={movieList} RequestChange={updateRequestHandler}/>    
      <br></br>
                <footer>
                <a href='https://www.youtube.com/channel/UCjPk9YDheKst1FlAf_KSpyA'><FaYoutube className='youtube' color='red' size='3em'/></a>
                  <div>Copyright © 2020 All Rights Reserved by <a href='http://auctux.com/'>Auctux</a>.</div>
                </footer>
      </div>
      
    </Fragment>
  );
}

export default App;
