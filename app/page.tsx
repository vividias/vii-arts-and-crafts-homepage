'use client'


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Heart, Sparkles, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useTranslation } from 'react-i18next'
import { creations } from "@/data/creationsData";
import { shopItems } from "@/data/shopData";
import { appWithTranslation } from 'next-i18next'
import '../i18n'


// Add custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
)

const InstaIcon =  ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
     <path d="M7 2.75h10A4.25 4.25 0 0 1 21.25 7v10A4.25 4.25 0 0 1 17 21.25H7A4.25 4.25 0 0 1 2.75 17V7A4.25 4.25 0 0 1 7 2.75Zm0 1.5A2.75 2.75 0 0 0 4.25 7v10A2.75 2.75 0 0 0 7 19.75h10A2.75 2.75 0 0 0 19.75 17V7A2.75 2.75 0 0 0 17 4.25H7Z" />
  <path d="M12 6.75a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
  <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
)

function Home() {
  const { t } = useTranslation('common')

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50">

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-purple-300 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-purple-900">vii arts</h1>
              <p className="text-sm text-orange-700">& crafts</p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex space-x-6 text-purple-900 font-medium">
            <a
              href="#shop"
              className="hover:text-orange-500 transition-colors"
            >
              Shop
            </a>
            <a
              href="#creations"
              className="hover:text-orange-500 transition-colors"
            >
              Creations
            </a>
            <a
              href="#contact"
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="container mx-auto px-6 py-5 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Circle with your photo */}
              <div className="w-32 h-32 bg-gradient-to-br from-orange-200 via-purple-200 to-pink-200 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src="/images/vii.jpeg"
                  alt="Viviana"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-orange-400" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <Heart className="w-6 h-6 text-pink-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-purple-900 mb-6">
            <span className="text-orange-400">vii arts</span>
            <br />
            <span className="text-purple-800">& crafts</span>
          </h1>
          <p className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('intro.text')}
          </p>
        </div>
        
      </section>

      {/* Shop Section */}
      <section id="shop" className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-purple-900 mb-6">Shop</h2>

          {/* New item(s) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {shopItems.map((item) =>
              item.comingSoon ? (
                // Coming soon card
                <div
                  key={item.id}
                  className="bg-white/60 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="aspect-square relative bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center">
                    <span className="text-purple-400 text-2xl font-medium opacity-70">
                      Coming Soon
                    </span>
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-medium text-purple-900 mb-2">{item.title}</h3>
                    <p className="text-purple-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ) : (
                // Normal item card
                <div
                  key={item.id}
                  className="bg-white/60 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="aspect-square relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-medium text-purple-900 mb-2">{item.title}</h3>
                    {item.features && (
                      <ul className="text-purple-700 text-sm space-y-1">
                        {item.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    )}
                    {item.price && (
                      <p className="text-purple-900 font-semibold mt-3">{item.price}</p>
                    )}
                  </div>
                </div>
              )
            )}

          </div>
          
        </div>
      </section>

      {/* Creations Section */}
     <section id="creations" className="container mx-auto px-6 py-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-purple-900 text-center mb-12">
            My Creations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creations.map((item, index) => (
              <Card
                key={index}
                className="bg-white/60 border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1 relative"
              >
                <div className="aspect-square bg-gradient-to-br from-orange-100 via-purple-100 to-pink-100 relative">
                  {/* Show video or image */}
                  {item.isVideo ? (
                    <video
                      src={item.media}
                      className="absolute inset-0 w-full h-full object-cover"
                      controls
                    />
                  ) : (
                    <img
                      src={item.media}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  {/* badge always visible */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="text-xs bg-white/80 px-2 py-1 rounded-full text-purple-700 font-medium">
                      {item.type}
                    </span>

                    {item.availableInShop && (
                      <Link href="#shop" className="bg-white/80 rounded-full p-1 hover:bg-white transition">
                        <ShoppingBag size={16} className="text-purple-700" />
                      </Link>
                    )}
                  </div>

                  {/* overlay with title + description (hidden by default) */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light text-purple-900 mb-8">Let's Connect</h2>
          <p className="text-xl text-purple-700 mb-12">
            I'm currently accepting custom commissions ✨ whether you'd like to bring a personal idea to reality or have a piece featured in my collection. Feel free to reach out by email anytime.
          </p>

          <Card className="bg-white/60 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-purple-800">vii.artsycrafty@gmail.com</span>
                </div>

                <div className="flex justify-center space-x-4">
                 
                  <Link href="https://www.tiktok.com/@vii_artsycrafty" target="_blank">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <TikTokIcon className="w-6 h-6 mr-2" />
                    TikTok
                  </Button>
                  </Link>

                   <Link href="https://www.instagram.com/vii_artsycrafty/" target="_blank">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-400 to-orange-400 hover:from-purple-500 hover:to-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <InstaIcon className="w-6 h-6 mr-2" />
                    Instagram
                  </Button>
                  </Link>

                </div>

                <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg p-6 mt-6">
                  <p className="text-purple-800 font-medium mb-2">
                    <Heart className="w-5 h-5 inline mr-2 text-orange-400" />
                    Follow my creative journey!
                  </p>
                  <p className="text-sm text-purple-700">
                    Clay and painting creations and processes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-purple-300 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-orange-400 font-medium">vii arts</p>
            <p className="text-purple-800 text-sm">& crafts</p>
          </div>
        </div>
        <p className="text-purple-700 text-sm">© 2025 vii arts & crafts. Made with love and lots of clay dust ✨</p>
      </footer>
    </div>
  )
}

export default appWithTranslation(Home)
