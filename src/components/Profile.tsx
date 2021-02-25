import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LH-blip.png" alt="avatar-github" />
            <div>
                <strong>Luis Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                Level 1
                </p>
            </div>
        </div>
    );
}