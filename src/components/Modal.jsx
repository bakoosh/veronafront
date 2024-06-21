    import React from 'react';
    import Modal from 'react-modal';
    import { useSpring, animated } from 'react-spring';

    Modal.setAppElement('#root');

    const ModalComponent = ({ isOpen, onRequestClose, Component, componentProps }) => {

        const customStyles   = {
            content: {
                width: '500px',
                height: '400px',
                margin: 'auto',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#fff',
                position: 'relative',
                overflow: 'hidden',
            },
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
            }
        };

        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                style={customStyles}
                closeTimeoutMS={300}
            >
                <animated.div>
                    <Component {...componentProps} />
                </animated.div>
            </Modal>
        );
    };

    export default ModalComponent;