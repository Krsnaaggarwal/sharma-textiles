import { Award, Shield, HeartHandshake, Truck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Every fabric is quality-checked to ensure you receive only the finest materials.',
  },
  {
    icon: Shield,
    title: 'Authentic Guarantee',
    description: 'Certified genuine silk and handloom products with authenticity certificates.',
  },
  {
    icon: HeartHandshake,
    title: 'Family Legacy',
    description: 'Three generations of trust, serving families across India since 1975.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Free delivery on orders above \u20B92,000 with easy return policy.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/31508152/pexels-photo-31508152.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Traditional handloom weaving in workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                <img
                  src="https://images.pexels.com/photos/10317127/pexels-photo-10317127.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Close-up of traditional Indian textile with intricate patterns"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-warm-900 text-cream-100 rounded-xl px-8 py-4 shadow-xl">
              <p className="font-display text-3xl font-bold text-cream-400">50+</p>
              <p className="font-body text-sm text-warm-300">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="font-body text-primary-600 text-sm font-semibold tracking-wider uppercase">
                About Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-900 mt-3">
                A Legacy Woven in Trust
              </h2>
              <p className="font-body text-warm-600 mt-6 text-base sm:text-lg leading-relaxed">
                Founded in 1975 by Shri Ramesh Sharma, Sharma Textiles has grown from a small shop in the bustling lanes of Jaipur to one of the most trusted names in premium textiles. We believe every fabric carries the soul of its weaver.
              </p>
              <p className="font-body text-warm-600 mt-4 text-base sm:text-lg leading-relaxed">
                Today, the third generation continues the tradition, bringing you authentic handloom sarees, silk fabrics, and designer materials sourced directly from master weavers in Varanasi, Kanchipuram, and beyond.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cream-200 flex items-center justify-center">
                    <Icon size={20} className="text-warm-700" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-warm-900">
                      {title}
                    </h3>
                    <p className="font-body text-warm-500 text-sm mt-1">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
