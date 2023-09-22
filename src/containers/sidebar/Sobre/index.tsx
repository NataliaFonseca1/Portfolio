import Paragrafo from '../../../components/Paragrafo'
import Titulo from '../../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Desenvolvedora Front-end em formação pela EBAC-Escola Britânica de Artes
      Criativas e Tecnologia. Graduanda em Direito, profissional com perfil
      comunicativo, possuo habilidades técnicas em desenvolvimento de projetos
      utilizando: React.js,Vue.Js, JavaScript, TypeScript, HTML, CSS,Bootstrap,
      Jquery, Sass.
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=nataliafonseca1&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nataliafonseca1&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)
export default Sobre
