import {useEffect,useState} from 'react'
import {projectStorage,projectFireStore} from '../firebase/config';

const useFireStore = (collectionName)=>{
    const [docs,setDocs] = useState([]);

    useEffect(()=>{
       const unsub = projectFireStore.collection(collectionName)
        .onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(doc=>{
                documents.push({...doc.data(),id:doc.id})
            })
            setDocs(documents);
        })
        return () => unsub();
    },[collectionName])


    return {docs}
}

export default useFireStore;