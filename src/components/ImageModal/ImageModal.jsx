// ImageModal.js
import React, { useState, useEffect } from "react";

const ImageModal = ({ iconSrc, modalSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use an effect to toggle body's overflow style based on modal state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = "visible"; // Enable scrolling when modal is closed
    }

    // Clean up effect to prevent issues
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <div>
      {/* Icon that triggers the modal */}
      <img
        src={iconSrc}
        alt="Icon"
        onClick={() => setIsOpen(true)}
        className="icon-placeholder"
      />

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          {/* Image displayed in the modal */}
          <img
            src={modalSrc}
            alt="Modal Content"
            onClick={(e) => e.stopPropagation()} // Prevent the modal from closing when the image itself is clicked.
          />
        </div>
      )}
    </div>
  );
};

export default ImageModal;
