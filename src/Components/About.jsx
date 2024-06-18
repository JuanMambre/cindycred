const About = () => {
  return (
    <div
      name='nosotros'
      className='w-full min-h-screen bg-gradient-to-b from-green-300 to-green-700 text-white flex items-center justify-center'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full'>
        <div className='pb-8 mt-10 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#F6F6E9]'>
            ¿Quiénes Somos?
          </p>
        </div>
        <div className='text-xl mt-2 text-justify'>
          Cindycred es una empresa dedicada a ofrecer soluciones financieras
          innovadoras y accesibles, centrada en proporcionar créditos rápidos y
          confiables a individuos que estén afiliados a un sindicato. Nuestra
          misión es empoderar a nuestros clientes mediante el acceso a productos
          financieros justos y transparentes, fomentando su crecimiento y
          bienestar económico.
          <div className='flex flex-col justify-center mt-10'>
            <h2 className='text-black font-semibold text-xl'>
              Nuestros servicios
            </h2>
            <li>Creditos personales</li>
            <li>Prestamos con aprobacion rapida</li>
            <li>Tasas de interes competitivas</li>
            <h2 className='flex justify-center items-center text-2xl text-black font-bold mt-4'>
              Beneficios de Elegir Cindycred
            </h2>
            <div className=''>
              <div className='flex justify-center flex-col mt-5'>
                <h3 className='text-black font-semibold text-xl'>
                  Transparencia
                </h3>
                <li>Condiciones claras y sin sorpresas.</li>
                <li>Información detallada desde el inicio.</li>
              </div>
              <div className='flex justify-center flex-col mt-5'>
                <h3 className='text-black font-semibold text-xl'>Rapidez</h3>
                <li>Procesos de aprobación eficientes.</li>
                <li>Desembolsos rápidos y confiables.</li>
              </div>
              <div className='flex justify-center flex-col mt-5'>
                <h3 className='text-black font-semibold text-xl'>
                  Atencion al cliente
                </h3>
                <li>Soporte personalizado.</li>
                <li>Asistencia continua durante todo el proceso de crédito.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
