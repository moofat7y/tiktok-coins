import React, { useRef } from "react";
import ReactDOM from "react-dom";
import {
  DialogHeader,
  DialogBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const CustomModal = ({ children, open, setOpen }) => {
  const modalRef = useRef();
  const handleBgClick = (e) => {
    if (modalRef.current.contains(e.target)) {
      return;
    } else {
      setOpen(false);
    }
  };
  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      onClick={(e) => handleBgClick(e)}
      className="fixed top-0 left-0 h-screen w-full pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md max-h-full bg-white"
      >
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            Order summary
          </Typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll pr-2"> {children}</DialogBody>
      </div>
    </div>,
    document.getElementById("models")
  );
};

export default CustomModal;
