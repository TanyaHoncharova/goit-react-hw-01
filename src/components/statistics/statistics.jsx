import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {{ title } && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map(({ id, lable, percentage }) => {
                    return (
                        <li key={id} className="item">
                            <span className="label">{lable}</span>
                            <span className="percentage">{percentage}%</span>
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
        id: PropTypes.string,
        lable: PropTypes.string,
        percentage: PropTypes.number,
        })
    ).isRequired,
};

export default Statistics;