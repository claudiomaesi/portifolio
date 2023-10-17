import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Cláudio Maesi</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        claudiomaesi
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev Full Stack Python
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
