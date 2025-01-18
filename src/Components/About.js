import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <div>
            <p>
              I am <b>Bhavesh Choudhary</b>, a passionate and skilled{" "}
              <b>Full Stack Developer</b> from
              <b>Mumbai, India</b>. Currently pursuing a{" "}
              <b>Bachelor’s Degree in Computer Engineering (B.E.)</b>, I am in
              my final year of studies. With hands-on experience as a{" "}
              <b>Full Stack Developer Intern </b>
              at <b>Edureka</b>, I specialize in designing and developing
              innovative projects with
              <b> user-centric</b> and <b>visually appealing designs</b>.
            </p>
            <p>
              I am proficient in modern web development technologies and
              frameworks, including
              <b>MERN Stack (MongoDB, Express.js, React.js, Node.js)</b>, and
              possess a strong understanding of both <b>front-end</b> and{" "}
              <b>back-end development</b>. My ability to create efficient and
              scalable applications is matched by my eagerness to contribute to{" "}
              <b> impactful projects </b>
              and <b> learn continuously</b>.
              <div>
                <br />
                <h1>Achievement</h1>
                <br />
                <p>
                  In my college coding event, I was the <b>runner-up</b>,
                  winning a prize of <b>₹10,000</b>. This achievement helped me
                  develop valuable <b>teamwork</b> skills and strengthened my{" "}
                  <b>dedication</b> towards my work.
                </p>
                <p>
                  During my internship at <b>Edureka</b>, I was recognized as a{" "}
                  <b>Super Intern</b>, which was a significant milestone in my
                  career and helped me gain hands-on experience in real-world
                  projects.
                </p>
              </div>
              <br />
            </p>
            <a
              href="https://www.linkedin.com/in/bhaveshchoudhary2001/"
              target="_blank"
            >
              Linkedin.
            </a>
          </div>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="Java" />
        <Skills skill="SQL" />
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Javascript" />
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Tailwind" />
        <Skills skill="Bootstrap" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Postman" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;
