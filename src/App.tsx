import { useEffect, useState } from 'react'
import './App.css'

const coreStats = [
  { label: 'Nível', value: '00' },
  { label: 'Classe Atual', value: 'Desenvolvedor Júnior em Formação' },
  { label: 'Foco', value: 'Frontend com base em backend' },
  { label: 'Disponibilidade', value: 'Estágio / Freela' },
]

const experienceBars = [
  { name: 'React', points: 0, level: 0 },
  { name: 'TypeScript', points: 0, level: 0 },
  { name: 'CSS Vanilla', points: 0, level: 0 },
  { name: 'Backend TypeScript', points: 0, level: 0 },
  { name: 'C#', points: 0, level: 0 },
]

const playerStory = [
  'Meu nome é Yago Correa Rodrigues. Sou aluno de (ADS) Análise e Desenvolvimento de Sistemas; ingressei no curso em 2025 em busca de uma graduação e de uma carreira para me aprimorar pessoal e profissionalmente. Atualmente trabalho na área da indústria metalmecânica e ministro aulas de Muay Thai nas minhas horas vagas. Encontrei na Análise e Desenvolvimento de Sistemas algo parecido com o que sinto quando subo no ringue e encaro meu oponente nos primeiros segundos do round: é preciso pensamento rápido e uma boa capacidade de adaptabilidade, pois nem sempre o oponente/desafio é o que era esperado. Isso é o que me instiga a me superar e a dar o meu melhor. Atualmente sigo desenvolvendo projetos próprios ou sob demanda, ainda bem pequenos, como o que desenvolvi a pedido de amigos: o Search MTG. MTG é sigla para Magic: The Gathering, um jogo de cartas muito famoso no mundo nerd/geek que tenho como hobby. O pedido foi um app simples que rastreasse a cotação em tempo real dos preços de cada carta, já que o mercado de Magic muda a cada nova atualização nas regras e o valor das cartas é volátil. Assim, desenvolvi o Search MTG para que o usuário obtenha a melhor oferta quando ela surgir e para que também possa vender suas cartas pelo melhor preço quando lhe for conveniente. Ainda pretendo desenvolvê-lo mais no futuro, mas, para um projeto embrionário feito para amigos, ele já é muito útil.',
  'No momento, estou em busca de uma oportunidade no mercado profissional para me aperfeiçoar e também contribuir. Sou um estudante aplicado; o que me falta em experiência tenho de sobra em empenho, dedicação e disposição. Estou disponível para uma vaga de estágio para quem quiser me oferecer uma chance no mercado.',
]

const attributes = [
  { name: 'Comunicação', points: 87 },
  { name: 'Trabalho em Equipe', points: 89 },
  { name: 'Resolução de Problemas', points: 91 },
  { name: 'Adaptabilidade', points: 86 },
  { name: 'Proatividade', points: 92 },
  { name: 'Disciplina', points: 92 },
]

const skills = [
  {
    title: 'Componentização React',
    tier: 'Ramo Base',
    description:
      'Estruturas reutilizáveis, props tipadas e padrão visual consistente para escalar interfaces.',
  },
  {
    title: 'Type Safety e Estado',
    tier: 'Ramo Intermediário',
    description:
      'Modelagem de tipos, fluxo de estados e organização de lógica para reduzir erros em produção.',
  },
  {
    title: 'Integração Front + Backend',
    tier: 'Ramo Em Evolução',
    description:
      'Consumo de APIs, tratamento de falhas e padronização de dados para entregas mais robustas.',
  },
]

const objectives = [
  {
    title: 'Objetivo 01 - Consolidar React + TypeScript',
    impact: 'Projetos completos com padrão profissional',
    summary:
      'Finalizar interfaces com estados reais, validação de formulários e componentes reutilizáveis.',
    reward: 'XP de arquitetura frontend',
  },
  {
    title: 'Objetivo 02 - Evoluir no Backend TypeScript',
    impact: 'Ampliar visão fullstack',
    summary:
      'Construir APIs básicas, autenticação inicial e integração limpa com o frontend.',
    reward: 'XP de integração e regra de negócio',
  },
  {
    title: 'Objetivo 03 - Fortalecer base em C#',
    impact: 'Abrir caminho para stacks corporativas',
    summary:
      'Praticar fundamentos de orientação a objetos e pequenas APIs para consolidar lógica.',
    reward: 'XP de backend e carreira',
  },
]

const inventory = [
  'React',
  'TypeScript',
  'CSS Vanilla',
  'Node.js',
  'C#',
  '.NET Básico',
  'Vite',
  'Git',
  'GitHub',
  'Figma',
]

type Theme = 'dark' | 'light'

const themeStorageKey = 'portfolio-theme'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    const savedTheme = window.localStorage.getItem(themeStorageKey)
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme
    }

    return 'dark'
  })
  const [isAboutPageOpen, setIsAboutPageOpen] = useState(false)
  const aboutPreview = `${playerStory[0].slice(0, 360)}...`

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(themeStorageKey, theme)
  }, [theme])

  if (isAboutPageOpen) {
    return (
      <div className="sheet-wrap about-page" id="topo">
        <header className="about-page-head">
          <div>
            <p className="kicker">Jogador</p>
            <h1>About Me Completo</h1>
            <p className="subtitle">
              Texto completo da minha jornada para leitura sem cortes.
            </p>
          </div>
          <button
            type="button"
            className="about-page-back"
            onClick={() => setIsAboutPageOpen(false)}
          >
            Voltar para o portfolio
          </button>
        </header>

        <article className="panel about-page-content">
          {playerStory.map((paragraph) => (
            <p key={paragraph} className="origin">
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    )
  }

  return (
    <div className="sheet-wrap" id="topo">
      <header className="sheet-header">
        <div className="header-copy">
          <p className="kicker">Dev Character Sheet</p>
          <h1>Yago Correa Rodrigues</h1>
          <p className="subtitle">
            Portfólio em formato RPG com progresso técnico, habilidades e
            objetivos de evolução como desenvolvedor.
          </p>
        </div>
        <div className="header-controls">
          <nav className="sheet-nav" aria-label="Navegação principal">
            <a href="#jogador">Jogador</a>
            <a href="#skills">Habilidades</a>
            <a href="#atributos">Atributos</a>
            <a href="#objetivos">Objetivos</a>
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Alternar tema claro e escuro"
            aria-pressed={theme === 'light'}
          >
            Tema {theme === 'dark' ? 'Escuro' : 'Claro'}
          </button>
        </div>
      </header>

      <main className="sheet-grid">
        <aside className="panel panel-profile" id="jogador">
          <div className="panel-title-row">
            <p className="panel-id">Jogador</p>
            <h3>About Me</h3>
          </div>
          <div className="avatar-block" aria-hidden="true">
            <span>YC</span>
          </div>
          <p className="role">Classe Atual</p>
          <h2>Desenvolvedor Júnior em Formação</h2>
          <div className="origin-story">
            <p className="origin">{aboutPreview}</p>
          </div>
          <button
            type="button"
            className="about-read-more"
            onClick={() => setIsAboutPageOpen(true)}
          >
            Ler texto completo
          </button>

          <ul className="stat-grid" aria-label="Status principal">
            {coreStats.map((stat) => (
              <li key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </li>
            ))}
          </ul>

          <div className="xp-block" aria-label="Barras de experiência técnica">
            <p className="xp-title">Barras de Experiência</p>
            <ul className="xp-list">
              {experienceBars.map((experience) => (
                <li key={experience.name}>
                  <div className="meter-head">
                    <span>{experience.name}</span>
                    <strong>Lv. {experience.level}</strong>
                  </div>
                  <div className="meter-track" aria-hidden="true">
                    <span style={{ width: `${experience.points}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section
          className="panel panel-attrs"
          id="atributos"
          aria-label="Atributos e soft skills"
        >
          <div className="panel-title-row">
            <p className="panel-id">Atributos</p>
            <h3>Soft Skills</h3>
          </div>
          <ul className="meter-list">
            {attributes.map((attribute) => (
              <li key={attribute.name}>
                <div className="meter-head">
                  <span>{attribute.name}</span>
                  <strong>{attribute.points}</strong>
                </div>
                <div className="meter-track" aria-hidden="true">
                  <span style={{ width: `${attribute.points}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel panel-skills" id="skills">
          <div className="panel-title-row">
            <p className="panel-id">Habilidades</p>
            <h3>Skill Tree</h3>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <article key={skill.title} className="skill-card">
                <div className="skill-head">
                  <h4>{skill.title}</h4>
                  <span>{skill.tier}</span>
                </div>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel panel-quests" id="objetivos">
          <div className="panel-title-row">
            <p className="panel-id">Objetivos</p>
            <h3>Roadmap Atual</h3>
          </div>
          <div className="quest-list">
            {objectives.map((objective) => (
              <article key={objective.title} className="quest-card">
                <div className="quest-head">
                  <h4>{objective.title}</h4>
                  <span className="quest-badge">Ativo</span>
                </div>
                <p>{objective.summary}</p>
                <ul>
                  <li>
                    Impacto: <strong>{objective.impact}</strong>
                  </li>
                  <li>
                    Recompensa: <strong>{objective.reward}</strong>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel panel-inventory" aria-label="Inventário técnico">
          <div className="panel-title-row">
            <p className="panel-id">Loadout</p>
            <h3>Inventário Técnico</h3>
          </div>
          <ul className="chip-list">
            {inventory.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="panel panel-guild" id="guilda">
          <div className="panel-title-row">
            <p className="panel-id">Contato</p>
            <h3>Canal de Convocação</h3>
          </div>
          <p>
            Aberto para estágio, projetos freelance e oportunidades para
            evoluir com desafios reais de produto.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="mailto:seuemail@dominio.com">
              Convocar por E-mail
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="sheet-footer">
        <span>Build: Portfólio v2.0 - Character Sheet Theme</span>
        <a href="#topo">Voltar ao topo</a>
      </footer>
    </div>
  )
}

export default App
