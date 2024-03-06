import Style from './navBar.module.css'

function navBar() {

    return (
        <div className={Style.container}>
            <ul className={Style.overView}>
                <li>Overview</li>
                <li>Fundamentals</li>
                <li>News Insights</li>
                <li>Sentiments</li>
                <li>Team</li>
                <li>Technicals</li>
                <li>Tokenomics</li>
            </ul>
            <hr className={Style.line} />
        </div>
    )
}

export default navBar;