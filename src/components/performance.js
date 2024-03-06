import Style from './performance.module.css'
function Performance() {

    return (
        <div className={Style.container}>
            <div className={Style.parent} >
                <h1 className={Style.heading}>Performance</h1>
                <div className={Style.performanceScale}>
                    <div>
                        <p>Today's Low</p>
                        <p>46,930.22</p>
                    </div>
                    <div className={Style.scale}></div>
                    <div>
                        <p>Today's high</p>
                        <p>49,343.83</p>
                    </div>
                </div>
                <div className={Style.performanceScale2}>
                    <div>
                        <p>52W Low</p>
                        <p>16,930.22</p>
                    </div>
                    <div className={Style.scale}></div>
                    <div>
                        <p>52W high</p>
                        <p>49,743.83</p>
                    </div>
                </div>
                <h1 className={Style.fundamentals}>Fundamentals</h1>
                <div className={Style.detailsContainer}>
                    <div  className={Style.details}>
                        <div  className={Style.detailsLeft}>
                            <p className={Style.values}>Bitcoin Price</p>
                            <p className={Style.num}>$16,815.46</p>
                        </div>
                        <hr className={Style.horizontalLine}/>
                        <div  className={Style.detailsLeft}>
                            <p className={Style.values}>24h Low/ 24h High</p>
                            <p className={Style.num}>$16,382.07 / $16,874.12</p>
                        </div>
                        <hr className={Style.horizontalLine}/>
                        <div  className={Style.detailsLeft}>
                            <p className={Style.values}>7d Low/ 7d High</p>
                            <p className={Style.num}>$16,382.07 / $16,874.12</p>
                        </div>
                        <hr className={Style.horizontalLine}/>
                        <div  className={Style.detailsLeft}>
                            <p className={Style.values}>Trading Volume</p>
                            <p className={Style.num}>$23,249,202,782</p>
                        </div>
                        <hr className={Style.horizontalLine}/>
                        <div  className={Style.detailsLeft}>
                            <p className={Style.values}>Market Cap Rank</p>
                            <p className={Style.num}>#1</p>
                        </div>
                        <hr className={Style.horizontalLine}/>
                    </div>
                    <div  className={Style.details}>
                        <div  className={Style.detailsRight}>
                            <p className={Style.values}>Market Cap</p>
                            <p className={Style.num}>$323,507,290,047</p>
                        </div>
                        <hr className={Style.horizontalLine}/>
                        <div className={Style.detailsRight}>
                            <p className={Style.values}>Market Cap Dominance</p>
                            <p className={Style.num}>38.343%</p>
                        </div>
                        <hr className={Style.horizontalLine}/>
                        <div className={Style.detailsRight}>
                            <p className={Style.values}>Volume / Market Cap</p>
                            <p className={Style.num}>0.0718</p>
                        </div>
                        <hr className={Style.horizontalLine}/>
                        <div className={Style.detailsRight}>
                            <p className={Style.values}>All-Time High</p>
                            <div className={Style.valuedata}>
                                <h3 className={Style.num}>$69,044.77 <span>-75.6%</span></h3>
                                <p>Nov 10, 2021(about 1 year)</p>
                            </div>
                        </div>
                        <hr className={Style.horizontalLine}/>
                        <div className={Style.detailsRight}>
                            <p className={Style.values}>All-Time Low</p>
                            <div className={Style.valuedata}>
                                <h3 className={Style.num}>$67.81 <span>24729.1%</span></h3>
                                <p>Jul 06, 2013(about 9 year)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance;