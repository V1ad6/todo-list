import React from 'react';
import styles from './TaskCard.module.css';

const TaskCard = ({ id, title, description, isCompleted, onToggle, removeTask }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.controlsContainer}>
          <input
            type="checkbox"
            id={`checkbox-${id}`}
            className={styles.checkbox}
            checked={isCompleted}
            onChange={onToggle}
          />
          <label 
            htmlFor={`checkbox-${id}`} 
            className={styles.customCheckbox}>
          </label>
          <button className={styles.removeBtn} onClick={removeTask}>
            &times;
          </button>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TaskCard;