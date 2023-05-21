import Image from 'next/image';

function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-purple-950 text-black">
      <div className="flex items-center space-x-4">
        <img src="/LogoMM.jpeg" alt="Logo do site" className="w-10 h-10" />
        <a href="#" className="text-white hover:text-gray-300">Filmes</a>
        <a href="#" className="text-white hover:text-gray-300">Séries</a>
        <a href="#" className="text-white hover:text-gray-300">Lançamentos</a>
        <a href="#" className="text-white hover:text-gray-300">Minha Lista</a>
        <input type="text" placeholder="Pesquisar..." className="px-2 py-1 rounded-lg"/>
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Pesquisar</button>
      </div>
      <div>
        <a href="/pagina-de-login" className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </a>
      </div>
    </header>
  );
}

function MovieDetails() {
  const movieName = "Vingadores: Ultimato";
  const movieGenre = "Ação e Aventura";
  const movieDuration = "180 min";
  const movieRating = "/14anos.png";
  const movieSynopsis = "Sinopse: Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.";
  const movieRatingScore = "8,5";

  return (
    <div className="flex flex-col items-center">
    <h2 className="text-5xl font-bold mb-2">{movieName}</h2>
    <div className="flex items-center mb-2">
      <span className="mr-2">Gênero:</span>
      <span>{movieGenre}</span>
    </div>
    <div className="flex items-center mb-2">
      <span className="mr-2">Duração:</span>
      <span>{movieDuration}</span>
    </div>
    <div className="flex items-center mb-4">
      <img src={movieRating} alt="Classificação Indicativa" className="w-6 h-6 mr-2" />
      <span>Classificação Indicativa</span>
    </div>
    <p className="text-lg">{movieSynopsis}</p>
    <p className= "text-lg mt-2">Nota da crítica: {movieRatingScore}</p>
    <button className="bg-purple-950 text-white px-4 py-2 mt-6 rounded-lg">
      Adicionar à Minha Lista
    </button>
    <div className="mt-12">
        {/* Espaço para o trailer do filme */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/g6ng8iy-l0U"
          title="Trailer do Filme"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
  </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
      <div className="w-1/3 bg-purple-900 p-8">
        <MovieDetails />
      </div>
      <div className="w-2/3 bg-purple-900 p-8">
        {/* Imagem do Filme */}
        <div className="w-full h-full">
          <Image
            src="/FotoFilme.png"
            alt="Imagem do Filme"
            width={800}
            height={600}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
    </div>

  );
}

export default Home;

