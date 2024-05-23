
import axios from "axios";
import { useState } from "react";

const Contact = () =>  {
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    dni: "",
    direccion: "",
    platform: "",
    file: ""
  });

  const handleFileChange = () => (e) => {
    setQuery((prevState) => ({
      ...prevState,
      files: e.target.files[0]
    }));
  };

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/8a375f0f-1748-4e5f-ac53-da63282411ea",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: ""
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className="App" name='contacto'>
      <section className="bg-gradient-to-b from-green-700 to-green-900 text-black py-20 px-4 md:px-8 h-screen">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <p className="text-lg">Let's get in touch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-green-950">
            <div className="bg-[#F6F6E9] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Let's Get In Touch</h3>
              <p className="mb-4">
                Located in the heart of the city, our tech hub is the go-to spot for innovation enthusiasts. We're open from Monday to Friday, 9 AM to 6 PM, ready to assist you with your tech needs.
              </p>
              <div className="flex items-center mb-4">
                <i className="fas fa-phone text-xl"></i>
                <span className="ml-3">(123) 456-7890</span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-envelope text-xl"></i>
                <span className="ml-3">info@innovatech.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-xl"></i>
                <span className="ml-3">123 Violet Street, Innovatown, IV 45678</span>
              </div>
            </div>

            <form className="bg-[#F6F6E9] bg-opacity-90 rounded-lg p-6" encType="multipart/form-data" onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre Completo"
                  value={query.name}
                  onChange={handleChange}
                  className="w-full bg-green-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="dni"
                  placeholder="DNI"
                  value={query.dni}
                  onChange={handleChange}
                  className="w-full bg-green-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="Direccion"
                  placeholder="Direccion"
                  value={query.Direccion}
                  onChange={handleChange}
                  className="w-full bg-green-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={query.email}
                  onChange={handleChange}
                  className="w-full bg-green-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="w-full text-black"
                />
              </div>
              <button type="submit" className="bg-green-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-green-200 transition duration-300">Send</button>
              {formStatus && <p className="mt-4 text-green-500">Message sent.</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;