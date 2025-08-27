export default function Footer() {
  return (
    <footer className="bg-gray-200 py-12">
      <div className="container mx-auto px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Gr<span className="text-orange-500">O</span>cify
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>
            <p className="text-gray-500 text-sm">2025 © All Right Reserved</p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  FAQ's
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Support center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Questions or Feedback? we'd love to hear from you.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
