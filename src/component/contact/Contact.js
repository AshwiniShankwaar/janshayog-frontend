import "./Contact.css";
function Contact(){
    return(
        <>
          <div id="footer">
            <div id="content">
                <h1>name of the project</h1>
                <h3>tagline of the project</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. </p>
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