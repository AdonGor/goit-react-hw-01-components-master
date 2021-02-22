import PropTypes from 'prop-types';
import styles from "./FriendList.module.css";

const FriendList = ({friends}) => {
    return <div className={styles.container}>
        <ul className={styles.friend__list}>
        {friends.map(({id, avatar, name, isOnline}) =>(
        <li key={id} className={styles.item}>
            <span><div className={isOnline === false ? styles.round__green : styles.round__red}></div></span>
            <img className={styles.avatar} src={avatar} alt={name} width="115"/>
            <p className={styles.name}>{name}</p>
        </li>))}
        </ul>
    </div>
}

FriendList.defaultProps = {
    className: 'styles.round__red',
};

FriendList.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['round__green', 'round__red'])
};

export default FriendList;

