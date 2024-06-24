import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Contact = () => {
  const [formStatus, setFormStatus] = useState(false)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState({
    name: '',
    dni: '',
    direccion: '',
    telefono: '',
    monto: '',
    platform: '',
    files: []
  })

  // Manejo de cambios en archivos
  const handleFileChange = (e) => {
    setQuery((prevState) => ({
      ...prevState,
      files: Array.from(e.target.files)
    }))
  }

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  // Validación del formulario
  const validateForm = () => {
    const { name, dni, direccion, telefono, monto } = query
    return (
      name.trim() &&
      dni.trim() &&
      direccion.trim() &&
      telefono.trim() &&
      monto.trim()
    )
  }

  // Manejo de eliminación de archivos
  const handleFileRemove = (index) => {
    setQuery((prevState) => ({
      ...prevState,
      files: prevState.files.filter((_, i) => i !== index)
    }))
  }

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    if (loading) return
    if (!validateForm()) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios.',
        icon: 'error',
        confirmButtonText: 'Ok!'
      })
      return
    }
    setLoading(true)

    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      if (key === 'files') {
        value.forEach((file, index) => {
          formData.append(`file${index}`, file)
        })
      } else {
        formData.append(key, value)
      }
    })

    axios
      .post('https://getform.io/f/lakmojxa', formData, {
        headers: { Accept: 'application/json' }
      })
      .then(function (response) {
        setFormStatus(true)
        setQuery({
          name: '',
          dni: '',
          email: '',
          direccion: '',
          platform: '',
          files: []
        })
        setLoading(false)

        Swal.fire({
          title: 'Gracias por contactaros',
          text: 'En un lapso de 72hs habiles nos comunicaremos via email',
          icon: 'success',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.value) {
            window.location.reload()
          }
        })
      })
      .catch(function (error) {
        console.log(error)
        setLoading(false)
      })
  }

  return (
    <div
      className='App'
      name='contacto'
    >
      <section className='bg-gradient-to-b from-green-700 to-green-900 text-black py-20 px-4 md:px-8 min-h-screen'>
        <div className='max-w-6xl mx-auto text-white'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mt-10'>
              Contactanos
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-green-950'>
            <div className='bg-[#F6F6E9] rounded-lg p-6'>
              <h3 className='text-xl font-bold mb-4'>
                Requisitos a enviar junto a la solicitud
              </h3>

              <div className='flex justify-center flex-col mb-4 text-black font-semibold text-lg'>
                <li>Foto DNI</li>
                <li>Ultimo recibo de sueldo</li>
                <li>Servicio de luz/gas o internet</li>
                <li>Movimientos de los ultimos 30 dias de la caja de ahorro</li>
                <br />
                <li>Credito sujeto aprobacion crediticia</li>
              </div>
            </div>

            <form
              className=' bg-[#F6F6E9] bg-opacity-90 rounded-lg p-6'
              encType='multipart/form-data'
              onSubmit={handleSubmit}
            >
              <h3 className='text-xl font-bold mb-4'>Solicitud</h3>
              <div className='mb-4'>
                <input
                  type='text'
                  name='name'
                  placeholder='Nombre Completo'
                  value={query.name}
                  onChange={handleChange}
                  className='w-full bg-green-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='text'
                  name='dni'
                  placeholder='DNI'
                  value={query.dni}
                  onChange={handleChange}
                  className='w-full bg-green-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='text'
                  name='direccion'
                  placeholder='Direccion'
                  value={query.direccion}
                  onChange={handleChange}
                  className='w-full bg-green-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='text'
                  name='telefono'
                  placeholder='Telefono'
                  value={query.telefono}
                  onChange={handleChange}
                  className='w-full bg-green-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='text'
                  name='monto'
                  placeholder='Monto solicitado'
                  value={query.monto}
                  onChange={handleChange}
                  className='w-full bg-green-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='file'
                  name='files'
                  multiple
                  onChange={handleFileChange}
                  className='w-full text-black'
                />
              </div>
              {/* Lista de archivos con opción de eliminar */}
              <div className='mb-4'>
                {query.files.map((file, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center mb-2 bg-gray-200 p-2 rounded-lg'
                  >
                    <span>{file.name}</span>
                    <button
                      type='button'
                      onClick={() => handleFileRemove(index)}
                      className='text-red-600 hover:text-red-800'
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
              <button
                type='submit'
                className='bg-green-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-200 transition duration-300'
                disabled={loading} // Deshabilitar el botón mientras se envía
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
              {formStatus && (
                <p className='mt-4 text-green-500'>Mensaje enviado.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
