import './Footer.css'
import { footerQuote } from '../../portfolio';

const Footer = () => (
  <footer className='footer'>
    {footerQuote()}
  </footer>
)

export default Footer
