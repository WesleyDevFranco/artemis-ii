// === STORYTELLING ORDER ===
// Hero (launch) → Mission (big picture) → SLS (the rocket) → Orion (the ship)
// → Crew (the people) → Journey (the route) → Footer (destination)

export const missionStats = [
  { value: 10, prefix: '~', suffix: '', label: 'DIAS DE MISSÃO', color: 'blue' },
  { value: 4, prefix: '', suffix: '', label: 'ASTRONAUTAS', color: 'blue' },
  { value: 384, prefix: '', suffix: 'K', label: 'KM DA TERRA', color: 'blue' },
  { value: 2025, prefix: '', suffix: '', label: 'ANO DE LANÇAMENTO', color: 'orange' },
]

export const crew = [
  {
    name: 'Reid Wiseman',
    role: 'COMANDANTE',
    flag: '🇺🇸',
    bio: 'Veterano da NASA com 165 dias no espaço. Liderará a missão Artemis II como comandante.',
    image: '/images/reid-wiseman.jpg',
  },
  {
    name: 'Victor Glover',
    role: 'PILOTO',
    flag: '🇺🇸',
    bio: 'Piloto de teste da NASA e veterano da ISS. Será o primeiro negro a viajar à Lua.',
    image: '/images/victor-glover.jpg',
  },
  {
    name: 'Christina Koch',
    role: 'ESPECIALISTA DE MISSÃO',
    flag: '🇺🇸',
    bio: 'Recordista de permanência feminina no espaço com 328 dias. Primeira mulher em missão lunar.',
    image: '/images/christina-koch.jpg',
  },
  {
    name: 'Jeremy Hansen',
    role: 'ESPECIALISTA DE MISSÃO',
    flag: '🇨🇦',
    bio: 'Astronauta da CSA e ex-piloto de caça CF-18. Primeiro canadense em missão à Lua.',
    image: '/images/jeremy-hansen.jpg',
  },
]

export const orionSpecs = [
  { label: 'TRIPULAÇÃO', value: '4 astronautas', color: 'white' },
  { label: 'ESCUDO TÉRMICO', value: '2.760°C', color: 'orange' },
  { label: 'MÓDULO DE SERVIÇO', value: 'ESA (Europa)', color: 'blue' },
  { label: 'DURAÇÃO DO VOO', value: '~10 dias', color: 'white' },
]

export const slsSpecs = [
  { label: 'ALTURA', value: '98 metros', color: 'white' },
  { label: 'EMPUXO NO LANÇAMENTO', value: '3.9M kg', color: 'orange' },
  { label: 'BOOSTERS', value: '2 × SRB', color: 'blue' },
]

export const timeline = [
  {
    phase: '01',
    title: 'Lançamento',
    desc: 'O SLS decola do Kennedy Space Center na Flórida, acelerando a Orion para a órbita terrestre em uma coluna de fogo de 3,9 milhões de quilos de empuxo.',
    color: 'blue',
  },
  {
    phase: '02',
    title: 'Injeção Translunar',
    desc: 'O estágio superior do SLS impulsiona a Orion em direção à Lua, abandonando a segurança da órbita terrestre. A partir daqui, não há como voltar rápido.',
    color: 'orange',
  },
  {
    phase: '03',
    title: 'Sobrevoo Lunar',
    desc: 'A Orion passa a 7.400 km da superfície lunar — mais perto da Lua do que qualquer humano desde 1972. A tripulação vê o lado oculto com os próprios olhos.',
    color: 'blue',
  },
  {
    phase: '04',
    title: 'Retorno à Terra',
    desc: 'A cápsula reentra na atmosfera a mais de 40.000 km/h, suportando temperaturas de 2.760°C. Pouso no Oceano Pacífico. Missão cumprida.',
    color: 'orange',
  },
]

// Backgrounds in storytelling order (matched to section sequence)
export const backgrounds = [
  '/images/hero-launch.jpg',      // Hero — the launch pad
  '/images/mission-space.jpg',    // Mission — deep space overview
  '/images/sls-rocket.jpg',       // SLS — the rocket
  '/images/orion-spacecraft.jpg', // Orion — the spacecraft
  '/images/crew-interior.jpg',    // Crew — inside the capsule
  '/images/journey-moon.jpg',     // Journey — the Moon
  '/images/journey-moon.jpg',     // Footer — lunar destination
]
