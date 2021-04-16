import React,{useEffect} from 'react';
import useStorage from '../../hooks/useStorage';
import './ProgressBar.css'

function ProgressBar({file,setFile}) {
    const {url,progress} = useStorage(file);
    console.log(progress,url)

    useEffect(()=>{
        if(url) {
            setFile(null)
        }

    },[url,setFile])
    return (
        <>
        <h3>Uploaded: {Math.round(progress)}%</h3>
        <div className="progress_holder" style={{width: progress + "%"}}></div>
        </>
    )
}

export default ProgressBar
