import React from "react";
import "./Marquee.css";

// Import brand logos
import AppleLogo from "../../assets/images/Brand/apple.png";
import SamsungLogo from "../../assets/images/Brand/samsung.png";
import SonyLogo from "../../assets/images/Brand/sony.png";
import LGLogo from "../../assets/images/Brand/lg.png";
import HPLogo from "../../assets/images/Brand/hp.png";
import DellLogo from "../../assets/images/Brand/dell.png";
import AsusLogo from "../../assets/images/Brand/asus.jpeg";
import LenovoLogo from "../../assets/images/Brand/lenovo.png";
import MicrosoftLogo from "../../assets/images/Brand/microsoft.png";
import BoseLogo from "../../assets/images/Brand/bose.png";
import PanasonicLogo from "../../assets/images/Brand/panasonic.png";
import XiaomiLogo from "../../assets/images/Brand/xiaomi.png";
import NokiaLogo from "../../assets/images/Brand/nokia.png";
import BoatLogo from "../../assets/images/Brand/boat.png";
import OneplusLogo from "../../assets/images/Brand/oneplus.png";
import RealmeLogo from "../../assets/images/Brand/realme.png";
import NoiseLogo from "../../assets/images/Brand/noise.png";

const Marquee = () => {
  const brandLogos = [
    { name: "Apple", logo: AppleLogo },
    { name: "Samsung", logo: SamsungLogo },
    { name: "Sony", logo: SonyLogo },
    { name: "LG", logo: LGLogo },
    { name: "HP", logo: HPLogo },
    { name: "Dell", logo: DellLogo },
    { name: "Asus", logo: AsusLogo },
    { name: "Lenovo", logo: LenovoLogo },
    { name: "Microsoft", logo: MicrosoftLogo },
    { name: "Bose", logo: BoseLogo },
    { name: "Panasonic", logo: PanasonicLogo },
    { name: "Xiaomi", logo: XiaomiLogo },
    { name: "Nokia", logo: NokiaLogo },
    { name: "Boat", logo: BoatLogo },
    { name: "Noise", logo: NoiseLogo },
    { name: "Oneplus", logo: OneplusLogo },
    { name: "Realme", logo: RealmeLogo },
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          {brandLogos.map((brand, index) => (
            <div key={index} className="marquee-item">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
