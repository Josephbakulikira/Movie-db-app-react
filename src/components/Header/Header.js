import React, {Fragment} from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';
export default function Header({search, HandleButtonClick, RequestChange}) {
    function HandleInput(event){
         search(event);
    }
    function HandleClick(){
        HandleButtonClick()
    }
    
    return (
        <Fragment>
            <div className="navigation">
            <span onClick={() => RequestChange("popular")} >Trending </span>
            <span onClick={() => RequestChange("top_rated")} >Top Rated</span>
            <span onClick={() => RequestChange("upcoming")} >Up Coming</span>

            
            </div>
           
            <div className="d-flex justify-content-center ss">
            <Form inline>
                <FormControl onChange={HandleInput} type="text" placeholder="Search" className="mr-sm-2" />
                <Button className="bouton2" onClick={HandleClick} variant="outline-info">Search</Button>
            </Form></div>
        </Fragment>
    )
}
