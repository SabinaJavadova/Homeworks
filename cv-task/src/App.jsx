import { useState } from 'react';
import './App.css';
import './assets/sass/style.scss';

function App() {
  const [cv, setCv] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCv(file);
    }
  };


  const handleDownload = () => {
    if (cv) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(cv); 
      link.download = cv.name; 
      link.click(); 
    }
  };

  return (
    <>
      <header>
        <nav>
          <h1>My Portfolio</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="https://todo-sabina.netlify.app/">Projects</a></li>
            <li><a href="#cv-upload">Upload your cv</a></li>
          </ul>
        </nav>
      </header>

      <div id="hero">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="box">
          <div className="imge">
            <img src="https://pics.craiyon.com/2024-09-02/Q4ieBl6bSoS3k1skvc7aOg.webp" alt="" />
          </div>
          <h1>Sabina Javadova</h1>
          <h3>Student, Web Developer</h3>
        </div>
      </div>
  
      <section id="skills">
        <h2>Skills</h2>
        <div className="cards">
          <div className="card">
            <div className="imge">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" alt="" />
            </div>
            <p>HTML</p>
          </div>
          <div className="card">
            <div className="imge">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png" alt="" />
            </div>
            <p>CSS</p>
          </div>
          <div className="card">
            <div className="imge">
              <img src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className="card">
            <div className="imge">
              <img src="https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png" alt="" />
            </div>
            <p>React</p>
          </div>
          <div className="card">
            <div className="imge">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="" />
            </div>
            <p>Python</p>
          </div>
          <div className="card">
            <div className="imge">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="" />
            </div>
            <p>Java</p>
          </div>
        </div>
      </section>
      <section id="cv-upload">
        <h2>Upload Your CV</h2>
        <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
        <button onClick={handleDownload} className="cta">
          {cv ? 'Download CV' : 'No CV Selected'}
        </button>
      </section>
      <section id="about">
        <div className="about-container">
          <div className="image-wrapper">
            <img src="https://pics.craiyon.com/2024-09-02/Q4ieBl6bSoS3k1skvc7aOg.webp" alt="Sabina Javadova" />
          </div>

          <div className="text-wrapper">
            <h2>About Me</h2>
            <p>
              Hi, I'm Sabina! A passionate and creative web developer with a strong background in building user-friendly websites and applications.
              I am currently studying Information Technology at Azmiu, where I dive deep into the world of coding, design, and development. 
              I have always been fascinated by technology, and my journey has led me to develop skills in web development and design, where I enjoy creating beautiful and functional websites that stand out.

              In my free time, I love to explore new tech trends, sketch digital illustrations, and learn new skills to improve my craft. I'm always seeking inspiration from the world around me and am excited to continue growing as a developer.
            </p>
            <a href="https://todo-sabina.netlify.app/" className="cta">View My Projects</a>
          </div>
        </div>
      </section>

      {}
     
    </>
  );
}

export default App;
