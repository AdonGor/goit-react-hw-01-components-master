import styles from './Profile.module.css';
import PropTypes from 'prop-types';
import imageNotFound from '../img/image-not-found.jpg';
const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
  <div className={styles.Profile}>
    <div className={styles.ProfileItems}>
      <img
        className={styles.profileImage}
        src={avatar}
        alt={name}
        width="200"
      />
      <p className={styles.ProfileItems__name}>{name}</p>
      <p className={styles.ProfileItems__text}>@{tag}</p>
      <p className={styles.ProfileItems__text}>{location}</p>
    </div>
    <ul className={styles.StatsList}>
      <li className={styles.StatsList__item}>
        <span className={styles.StatsList__item__title}>Followers</span>
        <span className={styles.StatsList__item__numbers}>{followers}</span>
      </li>
      <li className={styles.StatsList__item}>
        <span className={styles.StatsList__item__title}>Views</span>
        <span className={styles.StatsList__item__numbers}>{views}</span>
      </li>
      <li className={styles.StatsList__item}>
        <span className={styles.StatsList__item__title}>Likes</span>
        <span className={styles.StatsList__item__numbers}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: imageNotFound,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};

export default Profile;
