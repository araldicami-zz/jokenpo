import "./styles.scss";

export function ModalBackground({ open, setOpen, children }) {
  return (
    <div
      className={`modal-overlay ${open ? "open" : "close"}`}
      onClick={setOpen}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
