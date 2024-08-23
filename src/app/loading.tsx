// src/app/loading.tsx
import React from 'react';
import styles from "./page.module.css";

const Loading = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.topBar}></div>
                <div className={styles.listContainer}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className={styles.listItem}>
                            <div className={styles.listTitle}></div>
                            <div className={styles.listSubtitle}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.navbar}></div>
        </div>
    );
};

export default Loading;
