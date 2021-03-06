import React,{useEffect,useState} from 'react'
import {Container,Grid} from '../../config/materialConfig'
import useFireStore from '../../hooks/useFirestore'
import CardItems from '../Card/Card'
import Zoomer from '../Zoomer/Zoomer'
import Loader from '../Loader/Loader'


function MenCasualShoes() {
    const [allShoes,setAllShoes] = useState([]);
    const [imageUrl,setImageUrl] = useState(null);
    const {docs} = useFireStore('ManCasual');
   

    
    useEffect(()=>{
        setAllShoes(docs)
    
    },[docs])


    return (
        <Container maxWidth="xl">
            {allShoes.length=== 0 ? <Loader /> :
            <Grid container justify="space-around" spacing={2}>
            {allShoes.map(x=>{
                return (
                    <Grid key={x.id} item>
                        <CardItems item={x} setImageUrl={setImageUrl}/>
                        
                    </Grid>
                )
            })}
            </Grid> }
            {imageUrl && <Zoomer imageUrl={imageUrl} setImageUrl={setImageUrl} />}
        </Container>
    )
}

export default MenCasualShoes
