import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap'
import styles from './details.module.css';
import { useParams } from 'react-router-dom';

export default function Details(props) {
  // const id = props.match.params.id;
  const id = useParams().id
  // const business = props.businesses.find(b => b.id == id); (below is another way)
  const business = props.businesses.find(b => b.id === Number(id)); // <= non as casting
  // console.log(business)

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <h2>{business.name}</h2>
        <h3>{business.address}</h3>
        <h3>{business.operatingHours}</h3>
        <p className={styles.description}>{business.description}</p>
        <GoogleMap address={business.address} />
      </div>
    </div>
  )
}
