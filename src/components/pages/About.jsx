import React from "react";
import './about.css';
import director from '/director.png';
import atithi from '/atithi.png';

export const About = () => {
    return (
        <>
        <div>
            <h1>We Offer</h1>
            <article className="offer">
                <div>
                    <img src={director}></img>
                    <h4>party</h4>
                </div>
                <div>
                    <img src={director}></img>
                    <h4>party</h4>
                </div>
                <div>
                    <img src={director}></img>
                    <h4>party</h4>
                </div>
                <div>
                    <img src={director}></img>
                    <h4>party</h4>
                </div>
                <div>
                    <img src={director}></img>
                    <h4>party</h4>
                </div>
                <div>
                    <img src={director}></img>
                    <h4>party</h4>
                </div>
                
            </article>
        </div>
        <div>
            <h1>About Our Director</h1>
            <article className="about">
                <img src={director}></img>
                <p>Kumar Arpan Yadav is a highly experienced and accomplished professional with over 20 years in the hotel industry.
                With a passion for the industry and a drive for success, he has established himself as a leader in his field. His extensive experience has provided him with a wealth of knowledge and a deep understanding of the challenges and opportunities in the industry. His strong work ethic and dedication have earned him a reputation as someone who consistently delivers results.
In addition to his experience, Kumar holds an MBA degree , which has equipped him with the skills and knowledge necessary to succeed at the highest levels of the industry. His education has given him a unique perspective on the business, and he has used this knowledge to develop innovative solutions to the challenges facing the industry. With a commitment to excellence and a drive to continuously improve has taken our organisation to next level . He is a true professional who always goes above and beyond to exceed expectations.</p>
            
            </article>
        </div>
        <div>
            <h1>Message For Our Guests</h1>
            <article className="msg">
                <img src={atithi}></img>
                <p>As a dedicated professional, my goal is to ensure that each and every one of our guests has a memorable and enjoyable stay with us. I am committed to providing exceptional service and ensuring that our guests feel valued and appreciated during their time with us. I thank you for choosing our hotel and I look forward to welcoming you in person. If there is anything I can do to make your stay even more special, please do not hesitate to reach out to me.
                    <br></br>
                    Best regards,
                    <br></br>
                    Kumar Arpan Yadav 
                </p>
            </article>
        </div>
        </>
    )
}
