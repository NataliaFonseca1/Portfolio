import SideBar from './containers/sidebar'
import Projetos from './containers/sidebar/Projetos'
import Sobre from './containers/sidebar/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
