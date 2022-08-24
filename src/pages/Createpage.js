import { useState } from "react";


function Create(e){
    const [restaurents, setRestaurents] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [openningtime, setOpenningtime] = useState("")
    const [closingtime, setClosingtime] = useState("")

    const handleUpdate = async() => {
    let data = {
        title: restaurents,
        date,
        location,
        openningtime,
        closingtime
    }
    const image = document.querySelector('#image');
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    formData.append(`files.image`, image.files[0], image.files[0].name);
    await fetch('https://starpy-backend.herokuapp.com/api/restaurents', {
        method: 'post',
        body: formData
    });
    }

    return (
    <div className="create">
        <h2>Add a New Restaurant</h2>
        <form>
        <table>
            <tbody>
                <tr>
                <th>Restaurents</th>
                <td><input type="text"value={restaurents} onChange={(e) => {setRestaurents(e.target.value)}} /></td>
                </tr>
                <tr>
                <th>Date</th>
                <td><input type="date" value={date} onChange={(e) => {setDate(e.target.value)}} /></td>
                </tr>
                <tr>
                <th>Image</th>
                <td>
                    <input type="file" name="image" id="image"/>
                </td>
                </tr>
                <tr>
                <th>Location</th>
                <td><input type="text" value={location} onChange={(e) => {setLocation(e.target.value)}} /></td>
                </tr>
                <tr>
                <th>Openning Time</th>
                <td>
                    <input type="time" value={openningtime} onChange={(e) => {
                      let value = e.target.value
                      let value_split = value.split(':')
                      if(value_split.length<3){
                        value = value+':00'
                      }
                      setOpenningtime(value)
                    }} />
                </td>
                </tr>
                <tr>
                <th>Closing Time</th>
                <td><input type="time" value={closingtime} onChange={(e) => {
                  let value = e.target.value
                  let value_split = value.split(':')
                  if(value_split.length<3){
                    value = value+':00'
                  }
                  setClosingtime(value)
                  }}/></td>
                </tr>
                <tr>
                <th>Action</th>
                <td>
                    <button type="button" onClick={handleUpdate}>Create</button>
                </td>
                </tr>
            </tbody>
            
        </table>
        </form>
    </div>
    );

}
 
export default Create;