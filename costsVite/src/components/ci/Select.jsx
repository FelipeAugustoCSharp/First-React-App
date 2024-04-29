import styles from '../styles/Select.module.css'

function Select({ text, name, value, options, handleOnChange }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select id={name} name={name}>
          <option disabled>Selecione uma opçao</option>            
            {options.map((option) => (
              <option value={option.id} key={option.id}>{option.name}</option>
            ))}          
        </select>
    </div>
  );
}
export default Select