import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>אישור</h2>
                <p>?אתה בטוח שברצונך לסיים את ההזמנה</p>
                 <button onClick={onConfirm}>Yes</button>
                <button onClick={onClose}>No</button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
};

export default Modal;