function Random(){
   let Number = Math.floor(Math.random() * 10) + 1;
    return <h1>The random number generated is {Number}</h1>
}

export default Random;