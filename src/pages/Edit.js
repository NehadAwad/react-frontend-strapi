import { useState } from "react";

const Edit = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('1');
  const [isPending, setPending] = useState('false');
  const axios = require('axios').default;



  function handleSubmit(e){
      e.preventDefault();
      const formData = {
        "data":{
          title,
          rating,
          body
        }
      }


      axios({
        method: 'post',
        url: 'http://localhost:1337/api/reviews',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
        },
        data: formData
      })
      .then(function (response) {
          console.log('data send')
      })
      .catch(function(error){
        console.log(error)
      });


      console.log(formData);
  }

  return (
    <div className="create">
      <h2>Edit Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label>Restauratant title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Restauratant location:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Restauratant rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button>Add Restauratant</button>
      </form>
    </div>
  );
}
 
export default Edit;