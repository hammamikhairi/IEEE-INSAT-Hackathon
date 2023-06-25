
export default function FooterSection({ mainMenu, scrollAnchorId }) {
    const links = mainMenu.map(link => ({
        ...link,
        url: link.url[0] === "#" ? `/${link.url}` : link.url})
    )

    return (
        <footer id={scrollAnchorId} className="footer pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                        <div className="footer-widget">
                            <div>
                                <ul className="social-links">
                                    <li><a href="#0"><i className="lni lni-facebook"></i></a></li>
                                    <li><a href="#0"><i className="lni lni-linkedin"></i></a></li>
                                    <li><a href="#0"><i className="lni lni-instagram"></i></a></li>
                                    <li><a href="#0"><i className="lni lni-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}