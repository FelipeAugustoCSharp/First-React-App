import styles from '../styles/NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie o seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  )
}

export default NewProject