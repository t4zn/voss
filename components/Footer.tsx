'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl mb-4">VOSS</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Pure artesian water from the pristine wilderness of Norway
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm tracking-widest mb-4 text-white/80">PRODUCTS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Still Water</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Sparkling Water</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Flavored Water</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest mb-4 text-white/80">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-sm tracking-widest mb-4 text-white/80">FOLLOW</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 VOSS Water. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
