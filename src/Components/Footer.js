import '../Footer.css'
function Footer()
{
    return (
        <div className="footer">
            <div className="footer-section-padding">
                <div className="footer-links">
                    <div className="footer-links-div">
                        <h4>For Buisness</h4>
                        <p>Store</p>
                        <p>Customer</p>
                        <p>Subscription</p>
                    </div>
                    <div className="footer-links-div">
                        <h4>Resources</h4>
                        <p>Resource Center</p>
                        <p>STV</p>
                        <p>Other</p>
                    </div>
                    <div className="footer-links-div">
                        <h4>Partners</h4>
                        <p>Google</p>
                        
                    </div>
                    <div className="footer-links-div">
                        <h4>Company</h4>
                        <p>Press</p>
                        <p>Career</p>
                        <p>Contact</p>
                        
                    </div>
                </div>
                <hr />
                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>
                            @{new Date().getFullYear()} .All right resesrved.
                        </p>
                    </div>
                    <div className="footer-below-links">
                        <p>Terms & Conditions</p>
                        <p>Privacy</p>
                        <p>Security</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;