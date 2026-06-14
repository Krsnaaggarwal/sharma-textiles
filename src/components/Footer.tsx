export default function Footer() {
  return (
    <footer className="bg-warm-900 border-t border-warm-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-cream-400 flex items-center justify-center">
                <span className="font-display text-warm-900 font-bold text-sm">ST</span>
              </div>
              <span className="font-display text-lg font-bold text-cream-100">
                Sharma Textiles
              </span>
            </div>
            <p className="font-body text-warm-400 text-sm leading-relaxed max-w-xs">
              Three generations of trust. Premium fabrics and sarees from the finest weavers of India.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-cream-200 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {['Home', 'Products', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="font-body text-warm-400 hover:text-cream-300 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-cream-200 mb-4 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {['Silk Sarees', 'Cotton Sarees', 'Suit Materials', 'Kurtis', 'Fabrics'].map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    className="font-body text-warm-400 hover:text-cream-300 text-sm transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-cream-200 mb-4 uppercase tracking-wider">
              Store Address
            </h4>
            <p className="font-body text-warm-400 text-sm leading-relaxed">
              Shop No. 12, Johari Bazaar<br />
              Near Tripolia Gate<br />
              Jaipur, Rajasthan 302003
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-warm-500 text-sm">
            &copy; {new Date().getFullYear()} Sharma Textiles. All rights reserved.
          </p>
          <p className="font-body text-warm-500 text-sm">
            Made with love in Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
}
