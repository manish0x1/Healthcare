const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* --------------left section-------------- */}
        <div>
          {/* Replaced logo image with simple text */}
          <h1 className="text-2xl font-bold mb-5 cursor-pointer">
            Healthcare
          </h1>

          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Healthcare: Bridging the gap between doctors and patients with
            seamless appointment management, secure prescriptions, and
            personalized healthcare solutions. Your health, our priority.
          </p>
        </div>

        {/* --------------center section-------------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* --------------right section-------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li> Call: +91 12345 67891 </li>

            <li>help@healthcare.com</li>
          </ul>
        </div>

      </div>

      {/* -----------copy right text--------- */}
      <hr />
      <p className="py-5 text-sm text-center">
        Copyright © 2025 - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
