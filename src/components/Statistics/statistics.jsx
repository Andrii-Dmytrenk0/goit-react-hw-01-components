import PropTypes from 'prop-types';

export const Statistics = ({ title, statistics }) => {
    return (
        <section class="statistics">
        {title && <h2 class="title">{title}</h2>}

    <ul class="stat-list">
    {statistics.map(({ id, label, percentage }) => {
    return <li class="item" key={id}>
    <span class="label">{label}</span>
    <span class="percentage">{percentage}</span>
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