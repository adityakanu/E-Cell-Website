import Facebook from "../assets/facebookLogo.png";
import Instagram from "../assets/instagramLogo.png";
import Linkedin from "../assets/linkedInLogo.png";
import Twiter from "../assets/twiterLogo.png";
export default function ReachOut() {
  return (
    <section id="ReachOut">
      <div className="reachOutContainer flex bg-white p-10">
        <div className="reachOutInnerContainer">
          <div className="bg-grey">f</div>
          <div className="bg-black text-white reachOut-address">
            <h1>Reach out to us</h1>
            <br />
            <h3>Address</h3>
            <p>
              E-CELL, RIC Center, Computer ScienceDepartment, NIT, Agartala,
              Tripura 799046
            </p>
            <br />
            <h3>Contact</h3>
            <p>+91 88809 89098</p>
            <br />
            <h3>E-Mail</h3>
            <p>ecellnita@gmail.com</p>
            <div className="socialMedia flex">
              <a href="https://www.facebook.com/ecellnita/">
                <img src={Facebook} alt="" />
              </a>
              <a href="https://www.instagram.com/ecellnita/">
                <img src={Instagram} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/ecellnita/">
                <img src={Linkedin} alt="" />
              </a>
              <a href="https://twitter.com/ecellnita">
                <img src={Twiter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contactUs flex  bg-black p-10 text-White ">
        <div id="map" class="flex inline-block">
          <iframe
            src="https://www.google.com/maps/place/E-CELL,+NIT+Agartala/@23.840679,91.423346,15z/data=!4m6!3m5!1s0x3753ed686722f717:0x18d822d15feb14af!8m2!3d23.8406785!4d91.4233464!16s%2Fg%2F11g24q3qqm?hl=en&entry=ttu"
            height="300"
            width="400"
            frameborder="0"
          ></iframe>

          <div className="p-10 grid content-start text-white">
            <h3>Address</h3>
            <p>
              E-CELL, RIC Center, Computer ScienceDepartment, NIT, Agartala,
              Tripura 799046
            </p>
            <br />
            <h3>Contact</h3>
            <p>+91 88809 89098</p>
            <br />
            <h3>E-Mail</h3>
            <p>ecellnita@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
