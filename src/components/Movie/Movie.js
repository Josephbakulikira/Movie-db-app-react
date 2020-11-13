import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap';
import {IMAGE_URL } from '../../configurations/config'
import Modal from 'react-awesome-modal';


export default function Movie({movie, genre}) {
    const [visible, setVisible] = useState(false);
    function openModal(){
        setVisible(true)
    }
    function closeModal(){
        setVisible(false)
    }
    const image_path = movie.poster_path !== null ? `${IMAGE_URL}${movie.poster_path}`: "https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg";
    let genres = []
    if(movie){
        if(movie.genre_ids.length > 0){
            for(let i = 0; i < genre.length; i++){
                for(let j = 0; j < movie.genre_ids.length; j++){
                    if(genre[i].id === movie.genre_ids[j]){
                        genres.push(genre[i].name)
                    }
                }
            }
        }
    }
    
    return (
        <div>
            <Card className='cards' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image_path} />
        <Card.Body>
            
            <Card.Title>{movie.title}</Card.Title>
            <div className='bodycard'>
                <p className="average">vote average: {movie.vote_average}</p>
                <button  className="bouton" onClick={openModal} >See more</button>
                </div>
            
        </Card.Body>
        </Card>
        <Modal 
            visible={visible}
            width="400"
            height="400"
            effect="fadeInUp"
            onClickAway={() => closeModal()}
                >
                    <div className="popupp">
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>

                        <ul className='ulist' >
                            <li className='genres'>Genres</li>
                        { genres.length ? genres.map((e, index) => <li key={index}>{e}</li>): 'not Available'}
                        </ul>

                        <a href="" onClick={() => closeModal()}>exit</a>
                    </div>
                </Modal>
        </div>
        
    )
}
