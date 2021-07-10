import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
    return (
        <section class="statistics">
            {{ title } && <h2 class="title">{title}</h2>}

            <ul class="stat-list">
                {stats.map(({ id, lable, percentage }) => {
                    return (
                        <li key={id} class="item">
                            <span class="label">{lable}</span>
                            <span class="percentage">{percentage}%</span>
                        </li>)
                })
                }

            </ul>
        </section>
    )
};

Statistics.defaultProps = {
    title: "",
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number,
        lable: PropTypes.string,
        percentage: PropTypes.number,
        })
    ).isRequired,
};

export default Statistics;