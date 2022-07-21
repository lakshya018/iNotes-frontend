import React from 'react'

const Footer = () => {
    return (
        <div className="bg-dark footer-container">
            <footer className="container align-items-center ">
                
                <div className="footer-content text-center">
                    <div className="row align-items-center py-2">
                    <h5 className="text-white text-start col-md-6">Designed and Developed by Lakshya Soni <span className="text-white fw-light">&copy; 2022</span></h5>
                    <div className="footer-social-links text-end col-md-6">
                            <a className="text-white" href="https://github.com/lakshya018">
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
            </footer>
        </div>

    )
}

export default Footer;
