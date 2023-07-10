import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi';

function Contact() {
    return (
        <section className='c-wrapperr'>
            <div className="paddings innerWidth flexCenter c-containerr two">
                <div className="c-left flexColStart">
                    <span className='orangeText'>Our Contact</span>
                    <span className='primaryText'>Easy to Contact us</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you. We believe a good place to live can make your life better</span>

                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>+995 44 25 77</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>+995 44 25 77</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>+995 44 25 77</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Massage</span>
                                        <span className='secondaryText'>+995 44 25 77</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Massage</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
