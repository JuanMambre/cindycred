import React, { useState } from 'react'

const FAQ = () => {
  const faqs = [
    {
      question: '¿Cómo puedo solicitar un crédito?',
      answer:
        "Puedes solicitar un crédito a través de nuestro sitio web completando el formulario en la sección de 'Solicitar Crédito'."
    },
    {
      question: '¿Qué documentos necesito para la solicitud?',
      answer:
        'Necesitarás una identificación válida, comprobante de ingresos y prueba de afiliación a un sindicato.'
    },
    {
      question: '¿Cuánto tiempo tarda la aprobación?',
      answer:
        'La aprobación suele tardar entre 24 y 48 horas, dependiendo de la complejidad de la solicitud.'
    },
    {
      question: '¿Cuál es la tasa de interés?',
      answer:
        'Ofrecemos tasas de interés competitivas que varían según el perfil del solicitante y el monto del crédito.'
    }
  ]

  return (
    <div
      name='faq'
      className='w-full min-h-screen bg-gradient-to-b from-green-300 to-green-700 text-white flex items-center justify-center'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full'>
        <div className='pb-8 mt-10 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#F6F6E9]'>
            Preguntas Frecuentes
          </p>
        </div>
        <div className='w-full'>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='mb-4'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 flex justify-between items-center'
      >
        <span>{faq.question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className='bg-white text-black p-4 mt-2 rounded'>{faq.answer}</div>
      )}
    </div>
  )
}

export default FAQ
