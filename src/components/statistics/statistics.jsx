import React from 'react';
import PropTypes from "prop-types";

import './Statistics.css'


const Statistics = ({ title, stats, lable }) => {
    return (
        <section className="statistics">
            {{ title } && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className="item" key={id}>
        <span className="label">{label}</span>
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