function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira um nome para o projeto" id="" />
      </div>
      <div>
        <input
          type="number"
          placeholder="Insira o orçamento do projeto" 
        />
      </div>
      <div>
        <select id="" name="category_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar Projeto" />
      </div>
    </form>
  );
}
export default ProjectForm;
