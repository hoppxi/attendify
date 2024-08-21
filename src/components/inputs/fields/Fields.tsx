import React, { useState } from 'react';
import styles from './Fields.module.css';

interface InputProps {
	label?: string;
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
	type?: string;
	variant?: 'outlined' | 'filled';
	error?: string;
	helperText?: string;
	disabled?: boolean;
	name?: string;
	required?: boolean;
	labelClassName?: string
}

const TextField: React.FC<InputProps> = ({
    label,
    placeholder=" ",
    value,
    onChange,
    type = 'text',
    error,
    helperText,
    disabled = false,
    name,
    required,
	labelClassName
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(!!value);

    return (
		<div className={`${styles.input_container} ${styles.outlined}`}>
			<div className={`${styles.input_wrapper} ${isFocused || value ? styles.focused : ''}`}>
				
				<input
					className={`${styles.input} ${error ? styles.error_input : ''}`}
					type={type}
					value={value}
					onChange={(e) => { if (onChange) onChange(e.target.value)}}
					onFocus={handleFocus}
					onBlur={handleBlur}
					placeholder={isFocused ? placeholder : " "}
					disabled={disabled}
					name={name}
          			required={required}
				/>
        <label className={`${labelClassName ? labelClassName : ""} ${styles.label}`}>{label}</label>
			</div>
			{helperText && !error && <div className={styles.helper_text}>{helperText}</div>}
			{error && <div className={styles.error_text}>{error}</div>}
		</div>
    );
};

export default TextField;
