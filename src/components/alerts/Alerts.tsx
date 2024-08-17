'use client'
import React, { useState } from "react";
import styles from "./Alerts.module.css";
import Button from "../buttons/Buttons";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertProps {
    type?: AlertType;
    message: string;
    onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    const [exiting, setExiting] = useState(false);
    const icon = type === "success" ? "check_circle" : type;

    const handleClose = () => {
        setExiting(true);
        setTimeout(() => {
            if (onClose) {
                onClose();
            }
        }, 500);
    };

    return (
        <div className={`${styles.alert} ${exiting ? styles['slide-out'] : ''}`}>
            <span className="material-symbols-outlined">{icon}</span>
            <span className={styles.message}>{message}</span>
            {onClose && (
                <Button variant="icon" icon="close" onClick={handleClose} className={styles.close_button}></Button>
            )}
        </div>
    );
};

export default Alert;
