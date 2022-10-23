import "./ContactSection.css";
import ReturnToShip from "../../components/ReturnToShip/ReturnToShip";

function ContactSection({exitSection}) {
    return (
        <div className="section contact-section">
            <div className="section-header">
                <h2 className="section-title">Contact</h2>
                <ReturnToShip exitSection={exitSection}/>
            </div>
            <p className="section-text"><span style={{fontWeight: 700}}>Email: </span>nationsgrant@gmail.com</p>
            <p className="section-text"><span style={{fontWeight: 700}}>LinkedIn: </span><a className="link" href="https://www.linkedin.com/in/grant-nations/">www.linkedin.com/in/grant-nations/</a></p>
            <p className="section-text"><span style={{fontWeight: 700}}>GitHub: </span><a className="link" href="https://github.com/grant-nations">github.com/grant-nations</a></p>
        </div>
    )
}

export default ContactSection;
