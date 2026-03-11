'use client'

import { motion } from 'framer-motion'

const products = [
  {
    name: 'VOSS Still',
    description: 'Pure artesian water from Norway',
    image: '/products/still.jpg'
  },
  {
    name: 'VOSS Sparkling',
    description: 'Lightly carbonated perfection',
    image: '/products/sparkling.jpg'
  },
  {
    name: 'VOSS Flavored',
    description: 'Naturally infused essence',
    image: '/products/flavored.jpg'
  }
]

export default function ProductsSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl text-gray-900 mb-3 md:mb-4">
            Our Collection
          </h2>
          <p className="text-gray-600 text-base md:text-lg tracking-wide">
            Discover the full range of VOSS water
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-glacier/20 mb-4 md:mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-48 md:w-32 md:h-64 bg-gradient-to-b from-glacier/40 to-glacier/60 rounded-full" />
                </div>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 tracking-wide text-sm md:text-base">
                {product.description}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-3 md:mt-4 text-gray-900 tracking-widest text-xs md:text-sm border-b border-gray-900 pb-1"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
