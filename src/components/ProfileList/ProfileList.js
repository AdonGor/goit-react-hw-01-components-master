import Profile from '../Profile/Profile';
import PropTypes from 'prop-types';
import styles from './ProfileList.module.css';

const ProfileList = ({ profile }) => (
  <ul className={styles.ProfileList}>
    {profile.map(({ avatar, name, tag, location, stats }) => (
      <li key={name} className={styles.ProfileList__item}>
        <Profile
          avatar={avatar}
          name={name}
          tag={tag}
          location={location}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </li>
    ))}
  </ul>
);

PropTypes.ProfileList = {
  profile: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProfileList;
