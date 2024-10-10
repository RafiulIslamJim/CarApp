const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
    
    {/* Left Section: Logo and Vision */}
    <div className="flex flex-col items-start space-y-4 leading-relaxed">
      <h2 className="text-3xl font-bold text-blue-600">MORENT</h2>
      <p className="text-gray-500">
        Our vision is to provide convenience<br />
        and help increase your sales business.
      </p>
    </div>

    {/* Right Section: Links */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm leading-relaxed">
      {/* About Column */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900 leading-relaxed">About</h3>
        <ul className="text-[#90A3BF] space-y-1">
          <li>How it works</li>
          <li>Featured</li>
          <li>Partnership</li>
          <li>Business Relation</li>
        </ul>
      </div>
      
      {/* Community Column */}
      <div className="space-y-2">
        <h3 className="font-bold text-xl text-gray-900 leading-relaxed">Community</h3>
        <ul className="text-[#90A3BF] space-y-1">
          <li>Events</li>
          <li>Blog</li>
          <li>Podcast</li>
          <li>Invite a friend</li>
        </ul>
      </div>
      
      {/* Socials Column */}
      <div className="space-y-2">
        <h3 className="font-bold text-xl text-gray-900 leading-relaxed">Socials</h3>
        <ul className="text-[#90A3BF] space-y-1">
          <li>Discord</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Section: Copyright and Links */}
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-8 pt-4 font-bold text-xs leading-relaxed">
    <p>&copy;2022 MORENT. All rights reserved</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#" className="font-bold">Privacy & Policy</a>
      <a href="#" className="font-bold">Terms & Condition</a>
    </div>
  </div>
</footer>

  )
}

export default Footer
