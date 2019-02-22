import React from 'react';
import './index.scss';

function Main() {
  return (
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
  );
}

export default Main;
