import './Header.css';
import { BASE_URL } from '../../URL';
function Header(){
    return(
        <>
        <div id="header">
        <div id="headerContent">
            <h2>Be a Part of Something Bigger with Jansahyog.</h2>
            <p>Bridging the gap between those who can and those who need.</p>
            <button><a href={`${BASE_URL}register`}>Join Us</a></button>
        </div>
        </div>
        </>
    )
}
export default Header;
