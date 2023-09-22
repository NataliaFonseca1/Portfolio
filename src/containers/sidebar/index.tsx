import Avatar from '../../components/avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Natália Fonseca</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        nataliafonseca1
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheira front-end
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar
