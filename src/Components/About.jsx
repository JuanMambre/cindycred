const About = () => {
  return (
    <div name='nosotros' className="w-full min-h-screen bg-gradient-to-b from-green-300 to-green-700 text-white flex items-center justify-center">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8 mt-10 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#F6F6E9]">Nosotros</p>
        </div>
        <p className="text-2xl mt-2 text-justify">
        En CindyCred, nos especializamos en ofrecer soluciones financieras innovadoras y accesibles para individuos y empresas. Nuestro equipo de expertos se dedica a proporcionar asesoramiento personalizado y productos financieros adaptados a tus necesidades. Desde préstamos personales hasta asesoría financiera integral, estamos comprometidos con tu bienestar económico y con ayudarte a alcanzar tus metas financieras. Confía en CindyCred para encontrar las mejores opciones y hacer realidad tus proyectos
        </p>
      </div>
    </div>
  )
}

export default About;
