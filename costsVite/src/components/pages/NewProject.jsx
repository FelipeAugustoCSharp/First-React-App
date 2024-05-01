import { Navigate, useNavigate } from 'react-router-dom';
import styles from '../styles/NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {

  const navigate = useNavigate()

  function CreatePost(project) {
    //initialize cost and services
    project.cost = 0;
    project.services = []

    fetch("http://localhost:3000/projects",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    }).then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      const state = { message: "Projeto criado com sucesso!" };
      navigate("/projects", {state});
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie o seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={CreatePost} btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject