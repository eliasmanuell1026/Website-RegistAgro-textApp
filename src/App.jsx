import React from "react";


export default function App() {
  const cards = [
    {
      id: 1,
      title: 'Talhão Verde',
      img: 'https://i.pinimg.com/1200x/c4/5c/8f/c45c8fc7e74da4bba6c39bc3a18aa10d.jpg',
      tags: ['Milho', 'Irrigação'],
      desc: 'Registro detalhado do talhão com histórico de aplicações e produtividade estimada.'
    },
    {
      id: 2,
      title: 'Pomar no Sul',
      img: 'https://i.pinimg.com/1200x/cf/15/7a/cf157adf01b4c3f37b65ba26c6ac20ba.jpg',
      tags: ['Fruticultura', 'Solo'],
      desc: 'Mapa do pomar, recomendações de manejo e calendário de colheita.'
    },
    {
      id: 3,
      title: 'Estufa Experimental',
      img: 'https://i.pinimg.com/736x/da/ba/d2/dabad28befbca2b040669193a5c4cfe8.jpg',
      tags: ['Protegido', 'Controle climático'],
      desc: 'Dados de ambiente, sensores e histórico de tratamentos fitossanitários.'
    },
    {
      id: 4,
      title: 'Rebanho 12A',
      img: 'https://i.pinimg.com/736x/bd/79/37/bd7937d666ff9ee22304f18e805c2991.jpg',
      tags: ['Pecuária', 'Sanidade'],
      desc: 'Ficha do rebanho com vacinas, peso médio e observações de nutrição.'
    },
    {
      id: 5,
      title: 'Irrigação Setorial',
      img: 'https://i.pinimg.com/1200x/5a/dd/52/5add52c003e75c00775a8a47d107abcf.jpg',
      tags: ['Água', 'Sustentabilidade'],
      desc: 'Programas de irrigação, consumo e sugestões para economia de água.'
    },
    {
      id: 6,
      title: 'Análise de Solo',
      img: 'https://i.pinimg.com/736x/44/6d/aa/446daa5efce3a4f516a18fe7bd660060.jpg',
      tags: ['Solo', 'Fertilidade'],
      desc: 'Relatórios laboratoriais e recomendações de corretivos e fertilizantes.'
    }
  ];

  return (
    <>

    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <header id="top" className="py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">RegistAgro</h1>
          <nav className="hidden md:flex gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded">Início</button>
            <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded">Cadastrar</button>
            <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded">Relatórios</button>
            <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded">Perfil</button>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* hero / resumo */}
        <section className="bg-gradient-to-l from-cyan-700/10 to-transparent rounded-xl p-6 mb-8 flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Painel rápido</h2>
            <p className="text-gray-300 mt-2">Visão geral dos últimos registros, ações rápidas e acesso a relatórios.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded">Novo registro</button>
              <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded">Importar CSV</button>
              <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded">Exportar</button>
            </div>
          </div>
          <div className="w-full md:w-64 bg-white/5 p-4 rounded-lg">
            <p className="text-sm text-gray-300">Atividade recente</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="text-gray-200">✅ Talhão Verde atualizado</li>
              <li className="text-gray-200">⚠️ Recomendação de adubação para Pomar</li>
              <li className="text-gray-200">📈 Relatório gerado (Semana)</li>
            </ul>
          </div>
        </section>

        {/* filtros */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex-1 flex items-center gap-3">
            <input placeholder="Pesquisar por talhão, cultura..." className="w-full bg-white/5 placeholder-gray-400 px-4 py-2 rounded" />
            <select className="bg-gray-600 text-white px-3 py-2 rounded">
              <option>Todos</option>
              <option>Talhões</option>
              <option>Pomar</option>
              <option>Pecuária</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button className="bg-cyan-600 px-4 py-2 rounded">Filtrar</button>
            <button className="bg-white/5 px-4 py-2 rounded">Limpar</button>
          </div>
        </section>

        {/* grid de cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(card => (
            <article key={card.id} className="bg-white/5 rounded-xl overflow-hidden hover:scale-[1.01] transition-transform shadow-md">
              <div className="relative group">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 object-cover brightness-90 group-hover:brightness-100 transition"
                  />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="bg-black/40 px-3 py-2 rounded">
                    <h3 className="font-semibold">{card.title}</h3>
                    <div className="text-xs text-gray-200 mt-1 flex gap-2">
                      {card.tags.map(tag => (
                        <span key={tag} className="bg-white/10 px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-300 line-clamp-2">{card.desc}</p>

                <details className="mt-3 group">
                  <summary className="cursor-pointer text-cyan-300 text-sm select-none">Ver detalhes</summary>
                  <div className="mt-3 text-sm text-gray-200">
                    <p>Informações adicionais do registro, histórico e notas. Use os botões abaixo para ações rápidas.</p>
                    <div className="mt-3 flex gap-2">
                      <a href={card.img} target="_blank" rel="noopener noreferrer" className="bg-cyan-600 px-3 py-1 rounded text-sm">Abrir imagem</a>
                      <button className="bg-white/5 px-3 py-1 rounded text-sm">Editar</button>
                      <button className="bg-red-600 px-3 py-1 rounded text-sm">Remover</button>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </section>
      </div>

      <footer className="bg-cyan-800 h-20 flex ml-95 pl-6 items-center justify-center rounded-l-full">

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white transition-all hover:text-cyan-300"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-8 h-9">
            <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
            </svg>

            
          </a>
          <div className="bg-cyan-900 w-full h-full pl-6 flex ml-80 items-center  justify-center rounded-l-full ">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white transition-all hover:text-cyan-300"
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-7 h-8">
              <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z"/>
              </svg>
              
            </a>
            <div className="bg-cyan-950 h-full flex items-center w-full pl-6  ml-80 justify-start rounded-l-full">
                <div className="h-2 flex  items-center gap-10 p-2">

                  <a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-white transition-all hover:text-cyan-300"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-7 h-8">
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
                  </svg>
                  </a>
                  <p className="text-white font-bold text-ms  items-center flex transition-all cursor-pointe hover:underline hover:text-cyan-300">All right reserved. &copy;2025 || RegistAgro</p>
                </div>
            </div>
          </div>
      </footer>

    </div>

  </>  );
}
