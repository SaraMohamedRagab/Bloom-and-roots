const testimonials = [
    {
      id: 1,
      text: "The custom bouquet I ordered for my mother's birthday was absolutely stunning. She loved it! The flowers stayed fresh for over two weeks.",
      author: "Sarah Johnson",
      location: "New York"
    },
    {
      id: 2,
      text: "I've ordered plants from multiple online shops, but none compare to the quality from Bloom & Root. My monstera arrived perfectly packaged and healthy.",
      author: "Michael Chen",
      location: "San Francisco"
    },
    {
      id: 3,
      text: "Their ceramic pots are beautiful and unique. I've gotten so many compliments on them. Will definitely be ordering more in the future!",
      author: "Emma Williams",
      location: "Chicago"
    }
  ];
  
  const TestimonialSection = () => {
    return (
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-sage-600 max-w-xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about their Bloom & Root experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sage-700 italic mb-6">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-sage-800">{testimonial.author}</p>
                  <p className="text-sage-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;