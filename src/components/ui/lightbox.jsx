import React from 'react';

const Lightbox = ({ selectedUrl, onClose }) => {
    if (!selectedUrl) return null;

    const handleClick = (e) => {
        e.stopPropagation(); // Prevent the lightbox from closing when clicking the link
        window.open(selectedUrl, '_blank'); // Open the URL in a new tab
    };

    return (
        <div className="lightbox" onClick={onClose}>
            <span className="close" onClick={onClose}>&times;</span>
            <div className="lightbox-content">
                <a href={selectedUrl} onClick={handleClick}>
                    Open Link
                </a>
            </div>
        </div>
    );
};

// const Lightbox = ({ selectedImage, selectedURl, onClose }) => {
//     if (!selectedImage) return null;
//     if(!selectedURl) return null;

//     return (
//         <div className="lightbox" onClick={onClose}>
//             <span className="close" onClick={onClose}>&times;</span>
//             <img className="lightbox-content" src={selectedImage} alt="" href={url}/>
//         </div>
//     );
// };

export default Lightbox;
