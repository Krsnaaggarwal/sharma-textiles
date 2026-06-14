import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-warm-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd46e' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-body text-cream-400 text-sm font-semibold tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mt-3">
            Visit Our Store
          </h2>
          <p className="font-body text-warm-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Come experience the texture and quality of our fabrics in person. Our team is always ready to help you find the perfect piece.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-warm-800/50 backdrop-blur-sm border border-warm-700/50 rounded-2xl p-8 text-center hover:bg-warm-800/70 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-cream-400/15 flex items-center justify-center mx-auto mb-5">
              <MapPin size={24} className="text-cream-400" />
            </div>
            <h3 className="font-display text-lg font-semibold text-cream-100">
              Our Location
            </h3>
            <p className="font-body text-warm-300 mt-3 text-sm leading-relaxed">
              Shop No. 12, Johari Bazaar<br />
              Near Tripolia Gate, Jaipur<br />
              Rajasthan 302003
            </p>
          </div>

          <div className="bg-warm-800/50 backdrop-blur-sm border border-warm-700/50 rounded-2xl p-8 text-center hover:bg-warm-800/70 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-cream-400/15 flex items-center justify-center mx-auto mb-5">
              <Clock size={24} className="text-cream-400" />
            </div>
            <h3 className="font-display text-lg font-semibold text-cream-100">
              Store Hours
            </h3>
            <div className="font-body text-warm-300 mt-3 text-sm space-y-1.5">
              <p>Mon - Sat: 10:00 AM - 9:00 PM</p>
              <p>Sunday: 11:00 AM - 7:00 PM</p>
              <p className="text-cream-400 font-medium">Open on all festivals!</p>
            </div>
          </div>

          <div className="bg-warm-800/50 backdrop-blur-sm border border-warm-700/50 rounded-2xl p-8 text-center hover:bg-warm-800/70 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-cream-400/15 flex items-center justify-center mx-auto mb-5">
              <Phone size={24} className="text-cream-400" />
            </div>
            <h3 className="font-display text-lg font-semibold text-cream-100">
              Contact Us
            </h3>
            <div className="font-body text-warm-300 mt-3 text-sm space-y-1.5">
              <a href="tel:+919876543210" className="hover:text-cream-400 transition-colors flex items-center justify-center gap-2">
                <Phone size={13} />
                +91 98765 43210
              </a>
              <a href="mailto:info@sharmatextiles.com" className="hover:text-cream-400 transition-colors flex items-center justify-center gap-2">
                <Mail size={13} />
                info@sharmatextiles.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-warm-800/40 backdrop-blur-sm border border-warm-700/40 rounded-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream-100">
                Get Exclusive Offers on WhatsApp
              </h3>
              <p className="font-body text-warm-300 mt-3 text-sm sm:text-base">
                Join our WhatsApp broadcast to receive first looks at new arrivals, festive discounts, and special member-only deals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a
                href="https://wa.me/919876543210?text=Hi%20Sharma%20Textiles!%20I%27m%20interested%20in%20your%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-body font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 border-2 border-cream-400/40 text-cream-200 px-8 py-3.5 rounded-full font-body font-medium hover:border-cream-400 hover:text-cream-100 hover:bg-cream-400/10 transition-all duration-200"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
