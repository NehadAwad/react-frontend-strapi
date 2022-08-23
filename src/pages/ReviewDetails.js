import {
  useParams
} from "react-router-dom";
import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReviewDetails(e) {
  // let { id } = useParams();
  // const [data, setData] = useState('');
  // // const { loading, error, data } = useFetch('http://starpy-backend.herokuapp.com/api/restaurents/'+2)
  // useEffect(() => {
  //   fetch('http://starpy-backend.herokuapp.com/api/restaurents/'+id)
  //    .then((response) => response.json())
  //    .then((actualData) => setData(actualData))
  //    .catch((err) => {
  //     console.log(err.message);
  //    });
  //  }, []);

  // console.log(data.data.attributes.title)
  let { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get('http://starpy-backend.herokuapp.com/api/restaurents/'+id+'?populate=*')
      .then(({ data }) => {
        console.log(data)
        setData(data.data.attributes)
      })
      .catch((error) => console.log(error))
  }, [])

  
  return (
    <div class="create">
      <img width={200} height={200} src={'https://starpy-backend.herokuapp.com'+data.image?.data?.attributes.url} /> 

      <h2> Title : {data.title}</h2>
      <h2> Location : {data.location}</h2>
      <h2> Openning Time : {data.openningtime}</h2>
      <h2> Closing Time : {data.closingtime}</h2>
    </div>
  )
}