import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Wallet App</Titulo>
      <Paragrafo tipo="secundario">
        Aplicação que visa auxiliar no controle financeiro utilizando JavaScript
      </Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
