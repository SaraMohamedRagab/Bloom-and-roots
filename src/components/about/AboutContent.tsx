const AboutContent = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-6 text-center">
            About Bloom & Root
          </h1>
          
          <div className="prose prose-lg max-w-none text-sage-700 space-y-8">
            <p>
              Welcome to Bloom & Root, where beauty meets nature. Since our humble beginnings in 2018, we've been dedicated to bringing the freshest, most beautiful plants and flowers into homes around the country.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-sage-700 mt-8">
              Our Story
            </h2>
            
            <p>
              Bloom & Root was born from a deep love of plants and a desire to share that passion with others. Our founder, Emma Chen, started the business from her small apartment, hand-selecting each plant and delivering them herself to local customers. As word spread about the exceptional quality and care of our products, we grew to become the thriving online and brick-and-mortar business we are today.
            </p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Bloom & Root Team"
                className="rounded-xl shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1528475881234-014ba9f2d2b0?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Our Greenhouse"
                className="rounded-xl shadow-md"
              />
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-sage-700 mt-8">
              Our Philosophy
            </h2>
            
            <p>
              At Bloom & Root, we believe that everyone deserves to have a piece of nature in their home. Plants aren't just beautiful decorations; they're living beings that improve air quality, reduce stress, and create a sense of peace and tranquility in any space.
            </p>
            
            <p>
              Each plant and bouquet that leaves our shop is carefully selected and nurtured. We work with responsible growers who share our commitment to sustainable practices. Our pots are sourced from talented artisans, and many of our supplies are locally made.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-sage-700 mt-8">
              Our Team
            </h2>
            
            <p>
              Our dedicated team of plant specialists, floral designers, and customer service representatives are united by one thing: a genuine passion for plants. From selecting the perfect specimens to designing stunning arrangements, every team member puts their heart into their work.
            </p>
            
            <p>
              We're not just sellers of plants—we're caretakers, educators, and fellow plant lovers. Our team is always available to offer advice on plant care, selection, and troubleshooting, ensuring that your green friends thrive in their new homes.
            </p>
            
            <div className="bg-cream-100 p-8 rounded-xl my-12">
              <h3 className="text-xl font-serif font-bold text-sage-700 mb-4">
                Our Commitment to Sustainability
              </h3>
              <p>
                We're dedicated to minimizing our environmental impact. That's why we use recyclable packaging, encourage reuse of pots and containers, and implement water conservation practices in our greenhouse.
              </p>
            </div>
            
            <p>
              Thank you for choosing Bloom & Root. We look forward to being part of your plant journey and bringing the joy of nature into your home.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutContent;