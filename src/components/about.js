import Style from './about.module.css'
import img1 from '../Assets/img1.png'
import img2 from '../Assets/img2.png'
function About() {

    return (
        <div className={Style.container}>
            <h1>About Bitcoin</h1>
            <div className={Style.bitcoin}>
                <h3>What is Bitcoin?</h3>
                <p>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
            </div>
            <hr className={Style.line} />
            <div className={Style.bitcoinData}>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p className={Style.bitcoinData1}>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  </p>
            </div>
            <div className={Style.bitcoinData2}>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</div>
            <div className={Style.bitcoinData3}>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</div>
            <hr className={Style.line}/>
            <div className={Style.holdingBitcoin}>
            <h1>Already Holding Crypto?</h1>
            <div className={Style.bitcoinInfo}>
                <div className={Style.profits}>
                    <img className={Style.img} src={img1}/>
                    <div className={Style.btnBox} >
                    <h1>Calculate your profits</h1>
                    <button className={Style.btn} >Check Now</button>
                    </div>
                </div>
                <div className={Style.tax}>
                <img className={Style.img} src={img2}/>
                <div className={Style.btnBox} >
                <h1>Calculate your tax liabilities</h1>
                <button className={Style.btn} >Check Now</button>
                </div>
                </div>
            </div>
            <hr className={Style.line}/>
                <div className={Style.data}>
                    <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper du</p>
                </div>
            </div>
        </div>
    )
}
export default About