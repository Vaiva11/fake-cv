import React from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import './index.scss';

function App() {
  return (
    <React.Fragment>
      <section className="App">
        <header className="Header">
          <h1>Vaiva Gr</h1>
          <hr />
          <p className="Header--contact">Phone: +370123456</p>
          <p className="Header--contact">
            Email:
            <a
              href="mailto: vaiva.gri@gmail.com"
              target="blank_"
              rel="noopener norefferer"
            >
              vaiva.gribauskaite@gmail.com
            </a>
          </p>
          <p className="Header--summary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsumm.
          </p>
          <img
            className="Header--profile-pic"
            alt="kittyy"
            src="https://static1.squarespace.com/static/5a26bc7451a584c4421507c7/t/5a28b3f8652deabe5e26f57c/1512780740388/1d83e0f607b7b1de607fff558a573b6c--cat-smile-smile-smile.jpg"
          />
        </header>
        <main>
          <section className="Section">
            <div className="Section--left">
              <h3>Education</h3>
            </div>
            <div className="Section--right">
              <h3>CodeAcademy</h3>
              <p>
                <span>Major:</span> Kompiuterine fizika ir modeliavimas
              </p>
              <p>
                <span>Minor:</span> Telekomunikacijos ir inzinerija
              </p>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Skills</h3>
            </div>
            <div className="Section--right">
              <div>
                <h3>Offise skills:</h3>
                <p>Dancing, physics, snowboarding</p>
              </div>
              <div>
                <h3>Computer skills:</h3>
                <p>HTML, CSS, JS, Node.js, React</p>
              </div>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Experience</h3>
            </div>
            <div className="Section--right">
              <div>
                <div className="Section--right--job-title">
                  <h3>CodeAcademy</h3>
                  <span>Best student, 2018.09.11-present</span>
                </div>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
              <div>
                <div>
                  <div className="Section--right--job-title">
                    <h3>Tomo Petreikio sokiu studija</h3>
                    <span>Best student, 2010-present</span>
                  </div>
                  <ul>
                    <li>Valsas</li>
                    <li>Tango</li>
                    <li>Salsa</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Hobbies</h3>
            </div>
            <div className="Section--right">
              <p>I like money</p>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Reference</h3>
            </div>
            <div className="Section--right">
              <p>I need money</p>
            </div>
          </section>
        </main>
      </section>
      <footer className="Footer">
        <FaGithubAlt />
        <FaLinkedinIn />
      </footer>
    </React.Fragment>
  );
}

export default App;
