import React from 'react';
import styles from './Toggle-inputs.module.css';

interface ToggleInputProps {
    type: "checkbox" | "radio";
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary';
    name?: string
}

const ToggleInput: React.FC<ToggleInputProps> = ({ name, type, checked, onChange, label, disabled = false, color = 'primary' }) => {
    return (
        <label className={`${styles.toggle_input} ${disabled ? styles.disabled : ''}`}>
            <input
                type={type}
                checked={checked}
                onChange={(e) => onChange && onChange(type === 'checkbox' ? e.target.checked : true)}
                disabled={disabled}
                className={styles.input}
                name={name}
            />
            <div className={styles.checkbox_cont}>
                <span className={`${styles.custom_input} ${checked ? styles.checked : ''} ${styles[color]}`}></span>
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
};

export default ToggleInput;
