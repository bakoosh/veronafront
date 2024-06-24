import React from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, Component, componentProps }) => {
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        content: {
            width: '500px',
            height: '400px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1001,
        },
    };

    const fade = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-50px)',
        config: { duration: 250 },
    });

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            closeTimeoutMS={300}
        >
            <animated.div style={fade}>
                <Component {...componentProps} />
            </animated.div>
        </Modal>
    );
};

export default ModalComponent;
