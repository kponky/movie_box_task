export default function Footer() {
    return (
      <div className="pt-20 text-center">
        <div className="flex justify-center items-center">
          <img src="/assets/facebook.png" alt="facebook logo" />
          <img
            src="/assets/instagram.png"
            alt="instagram logo"
            className="ml-2"
          />
          <img
            src="/assets/twitter.png"
            alt="twitter logo"
            className="ml-2"
          />
          <img
            src="/assets/youtube.png"
            alt="youtube logo"
            className="ml-2"
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          <h5>Conditions of Use</h5>
          <h5 className="ml-5">Privacy Policy</h5>
          <h5 className="ml-5">Press Room</h5>
        </div>
  
        <p className="mt-5 text-gray-400">&copy; 2023 MovieBox by hokageCodes</p>
      </div>
    );
  }