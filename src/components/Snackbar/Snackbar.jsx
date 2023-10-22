import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

const Snackbar = () => {
    document.title = "Snackbar";

    const [showA, setShowA] = useState(false); 
    const toggleShowA = () => setShowA(!showA);

    return (
        <div className='d-flex justify-content-center'>
            <Button onClick={toggleShowA} className="mb-2">
                Toggle Toast <strong>with</strong> Animation
            </Button>
            <Toast show={showA} onClose={toggleShowA} className='position-absolute bottom-0 end-0'>
                <Toast.Header className='bg-info'>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body className='bg-body-secondary'>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </div>
    )
}

export default Snackbar;