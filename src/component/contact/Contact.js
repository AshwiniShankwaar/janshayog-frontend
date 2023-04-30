import "./Contact.css";
function Contact(){
    return(
        <>
          <div id="footer">
            <div id="content">
                <h1>JanSahyog</h1>
                <h6>Bridging the gap between those who have and those who need.</h6>
                <p>JanSahyog is a Web-based platform, which connect peoples those are in need with those who can help.
                    
                </p>
                    <div id="social">
                    <h2>Follow us at</h2>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
            </div>
            <div id="contactform">
                <form>
                    <input type="text" name="name" id="contactInput" placeholder="Your name" required/>
                    <input type="text" name="email" id="contactInput" placeholder="Your email" required/>
                    <textarea id="message" name="message" placeholder="Your message" rows="6" cols="60"></textarea>
                    <button type="submit">
                    <i className="fas fa-paper-plane"></i> Submit
                    </button>

                </form>
            </div>
          </div>
        </>
    )
}
export default Contact