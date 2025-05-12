import React from 'react';
import './Css/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h2>My Company</h2>
                    <p>Geleceği birlikte şekillendiren yaratıcı çözümler sunuyoruz.</p>
                </div>

                <div className="footer-section links">
                    <h3>Bağlantılar</h3>
                    <ul>
                        <li><a href="/about">Hakkımızda</a></li>
                        <li><a href="/about">Hizmetler</a></li>
                        <li><a href="/about">Referanslar</a></li>
                        <li><a href="/about">İletişim</a></li>
                    </ul>
                </div>

                <div className="footer-section social">
                    <h3>Bizi Takip Edin</h3>
                    <div className="social-icons">
                        <a href="/about"><FaFacebookF /></a>
                        <a href="/about"><FaTwitter /></a>
                        <a href="/about"><FaInstagram /></a>
                        <a href="/about"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} My Company. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
