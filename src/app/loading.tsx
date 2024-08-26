// src/app/loading.tsx
import React from 'react';
import styles from "./page.module.css";

const Loading = () => {
    return (
        <div className={styles.container}>
            <svg className={styles.spinner} viewBox="0 0 50 50">
                <circle 
                    className={styles.path} 
                    cx="25" 
                    cy="25" 
                    r="20" 
                    fill="none" 
                    stroke-width="5"
                ></circle>
            </svg>
        </div>
    );
};

export default Loading;
