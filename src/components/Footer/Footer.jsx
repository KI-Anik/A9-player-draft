
const Footer = () => {
    return (
        <div className="bg-black p-4 pt-44 mx-[-200px]">
            <img className="mx-auto" src="/src/assets/logo-footer.png" alt="" />
            <footer className="footer justify-between p-8 container mx-auto text-white">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <form>
                    <h6 className="footer-title">Subscribe</h6>
                    <fieldset>
                        <label className="label">
                            <span className="">Subscribe to our newsletter for <br /> the latest updates.</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <hr className="w-1/2 mx-auto" />
            <p className="text-center text-white bg-black p-4">@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;