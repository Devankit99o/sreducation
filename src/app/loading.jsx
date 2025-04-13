import styles from './loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.logoContainer}>
                {/* Replace "your-logo.png" with your actual logo file path */}
                <img 
                    src="sreducation\public\logo\logo.png" 
                    alt="Logo" 
                    className={styles.logo}
                />
            </div>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Loading amazing content...</p>
        </div>
    );
};

export default Loading;