import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"


function Edit(e){

    const [datafull, setDatafull] = useState("")
    const [restaurents, setRestaurents] = useState(datafull.title)
    const [date, setDate] = useState(datafull.date)
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [openningtime, setOpenningtime] = useState("")
    const [closingtime, setClosingtime] = useState("")
    
    let { id } = useParams();

    useEffect(() => {
      axios
        .get('http://starpy-backend.herokuapp.com/api/restaurents/'+id+'?populate=*')
        .then(({ data }) => {
          console.log(data)
          setDatafull(data.data.attributes)
          setRestaurents(data.data.attributes.title)
          setDate(data.data.attributes.date)
          setLocation(data.data.attributes.location)
          setOpenningtime(data.data.attributes.openningtime)
          setClosingtime(data.data.attributes.closingtime)

        })
        .catch((error) => console.log(error))
    }, [])

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
      if(image.files[0]){
        formData.append(`files.image`, image.files[0], image.files[0].name);
      }
      let res = await fetch('https://starpy-backend.herokuapp.com/api/restaurents/'+id, {
        method: 'put',
        body: formData
      });
      if(res.status===200){
        Swal.fire(
          'Success',
          'Data Updated Successfully',
          'success'
        )
      }
        
    }
    

    return (
    <div className="create">
        <h2>Edit Restaurant</h2>
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
                    <button type="button" onClick={handleUpdate}>Update</button>
                </td>
                </tr>
            </tbody>
            
        </table>
        </form>
    </div>
    );

}
 
export default Edit;
