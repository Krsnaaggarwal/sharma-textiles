import { ShoppingBag, Heart, Star } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Banarasi Silk Saree',
    category: 'Silk Sarees',
    price: '\u20B94,999',
    originalPrice: '\u20B97,499',
    image: 'https://www.pexels.com/photo/close-up-of-silk-saree-with-traditional-pattern-10317106?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Chanderi Cotton Suit',
    category: 'Suit Materials',
    price: '\u20B92,499',
    originalPrice: '\u20B93,999',
    image: 'https://www.pexels.com/photo/elegant-indian-woman-in-traditional-saree-29049358?auto=compress&cs=tinysrgb&w=600',
    rating: 4.6,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Pure Linen Fabric',
    category: 'Plain Fabrics',
    price: '\u20B9799',
    originalPrice: '\u20B91,299',
    image: 'https://www.pexels.com/photo/stacks-of-colorful-fabric-displayed-on-store-shelves-18359549?auto=compress&cs=tinysrgb&w=600',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Kanjeevaram Saree',
    category: 'Silk Sarees',
    price: '\u20B96,499',
    originalPrice: '\u20B99,999',
    image: 'https://www.pexels.com/photo/28943531?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    badge: 'Premium',
  },
  {
    id: 5,
    name: 'Georgette Embroidered',
    category: 'Designer Sarees',
    price: '\u20B93,299',
    originalPrice: '\u20B95,499',
    image: 'https://www.pexels.com/photo/27564039?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Cotton Printed Kurti',
    category: 'Kurtis',
    price: '\u20B91,299',
    originalPrice: '\u20B91,999',
    image: 'https://www.pexels.com/photo/portrait-of-indian-woman-wearing-blue-dress-15613165?auto=compress&cs=tinysrgb&w=600',
    rating: 4.4,
    badge: 'Trending',
  },
];

const categories = ['All', 'Silk Sarees', 'Designer Sarees', 'Suit Materials', 'Plain Fabrics', 'Kurtis'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const toggleFav = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-body text-primary-600 text-sm font-semibold tracking-wider uppercase">
            Our Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-900 mt-3">
            Handpicked Fabrics & Sarees
          </h2>
          <p className="font-body text-warm-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Each piece in our collection tells a story of craftsmanship, woven with love by artisans who have kept traditions alive for generations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-warm-900 text-cream-200 shadow-md'
                  : 'bg-white text-warm-700 hover:bg-warm-100 border border-warm-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-warm-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {product.badge && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full font-body text-xs font-semibold ${
                    product.badge === 'Bestseller'
                      ? 'bg-cream-400 text-warm-900'
                      : product.badge === 'New'
                      ? 'bg-emerald-400 text-emerald-900'
                      : product.badge === 'Premium'
                      ? 'bg-primary-400 text-white'
                      : 'bg-accent-400 text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}

                <button
                  onClick={() => toggleFav(product.id)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                  aria-label="Toggle favorite"
                >
                  <Heart
                    size={16}
                    className={`transition-colors ${
                      favorites.has(product.id) ? 'fill-accent-500 text-accent-500' : 'text-warm-500'
                    }`}
                  />
                </button>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-warm-900/90 backdrop-blur-sm text-cream-100 w-full py-2.5 rounded-xl font-body text-sm font-medium hover:bg-warm-900 transition-colors"
                  >
                    <ShoppingBag size={15} />
                    Enquire Now
                  </a>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < Math.floor(product.rating)
                          ? 'fill-cream-400 text-cream-400'
                          : 'text-warm-300'
                      }
                    />
                  ))}
                  <span className="font-body text-warm-500 text-xs ml-1">
                    {product.rating}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-warm-900">
                  {product.name}
                </h3>
                <p className="font-body text-warm-500 text-sm mt-1">
                  {product.category}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="font-body text-warm-900 font-bold text-lg">
                    {product.price}
                  </span>
                  <span className="font-body text-warm-400 line-through text-sm">
                    {product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-warm-900 text-cream-200 px-8 py-3.5 rounded-full font-body font-semibold hover:bg-warm-800 transition-all duration-200 hover:shadow-lg"
          >
            View Full Collection
            <ShoppingBag size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
