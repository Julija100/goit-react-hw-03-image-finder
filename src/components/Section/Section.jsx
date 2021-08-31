import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <div>
            {children}
            {title && <h2>{title}</h2>}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;