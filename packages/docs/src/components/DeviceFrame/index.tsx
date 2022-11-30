import React from "react";
import styles from "./styles.module.css";

interface DeviceFrameProps {
    url: string;
    text: string;
}

export const DeviceFrame = ({ url, text }: DeviceFrameProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.device}>
                <div className={styles.iframeContainer}>
                    <iframe className={styles.iframe} src={url} />
                </div>
                <div className={styles.overlay}>
                    <img src="/img/iphone13.png" alt="iPhone 13" />
                </div>
            </div>
            <div className={styles.text}>
                <p>
                    <a href={url} target="_blank" rel="noreferrer">
                        {text}
                    </a>
                </p>
            </div>
        </div>
    );
};
