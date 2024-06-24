import React, { useState } from 'react'

const FAQ = () => {
  const faqs = [
    {
      question: '¿Como hago para solicitar un préstamo?',
      answer: "Completando la presolicitud que esta en nuestra pagina web'."
    },
    {
      question: '¿Que monto puedo solicitar?',
      answer:
        'Podes solicitar hasta 1.000.000 siempre y cuando la cuota no supere el 20% de tus ingresos.'
    },
    {
      question: '¿Me informan cual es el monto que puedo solicitar?',
      answer:
        'Si, antes de confirmar la solicitud, recibirás un mensaje donde te informamos monto pre aprobado, cantidad de cuotas y  valor de las mismas.'
    },
    {
      question: '¿Que documentación debo presentar?',
      answer:
        'Al momento de llenar la presolicitud, debes adjuntar foto de: DNI, ultimo recibo de sueldo, Movimientos de los últimos 30 días de tu cuenta sueldo, Recibo de luz / gas / teléfono.'
    },
    {
      question: '¿Como se pagan las cuotas?',
      answer: 'Las cuotas son debitadas de tu recibo de sueldo.'
    }
  ]

  return (
    <div
      name='preguntas frecuentes'
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
