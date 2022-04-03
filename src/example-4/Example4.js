import { useRef, useState } from 'react';

export default function Example4() {
  const [file, setFile] = useState();

  const fileInputRef = useRef();

  function handleClick() {
    fileInputRef.current.click();
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
    e.target.value = '';
  }

  return (
    <div>
      <h1>Example 4: useRef file input</h1>

      <div>
        <button onClick={handleClick}>Choose file</button>

        <input
          type="file"
          hidden
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      <hr />

      {file && <div>Chosen file: {file.name}</div>}
    </div>
  );
}
