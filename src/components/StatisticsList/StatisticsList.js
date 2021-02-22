import PropTypes from "prop-types";
import styles from "./StatisticsList.module.css";

const StatisticsList = ({stats}) => (
    <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>
        <ul className={styles.stat__list}>
            {stats.map(({id, label, percentage}) => (
                <li key={id} className={styles.items} style={{backgroundColor: get_random_color()}}>
                    <span  className={styles.label}>{label}</span>
                    <span  className={styles.percentage}>{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
)

function get_random_color() {
    var letters = 'ABCDE'.split('');
    var color = '#';
    for (var i=0; i<3; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

StatisticsList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticsList;