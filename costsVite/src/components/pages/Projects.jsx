import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from "../styles/Project.module.css"
import Container from "../layout/Container"
import LinkButton from "../ci/LinkButton"
import ProjectCard from "../project/ProjectCard"


function Projects() {
  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_content}>
        <h1>Meus Projetos</h1>  
        <LinkButton where="/newproject" text="Criar Projeto"/>
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>projetos...</p>
      </Container>
      
    </div>
  )
}

export default Projects
2