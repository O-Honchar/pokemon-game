import s from './style.module.css';
import PropTypes from 'prop-types';

const Layout = ({ title, descr, urlBg, colorBg = '#e2e2e2' }) => {
    const bkgnd = {
        background: `${colorBg}${urlBg
            ? ` url(${urlBg}) no-repeat fixed left bottom / cover`
            : ''}`,
    };

    return (
        <section className={s.root} style={bkgnd}>
            <div className={s.wrapper}>
                <article>
                    {title &&
                        <div className={s.title}>
                            <h3>{title}</h3>
                            <span className={s.separator}></span>
                        </div>}
                    {descr &&
                        <div className={`${s.desc} ${s.full}`}>
                            <p>{descr}</p>
                        </div>}
                </article>
            </div>
        </section>
    );
};

Layout.propTypes = {
    title: PropTypes.string,
    descr: PropTypes.string,
    urlBg: PropTypes.string,
    colorBg: PropTypes.string,
};

export default Layout;
