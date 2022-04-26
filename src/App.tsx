import React, {useState, useEffect} from 'react';
import appCss from './app.module.css'



function App() {
  const [file, setFile] = useState<FileList|null>();

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if(e.target.files?.length){
     setFile(prev => e.target.files);
    }
  }

  useEffect(() => {
    if(file){
      document.querySelector('#preview')?.setAttribute('src', URL.createObjectURL(file[0]));
      
    }
  }, [file]);
  return (
    <div className={appCss.wrap}>
      <img src="1" alt="" id='preview' />
      <input type="file" accept='image/*' onChange={(e) => uploadFile(e)}/>
    </div>
  );
}

export default App;
