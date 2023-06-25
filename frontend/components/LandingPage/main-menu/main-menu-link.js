export default function MainMenuLink({ url, label, active, callbackOnClick, log }) {
    if (log) {

        return (
            <li className="nav-item" onClick={callbackOnClick}>
                <button style={{border : "1px #000 solid", borderRadius : "5px", marginLeft: "1rem"}}><a href="#home">{label}</a></button>
            </li>
        )
    }
    return (
        <li className="nav-item" onClick={callbackOnClick}>
            <a className={`page-scroll ${active ? 'active' : ''}`} href={`/${url}`}>{label}</a>
        </li>
    )
}