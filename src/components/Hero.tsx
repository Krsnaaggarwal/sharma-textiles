import { ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-900 via-warm-800 to-primary-900" />
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd46e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cream-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-cream-400/15 border border-cream-400/25 text-cream-300 px-4 py-2 rounded-full text-sm font-body font-medium">
              <Sparkles size={14} className="text-cream-400" />
              Trusted Since 1975
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream-50 leading-[1.1]">
              Where Tradition
              <span className="block text-cream-400 mt-2">Meets Elegance</span>
            </h1>

            <p className="font-body text-warm-300 text-base sm:text-lg max-w-lg leading-relaxed">
              Discover our exquisite collection of premium sarees, silk fabrics, and designer textiles — handpicked from the finest weavers across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 bg-cream-400 text-warm-900 px-8 py-3.5 rounded-full font-body font-semibold text-base hover:bg-cream-300 transition-all duration-300 hover:shadow-xl hover:shadow-cream-400/25 hover:-translate-y-0.5"
              >
                Explore Collection
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-cream-400/40 text-cream-200 px-8 py-3.5 rounded-full font-body font-medium text-base hover:border-cream-400 hover:text-cream-100 hover:bg-cream-400/10 transition-all duration-300"
              >
                Visit Our Store
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <span className="font-display text-2xl sm:text-3xl font-bold text-cream-300">500+</span>
                <p className="font-body text-warm-400 text-sm">Fabric Varieties</p>
              </div>
              <div className="w-px h-12 bg-warm-600" />
              <div>
                <span className="font-display text-2xl sm:text-3xl font-bold text-cream-300">10K+</span>
                <p className="font-body text-warm-400 text-sm">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-warm-600" />
              <div>
                <span className="font-display text-2xl sm:text-3xl font-bold text-cream-300">50+</span>
                <p className="font-body text-warm-400 text-sm">Years Legacy</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful Indian saree display"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-warm-800/90 backdrop-blur-sm border border-warm-600/50 rounded-xl p-5 shadow-xl">
              <p className="font-display text-cream-300 font-semibold text-lg">New Arrivals</p>
              <p className="font-body text-warm-300 text-sm">Banarasi Silk Collection</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-cream-400 text-warm-900 rounded-xl p-4 shadow-xl">
              <p className="font-display font-bold text-lg">Festive</p>
              <p className="font-body text-sm font-medium">Sale 30% Off</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
