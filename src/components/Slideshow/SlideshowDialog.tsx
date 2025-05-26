import React from "react";
import "./SlideshowDialog.css";

type SlideshowDialogProps = {
  image: string;
};
const SlideshowDialog = ({ image }: SlideshowDialogProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const dialogCloseButtonRef = React.useRef<HTMLButtonElement>(null);

  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    if (isOpen && dialogCloseButtonRef.current) {
      dialogCloseButtonRef.current.focus();
    }
  }, [isOpen]);

  React.useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isOpen ? "hidden" : "unset"; // Prevent scrolling when dialog is open
    }
  }, [isOpen]);

  const handleCloseKeydown = (
    event?: React.KeyboardEvent | React.MouseEvent
  ) => {
    // Close on button click or Esc key
    if (
      !event ||
      (event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Escape")
    ) {
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen} className="slideshow-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path d="M33.406 0c-.55.05-.957.543-.906 1.094.05.55.543.957 1.094.906h12.968L25.689 22.906a1 1 0 0 0-.348 1.004c.086.371.379.664.75.75.375.086.762-.05 1.004-.348L48 3.439v12.968c-.004.36.184.696.496.88.313.179.695.179 1.008 0 .312-.184.5-.52.496-.88V0H33.406M2 10c-.523 0-1.059.184-1.437.563C.183 10.94 0 11.477 0 12v36c0 .523.184 1.059.563 1.438C.94 49.816 1.477 50 2 50h36c.523 0 1.059-.184 1.438-.562.378-.38.562-.915.562-1.438V18a1 1 0 0 0-.496-.879 1.01 1.01 0 0 0-1.008 0c-.312.184-.5.52-.496.879v30H2V12h30c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496Z"></path>
        </svg>
      </button>
      <dialog open={isOpen} className="slideshow-dialog" ref={dialogRef}>
        <button
          ref={dialogCloseButtonRef}
          type="button"
          onClick={handleClose}
          onKeyDown={(e) => handleCloseKeydown(e)}
          className="slideshow-close-button"
        >
          Close
        </button>
        <img src={image} alt="Slideshow image" />
      </dialog>
    </>
  );
};

export default SlideshowDialog;
