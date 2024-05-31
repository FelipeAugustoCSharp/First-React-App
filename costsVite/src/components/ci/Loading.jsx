import style from '../styles/Loading.module.css'
import loading from '../../img/loading.svg'

function Loading(params) {
  return (
    <div className={style.loader_container}>
      <img src={loading} alt="loading image" className={style.load}/>
    </div>
  )
}

export default Loading