import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import SideBar from './containers/SideBar'
import Sobre from './containers/SideBar/Sobre'
import EstiloGlobal, { Container } from './styles'

import temaDark from './themes/dark'
import temaLight from './themes/light'

function App() {
  const [estaUsandoTemadark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemadark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemadark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
