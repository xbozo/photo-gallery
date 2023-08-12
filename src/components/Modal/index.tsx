import { IoMdClose } from 'react-icons/io';
import './styles.css';

interface ModalProps {
    imageUrl: string
    onClose: () => void
}

export function Modal({ imageUrl, onClose }: ModalProps) {
    return (
        <div className="modal-overlay">     { /* colocar o onClose aqui pra fechar em qualquer lugar */}
            <button 
                className="close-modal-button"
                onClick={onClose}
            >
                <IoMdClose />
            </button>
            <div className="modal-content">
                <img src={imageUrl} alt="" />
            </div>
        </div>
    );
}