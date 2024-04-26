function Home({props}) {

  function Meeting() {
    console.log(`Hello ${props.userName}`);
  }
  return (
    <div>
      <p>{Meeting}</p>
      <p>{props.userName}</p>
    </div>
  )
}
export default Home