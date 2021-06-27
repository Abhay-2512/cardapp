import './App.css';
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import image01 from './images/12344.jpg';
import image02 from './images/avtaar.jpg';
import image03 from './images/bg03.jpg';

function App() {
  return (
    <main>
      <div class="heading">
        <h1>HIGHLIGHTS</h1>
        <hr />
      </div>
      <div class="main">
        <div class="block">
          <section>
          </section>
          <div class="card">
            <div class="card-img">
              <div class="social">
                <div class="social-icon colorchange"><FaWhatsapp /></div>
                <div class="social-icon colorchange"><FaTwitter /></div>
                <div class="social-icon colorchange"><FaFacebookF /></div>
              </div>
              <img src={image01} alt=""
                class="card-pics" />
            </div>
            <div class="card-info">
              <div class="card-person-info">
                <div class="person-avtar borderchange">
                  <img src={image02} alt="pic1"
                    class="card-info-pic" />
                </div>

                <div>
                  <h4>Abhay</h4>
                  <p>Manager</p>
                </div>

              </div>
              <div class="card-info-menu">
                <h2>
                  ...
                 </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="block">
          <section class="section2">
          </section>
          <div class="card">
            <div class="card-img">
              <div class="social">
                <div class="social-icon"><FaWhatsapp /></div>
                <div class="social-icon"><FaTwitter /></div>
                <div class="social-icon"><FaFacebookF /></div>
              </div>
              <img src={image03} alt=""
                class="card-pics" />
            </div>
            <div class="card-info">
              <div class="card-person-info">
                <div class="person-avtar">
                  <img src={image02} alt="pic1"
                    class="card-info-pic" />
                </div>
                <div>
                  <h4>Paras</h4>
                  <p>UI Developer</p>
                </div>

              </div>
              <div class="card-info-menu">
                <h2>
                  ...
                                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
