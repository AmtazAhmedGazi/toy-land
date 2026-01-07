import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "react-toastify";

const NewsletterSignup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Congratulations! Welcome to our Community.");
  };

  return (
    <div className=" from-[#F0FFF4] to-[#E6FFFA] py-16 px-5 md:px-10 lg:px-20 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12 text-center border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Stay Connected With ToyTopia
        </h2>
        <p className="text-gray-600 mb-8">
          Join our newsletter to get the latest updates on new toys, exclusive
          deals, and heartwarming stories from our community. Be part of a
          playful world — made just for families like yours!
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <div className="col-span-1 md:col-span-2">
            <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
              <Mail size={18} /> Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
              <MapPin size={18} /> Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="123 Main St, City"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
              <Phone size={18} /> Phone Number
            </label>
            <input
              type="tel"
              name="number"
              placeholder="+880 1234 567890"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div className="col-span-1 md:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-[#263950] text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-all duration-200"
            >
              <Send size={18} />
              Subscribe Now
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          We respect your privacy. You can unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
