import React,{ useState } from 'react';
import Recipee from './recipees';

const App = () => {

  const [search, setSearch]=useState('');
  const [data,setData] = useState([])

  const API_ID ='35d1a6a8';
  const API_KEY= '4bd23e41e458d234082eee5db255a4f2';


  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`).then(
      response => response.json()
      ).then(
        data => setData(data.hits)
        );
  }

  return (
    <body style={{backgroundColor: "grey"}}>
    <div>
      <center>
        <h2><i>Food Recipee App</i></h2><br/>
        <form onSubmit={submitHandler}>
          <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type='submit' className='btn btn-primary' name='search'/> <br/>
        </form>
      </center>
      {data.length >= 1 ? <Recipee data={data}/>:null}
    </div>
    </body>
  );
}

export default App;
