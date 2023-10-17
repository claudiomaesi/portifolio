import Titulo from '../../../components/Titulo'
import Paragrafo from '../../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam libero
      maiores tempora reiciendis amet officiis quia accusantium ex, odio optio
      esse iure delectus cum porro consequuntur non corporis exercitationem eum.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=claudiomaesi&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
