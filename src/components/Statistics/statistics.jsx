import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { getRandomHexColor } from '../../index';
export const Statistics = ({ title, statistics }) => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
    {statistics.map(({ id, label, percentage }) => {
    return <li style={{backgroundColor: getRandomHexColor()}} className={css.item} key={id}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span>
    </li>
    }
    )}
    </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}

