import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('1');
  const [isPending, setPending] = useState('false');
  const axios = require('axios').default;



  function handleSubmit(e){
      

  return (
    <div className="create">
      <h2>Add a New Restaurant</h2>
      <form>
        <table>
            <tbody>
              <tr>
                <th>Restaurents</th>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <th>Date</th>
                <td><input type="date" /></td>
              </tr>
              <tr>
                <th>Image</th>
                <td>
                    <input type="file" name="image" id="image"/>
                </td>
                </tr>
                <tr>
                <th>Location</th>
                <td><input type="text"/></td>
                </tr>
                <tr>
                <th>Openning Time</th>
                <td>
                  <input type="time"/>
                </td>
                </tr>
                <tr>
                <th>Closing Time</th>
                <td><input type="time" /></td>
                </tr>
                <tr>
                <th>Action</th>
                <td>
                    <button type="button" >Create</button>
                </td>
                </tr>
            </tbody>
            
        </table>
      </form>
    </div>
  );
}
 
export default Create;