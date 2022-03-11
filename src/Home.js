const Home = () => {

    let name='mario';
    const handleClickAgain = (a) =>{
        console.log("hello" + a);
    }
    return (
      <div className="home">
        <h2>Homepage</h2>

        <p> {name} </p>
        <button onClick={() => handleClickAgain('mario')}>Click me again</button>

      </div>

    );
  }
   
  export default Home;