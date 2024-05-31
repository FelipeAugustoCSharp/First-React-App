import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from "../styles/Project.module.css"
import Container from "../layout/Container"
import LinkButton from "../ci/LinkButton"
import ProjectCard from '../project/ProjectCard'
import { useState, useEffect } from "react"
import Loading from "../ci/Loading"


function Projects() {
  const [projects, setProjects] = useState([])
  const [removeLoad, setRemoveLoading] = useState(false)


  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
    }, 2000);
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_content}>
        <h1>Meus Projetos</h1>  
        <LinkButton where="/newproject" text="Criar Projeto"/>
      </div>
      {message && <Message  type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (            
            <ProjectCard 
            id={project.id}
            name={project.name} 
            budget={project.budget}
            category={project.category.name}
            key={project.id}
            /> 
          ))}
          {!removeLoad && <Loading/>}
          {removeLoad && projects.length == 0 &&
            <p>Não há projetos cadastrados</p>
          }
      </Container>      
    </div>
  )
}

export default Projects
