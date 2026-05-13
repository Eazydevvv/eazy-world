'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FaWhatsapp,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket
} from 'react-icons/fa'

const projects = [
  {
    title: 'Eazy Shoes',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    link: 'https://eazy-shoes.vercel.app/'
  },
  {
    title: 'Glorious Twins Radio',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    link: 'https://www.glorioustwinsradio.com.ng/'
  },
  {
    title: 'Restaurant Concept',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    link: '#'
  }
]

const testimonials = [
  {
    name: 'Nova Restaurant',
    review:
      'The website completely changed our online presence.'
  },
  {
    name: 'Bright Academy',
    review:
      'Parents loved the modern portal experience.'
  },
  {
    name: 'Urban Cafe',
    review:
      'Fast, futuristic and mobile friendly.'
  }
]

const benefits = [
  {
    title: 'More Customers',
    desc: 'People can discover your business online.'
  },
  {
    title: 'Professional Branding',
    desc: 'Modern websites increase trust instantly.'
  },
  {
    title: 'Mobile Friendly',
    desc: 'Most customers browse from phones.'
  },
  {
    title: 'WhatsApp Integration',
    desc: 'Customers can contact you immediately.'
  },
  {
    title: 'Google Visibility',
    desc: 'Your business becomes easier to find.'
  },
  {
    title: 'Online Booking',
    desc: 'Automate reservations and registrations.'
  }
]

const pricing = [
  {
    title: 'Starter',
    price: '₦15k',
    desc: 'One page website'
  },
  {
    title: 'Business',
    price: '₦50k',
    desc: 'Professional multi-page website'
  },
  {
    title: 'Premium',
    price: '₦150k',
    desc: 'Advanced futuristic platform'
  }
]

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.3em] text-purple-400 mb-6">
              Eazy World
            </p>

            <h1 className="text-5xl md:text-8xl font-black leading-tight">
              FUTURISTIC
              <span className="text-purple-500">
                {' '}FULLSTACK{' '}
              </span>
              EXPERIENCES
            </h1>

            <p className="text-zinc-400 text-lg md:text-2xl mt-8 max-w-2xl">
              I build futuristic websites for restaurants,
              schools, businesses and brands.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition"
              >
                View Projects
              </a>

              <a
                href="https://wa.me/2348073042250"
                className="px-8 py-4 rounded-full border border-purple-500 hover:bg-purple-500/20 transition flex items-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp Me
              </a>

            </div>

            {/* STATS */}
            <div className="flex gap-8 mt-14 flex-wrap">

              <div>
                <h3 className="text-3xl font-black text-purple-400">
                  20+
                </h3>
                <p className="text-zinc-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-purple-400">
                  100%
                </h3>
                <p className="text-zinc-500">
                  Mobile Friendly
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-purple-400">
                  24/7
                </h3>
                <p className="text-zinc-500">
                  Support
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            <div className="absolute w-[350px] h-[350px] rounded-full bg-purple-600/40 blur-[100px]" />

            <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-4 overflow-hidden">

              <Image
                src="/me.jpeg"
                alt="Israel"
                width={420}
                height={520}
                className="rounded-[30px] object-cover"
              />

              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">
                <p className="text-sm text-zinc-400">
                  Fullstack Developer
                </p>

                <h3 className="font-bold text-lg text-white">
                  Israel Olalere
                </h3>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-10">
            About Me
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed">
            I’m a fullstack developer focused on building
            futuristic websites for restaurants, schools,
            brands and businesses. I combine modern UI,
            animations and performance to create experiences
            that stand out online.
          </p>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">
            Why Businesses Need A Website
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
              <FaLaptopCode className="text-5xl text-purple-400 mb-6" />

              <h3 className="text-3xl font-bold mb-4">
                Web Development
              </h3>

              <p className="text-zinc-400">
                Modern futuristic websites for businesses.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
              <FaMobileAlt className="text-5xl text-purple-400 mb-6" />

              <h3 className="text-3xl font-bold mb-4">
                Mobile Optimization
              </h3>

              <p className="text-zinc-400">
                Responsive websites optimized for all devices.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
              <FaRocket className="text-5xl text-purple-400 mb-6" />

              <h3 className="text-3xl font-bold mb-4">
                Fast Performance
              </h3>

              <p className="text-zinc-400">
                Lightning fast and optimized user experiences.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-32 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <a
                href={project.link}
                key={index}
                target="_blank"
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>
                </div>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">
            Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <p className="text-zinc-300">
                  “{item.review}”
                </p>

                <h3 className="mt-6 text-purple-400 font-bold">
                  {item.name}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">
            Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {pricing.map((plan, index) => (
              <div
                key={index}
                className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-10 text-center"
              >

                <h3 className="text-3xl font-bold mb-4">
                  {plan.title}
                </h3>

                <p className="text-6xl font-black text-purple-400 mb-6">
                  {plan.price}
                </p>

                <p className="text-zinc-400">
                  {plan.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6">

        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">

          <h2 className="text-5xl font-black mb-6">
            Let’s Build Something Crazy
          </h2>

          <p className="text-zinc-400 text-lg mb-10">
            Need a futuristic website for your business?
          </p>

          <div className="space-y-4">

            <a
              href="https://wa.me/2348073042250"
              className="block text-2xl text-purple-400"
            >
              WhatsApp: 08073042250
            </a>

            <a
              href="mailto:israelolalere124@gmail.com"
              className="block text-zinc-300"
            >
              israelolalere124@gmail.com
            </a>

          </div>

        </div>
      </section>

    </main>
  )
}