import Style from './team.module.css'
import person1 from '../Assets/person1.png'
import person2 from '../Assets/person2.png'
import person3 from '../Assets/person3.png'
function Team() {

    return (
        <div className={Style.container}>
            <h1>Team</h1>
            <div className={Style.openingPara}>
                <p>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
            </div>
            <div className={Style.dataContainer}>
                <div className={Style.details}>
                    <img src={person3} className={Style.img} />
                    <h2>John Smith</h2>
                    <p>Designation here</p>
                </div>
                <div className={Style.info}>
                    <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                </div>
            </div>
            <div className={Style.dataContainer}>
                <div className={Style.details}>
                    <img src={person1} className={Style.img} />
                    <h2>Elina Williams</h2>
                    <p>Designation here</p>
                </div>
                <div className={Style.info}>
                    <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                </div>
            </div>
            <div className={Style.dataContainer}>
                <div className={Style.details}>
                    <img src={person2} className={Style.img} />
                    <h2>John Smith</h2>
                    <p>Designation here</p>
                </div>
                <div className={Style.info}>
                    <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                </div>
            </div>
        </div>
    )
}
export default Team