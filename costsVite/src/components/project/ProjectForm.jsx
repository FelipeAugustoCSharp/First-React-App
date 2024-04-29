import { useEffect, useState } from "react";
import Input from "../ci/Input";
import Select from "../ci/Select";
import SubmitButton from "../ci/SubmitButton";
import styles from "../styles/ProjectForm.module.css";

function ProjectForm({btnText}) {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
      />
      <Select text="Selecione a categoria" name="category_id" options={categories}/>
      <SubmitButton text={btnText}/>
    </form>
  );
}
export default ProjectForm;
