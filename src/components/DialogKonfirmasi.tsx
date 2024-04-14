import React from 'react';

interface DialogKonfirmasiProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DialogKonfirmasi: React.FC<DialogKonfirmasiProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-container">
      <div className="dialog-content">
        <p>Apakah Anda yakin ingin menghapus item ini?</p>
        <div className="dialog-buttons">
          <button onClick={onCancel}>Batal</button>
          <button onClick={onConfirm}>Hapus</button>
        </div>
      </div>
    </div>
  );
};

export default DialogKonfirmasi;

