import React from 'react'
import './About.css'
import MyPhoto from '../../assets/MyPhoto.png'
const About = () => {
    return (
        <div className="container">
            <div className="aboutApp m-5">
                <h1 className="text-center my-3">About iNoteBook</h1>
                <hr  className="mb-4"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laboriosam repudiandae alias commodi tempore, debitis eaque at deserunt in non optio quos voluptas aspernatur cumque et quidem vitae! Fugit consectetur culpa, nemo sequi iusto soluta sint recusandae totam voluptatem tempore fuga sapiente iure magni eligendi! Provident aspernatur similique molestiae aperiam, voluptates illo a cupiditate praesentium voluptate expedita reiciendis quo quaerat consequuntur, eligendi repellat fuga? Quis asperiores, alias reiciendis iure nihil sequi culpa, et earum cum dolores ab, tempore doloribus est! Itaque necessitatibus similique mollitia est facilis temporibus accusantium adipisci ea, quia nam nobis ullam nostrum ratione accusamus, atque rerum neque!</p>
            </div>

            <div className="aboutCreator m-5">
                <h1 className="text-center">About the Creator</h1>
                <hr  className="mb-4"/>
                <div className="row ">
                    <div className="col-md-6 text-end myPhoto">
                        <img src={MyPhoto} className="img-fluid" alt="myphoto" />
                    </div>
                    <div className="col-md-6 text-start modalName">
                        <h2 className="m-1">Lakshya Soni</h2>
                        <p className="m-1 mb-0">B.Tech Electrical Engineering</p>
                        <p className="m-1">IIT ROORKEE</p>
                        <div className=" m-1 social-links">
                            <a href="https://github.com/lakshya018">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/lakshya-soni-0ba345194/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/lakshya_1208_">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="mailto:lakshyasoni018@gmail.com">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="text-justify">
                    <p className="m-2">Hello folks, I belong from Sikar, Rajasthan. I am keenly interested in Data Structures and Algorithms, Competitve Programming, Web Development and Web Design.<br/> I developed this website using HTML, CSS, JavaScript and Bootstrap.<br /></p>
                </div>
                <div className="text-center">
                    <a className="mt-2" href="https://lakshya-soni-portfolio.web.app/" target="_blank" rel="noreferrer"><button className=" btn btn-warning">Visit Portfolio</button></a>
                </div>


            </div>



        </div>
    )
}

export default About;