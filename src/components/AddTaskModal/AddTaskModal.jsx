import React, { useState } from 'react';
import styles from './AddTaskModal.module.css';

const AddTaskModal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd({ title, description, isCompleted: false });
      setTitle('');
      setDescription('');
      onClose();
    } else {
      alert('Назва завдання не може бути порожньою!');
    }
  };

  const handleClear = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Додати нове завдання</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.body}>
          <input
            type="text"
            placeholder="Назва завдання"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
          <textarea
            placeholder="Опис завдання"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
          />
        </div>
        <div className={styles.footer}>
          <button className={styles.clearBtn} onClick={handleClear}>
            Очистити
          </button>
          <button className={styles.addBtn} onClick={handleAdd}>
            Додати
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
