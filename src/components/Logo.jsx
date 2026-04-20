import logoImg from '../assets/Logo.png'

const Logo = ({ size = 120, className = '' }) => (
  <img
    src={logoImg}
    alt="PT Nusa Prima Energi Indonesia"
    style={{ width: size, height: 'auto' }}
    className={`object-contain ${className}`}
  />
)

export default Logo

