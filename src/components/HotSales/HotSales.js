import React,{useEffect,useState} from 'react';

import "./HotSales.css";
import Zoomer from '../Zoomer/Zoomer'
import CardItems from '../Card/Card'
import useFireStore from '../../hooks/useFirestore'
import {Container,Grid} from '../../config/materialConfig'
import Loader from '../Loader/Loader'



const HotSales=() => {
    const [allShoes,setAllShoes] = useState([]);
    const [imageUrl,setImageUrl] = useState(null);
    const {docs} = useFireStore('HotSales');

    useEffect(()=>{
        setAllShoes(docs)
    },[docs])
    return (
        <Container maxWidth="xl">
            {allShoes.length === 0 ? <Loader /> :
            <Grid container justify="space-around" spacing={2}>
            {allShoes.map(x=>{
                return (
                    <Grid key={x.id} item>
                        <CardItems item={x} setImageUrl={setImageUrl} />
                   </Grid>
                )
            })}
            
            </Grid> }
            {imageUrl && <Zoomer imageUrl={imageUrl} setImageUrl={setImageUrl} />}
        
        </Container>
    )
}

export default HotSales
