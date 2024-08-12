import { Button } from '@/components/ui/button';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main className='flex-1'>
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <img width='60' height='50' src='/logo.svg' alt='logo'/>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Link href='/dashboard'>
          <Button className="hidden lg:inline-flex">Try Now</Button>
        </Link>
      </header>
      
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-primary-foreground">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unleash Your Creativity with Mind Munch
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Mind Munch is an AI-powered content generation tool that helps you create engaging blog posts,
                    social media content, and more with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Try It Now
                    </Button>
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm text-primary font-medium shadow-sm transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/MindMunchHero.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: 'Blog Titles', icon: '📝' },
                { title: 'Blog Content', icon: '📄' },
                { title: 'Instagram Captions', icon: '📸' },
                { title: 'Hashtags', icon: '🏷️' },
                { title: 'YouTube Titles', icon: '🎥' },
                { title: 'Generate Code', icon: '💻' },
                { title: 'Explain Code', icon: '🔍' },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at ipsum at odio suscipit malesuada.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id='how-it-works' className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-10 md:space-y-0">
              <div className="md:w-1/2">
                <img src="/MindMunchHowitworks.jpg" alt="How It Works" className="w-full rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2">
                <ol className="list-decimal list-inside space-y-4">
                  <li className="text-lg">Select the type of content you need.</li>
                  <li className="text-lg">Enter relevant keywords or prompts.</li>
                  <li className="text-lg">Receive high-quality content generated by AI.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { name: 'Jane Doe', feedback: 'Mind Munch has revolutionized the way I create content. It\'s fast, easy, and incredibly accurate.' },
                { name: 'John Smith', feedback: 'As a content creator, Mind Munch has saved me hours of work. Highly recommend!' },
                { name: 'Sarah Lee', feedback: 'The AI-generated content is top-notch and always on point. Mind Munch is a game-changer.' },
              ].map((testimonial) => (
                <div key={testimonial.name} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-600 mb-4">&quot;{testimonial.feedback}&quot;</p>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id='pricing' className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Plans</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
              {[
                { plan: 'Basic', price: 'Free', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
                { plan: 'Pro', price: 'Rs. 120/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
              ].map((pricing) => (
                <div key={pricing.plan} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">{pricing.plan}</h3>
                  <p className="text-xl font-bold text-purple-600 mb-6">{pricing.price}</p>
                  <ul className="space-y-2 mb-6">
                    {pricing.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                  <a href="#" className="bg-purple-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-purple-700 transition duration-300">Choose Plan</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg">Have any questions or need support?</p>
              <p className="text-lg">Email us at <a href="mailto:support@mindmunch.com" className="text-purple-600 font-semibold">support@mindmunch.com</a></p>
              <div className="flex space-x-4">
                <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-300">Twitter</a>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-300">Facebook</a>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-300">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 bg-gray-800 text-gray-400">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Mind Munch. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
