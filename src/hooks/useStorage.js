import {useEffect,useState} from 'react'
import {db,storage} from '../firebase/config';

const useStorage = (file)=>{
    const [progress,setProgress] = useState(null);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);

    useEffect(()=>{

        const storageRef = db.ref(file.name);
        const collectionRef = storage.collection('images');
       

        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        },(error)=>{
            setError(error);
        },async()=>{
            const recivedUrl = await storageRef.getDownloadURL();
            collectionRef.add({url:recivedUrl});
            setUrl(recivedUrl);
        })
    },[file])

    return {progress,error,url}
}

export default useStorage;