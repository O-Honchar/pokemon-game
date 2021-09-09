import s from './style.module.css';
import PropTypes from 'prop-types';

const Header = ({title, descr }) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
            </div>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    descr: PropTypes.string,
};

export default Header;
