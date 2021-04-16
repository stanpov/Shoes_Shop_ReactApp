import React,{useState} from 'react';
import ProgressBar from '../ProgressBar/ProgressBar'

function UploadForm() {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const types = ['image/jpg','image/jpeg','image/png'];

    const handleChange = (e)=>{
        
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select files with right format (jpeg,png or jpg)');
        }
    }

    return (
        <div>
            <form>
                <input type='file' onChange={handleChange} />
                <div className="output">
                    {error && <div className="error_div">{error}</div>}
                    {file && <div className="fileName_div">{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </div>
    )
}

export default UploadForm
