import React, {useState} from "react";
import { useFetch } from "../hooks/useFetch";
import { Modal, Button} from "react-bootstrap";

import Grid from './Grid';
import Poll from 'react-polls';
import {Footer} from './Footer';

const styles = {
	questionSeparator: false,
	questionSeparatorWidth: 'question',
	questionBold: false ,
	questionColor: '#5e68cc',  
	align: 'center',
	theme: 'purple'
}

const Polls = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [data] = useFetch();
    
    return (
        <>
    <Grid header="Polls">
        {data && data.length > 0 && data.map((poll)=>
                    <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{poll.question}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{poll.date}</h6>
                        <p className="card-text">{poll.description}</p>
                        <Button variant="primary" onClick={handleShow} disabled>
                            Vote !
                        </Button>

            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                        <Modal.Title>{poll.question}</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
				<Poll question={poll.question} answers={poll.answers} customStyles={styles}/>
                </Modal.Body>
             </Modal>                   
                        
                    </div>
                </div>
        )}

    </Grid>
    <Footer/>
    </>

    );
};

export default Polls;