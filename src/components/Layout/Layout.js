import s from './style.module.css';

const Layout = ({ id, title, desc, urlBg, colorBg, children }) => {
    const bgImgRoot = urlBg ? { backgroundImage: `url(${urlBg})` } : {};
    const bgColorRoot = colorBg ? { backgroundColor: `${colorBg}` } : {};
    return (

        <section className={s.root} id="" style={{...bgImgRoot, ...bgColorRoot}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            { title }
                        </h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
