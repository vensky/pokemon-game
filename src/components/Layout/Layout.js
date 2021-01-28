import s from './style.module.css';

const Layout = ({ id, title, desc, urlBg, colorBg }) => {
    const bgImgRoot = urlBg ? { backgroundImage: `url(${urlBg})` } : null;
    const bgColorRoot = colorBg ? { backgroundColor: `${colorBg}` } : null;
    return (
        <section className={s.root} id="" style={ bgImgRoot || bgColorRoot }>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            { title }
                        </h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>
                            { desc }
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
