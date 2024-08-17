import React, { ReactNode } from 'react';
import styles from './Forms.module.css';

interface FormProps {
  heading?: ReactNode;
  subheading?: ReactNode;
  details?: ReactNode;
  inputs?: ReactNode;
  formLinks?: ReactNode;
  formAction?: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  alignActions?: 'right' | 'column' | 'row' | 'fill-row' | 'fill-column';
  className?: string;
}

const Form: React.FC<FormProps> = ({
  heading,
  subheading,
  details,
  inputs,
  formLinks,
  formAction,
  onSubmit,
  alignActions = "fill-row",
  className
}) => {
    const getActionStyle = () => {
        switch (alignActions) {
        case 'right':
            return styles.actions_right;
        case 'column':
            return styles.actions_column;
        case 'row':
            return styles.actions_row;
        case 'fill-row':
            return styles.actions_fill_row;
        case 'fill-column':
            return styles.actions_fill_column;
        default:
            return '';
        }
    };

    return (
        <div className={`${className ? className : ""} ${styles.form}`}>
            <form onSubmit={onSubmit} style={{width: "100%"}}>
                <div className={styles.form_context}>
                    {heading && <div className={styles.form_heading}>{heading}</div>}
                    {subheading && <div className={styles.form_sub_heading}>{subheading}</div>}
                    {details && <div className={styles.form_details}>{details}</div>}
                </div>
                <div className={styles.form_inputs}>{inputs}</div>
                {formLinks && <div className={styles.form_links}>{formLinks}</div>}
                <div className={`${styles.form_actions} ${getActionStyle()}`}>{formAction}</div>
            </form>
        </div>
    );
};

export default Form;
