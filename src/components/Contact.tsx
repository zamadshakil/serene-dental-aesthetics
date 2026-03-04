import { motion } from 'framer-motion'
import { MapPin, Smartphone, Clock, Navigation } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-bg-light" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row"
        >
          {/* Info */}
          <div className="p-6 sm:p-10 lg:p-12 lg:w-1/2">
            <h2 id="contact-heading" className="text-2xl sm:text-3xl font-black text-primary mb-2">Visit Serene Dental Aesthetics</h2>
            <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">We'd love to welcome you. Walk-ins & appointments both available.</p>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-primary text-base sm:text-lg">Location</p>
                  <p className="text-slate-600 text-sm sm:text-base">Falcon Down Town CS-38, Phase 1 Fazaia Housing Society, Lahore</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0" aria-hidden="true">
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className="font-bold text-primary text-base sm:text-lg">Direct Line</p>
                  <a href="tel:03302737363" className="text-slate-600 hover:text-accent transition-colors text-sm sm:text-base font-medium">0330 2737363</a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0" aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-primary text-base sm:text-lg">Working Hours</p>
                  <p className="text-slate-600 text-sm sm:text-base">Mon - Sat: 3:00 PM - 9:00 PM</p>
                  <p className="text-slate-500 text-xs sm:text-sm italic mt-0.5">Emergency appointments available</p>
                </div>
              </div>
            </div>

            {/* Get Directions CTA — great for mobile */}
            <a
              href="https://www.google.com/maps/place/Serene+Dental+Aesthetics/data=!4m2!3m1!1s0x0:0x8d0a8e1e02301574"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all"
              aria-label="Get driving directions to Serene Dental Aesthetics (opens in Google Maps)"
            >
              <Navigation size={16} aria-hidden="true" />
              Get Directions
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:w-1/2 h-64 sm:h-80 lg:h-auto relative bg-slate-100 overflow-hidden lg:min-h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5!2d74.2306!3d31.3688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190324d2d49c3d%3A0x8d0a8e1e02301574!2sSerene%20Dental%20Aesthetics!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Serene Dental Aesthetics location on Google Maps — Fazaia Housing Society, Lahore"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
