import React from 'react';
import style from './Dialogs.module.css';
import Button from '@/components/buttons/Buttons';

type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    subtitle?: string;
    type: 'basic' | 'full-screen';
    actions?: React.ReactNode;
    children: React.ReactNode;
    actionsAlignment?: 'right' | 'column' | 'row' | 'fill-row' | 'fill-column';
    closeOnOverlayClick?: boolean;
    overlayClassName?: string;
    dialogClassName?: string;
};

const Dialog: React.FC<DialogProps> = ({
    isOpen,
    onClose,
    title,
    subtitle,
    type,
    actions,
    children,
    actionsAlignment = 'right',
    closeOnOverlayClick = true,
    overlayClassName,
    dialogClassName
}) => {

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    const isFullScreen = type === 'full-screen';

    const getActionStyle = () => {
        switch (actionsAlignment) {
        case 'right':
            return style.actions_right;
        case 'column':
            return style.actions_column;
        case 'row':
            return style.actions_row;
        case 'fill-row':
            return style.actions_fill_row;
        case 'fill-column':
            return style.actions_fill_column;
        default:
            return '';
        }
    };

    return (
        <div className={`${overlayClassName ? overlayClassName : ""} ${style.overlay}`} onClick={handleOverlayClick}>
            <div className={`${style.dialog} ${isFullScreen ? style.full_screen : ''} ${dialogClassName ? dialogClassName : ""}`}>
                <div className={`${style.dialog_header} ${isFullScreen ? style.full_screen_header : ''}`}>
                    {isFullScreen ? (
                        <>
                            <div className={style.dialog_title}>{title}</div>
                            <Button variant='icon' icon='close' onClick={onClose} />
                        </>
                    ) : (
                        <>
                            {title && <div className={style.dialog_title}>{title}</div>}
                            {subtitle && <div className={style.dialog_subtitle}>{subtitle}</div>}
                        </>
                    )}
                </div>
                <div className={style.dialog_content}>
                    {children}
                </div>
                {!isFullScreen && actions && (
                    <div className={`${style.dialog_actions} ${getActionStyle()}`}>
                        {actions}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dialog;
