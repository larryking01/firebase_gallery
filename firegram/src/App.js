// modules
import React from 'react'


// components
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'



function App() {
  return (
    <div className="App">
      <Title />
      <hr />
      <br />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
