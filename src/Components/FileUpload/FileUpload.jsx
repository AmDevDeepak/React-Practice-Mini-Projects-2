import React from "react";

const FileUpload = () => {
  const [file, setFile] = React.useState();
  const uploadRef = React.useRef();
  const progressRef = React.useRef();
  const statusRef = React.useRef();
  const loadRef = React.useRef();

  const handleProgress = (ev) => {
    loadRef.current.innerHTML = `Uploaded ${ev.loaded} bytes of ${ev.total} uploaded`;
    const percentage = (ev.loaded / ev.total) * 100;
    progressRef.current.value = Math.round(percentage);
    statusRef.current.innerHTML = `${Math.round(percentage)} % uploaded`;
  };
  const handleSuccess = (ev) => {
    statusRef.current.innerHTML = ev.target.responseText;
    progressRef.current.value = 0;
  };
  const handleError = () => {
    statusRef.current.innerHTML = "Upload failed. Please try again";
  };
  const handleAbort = () => {
    statusRef.current.innerHTML = "Upload aborted. Please try again";
  };

  const handleUploadFile = () => {
    const file = uploadRef.current.files[0];
    setFile(URL.createObjectURL(file));
    let formData = new FormData();
    formData.append("image", file);

    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.addEventListener("load", handleSuccess, false);
    xhr.addEventListener("error", handleError, false);
    xhr.addEventListener("abort", handleAbort, false);
    xhr.open("POST", "https://v2.convertapi.com/upload");

    xhr.send(formData);
  };

  return (
    <div className="w-full h-[100vh] bg-gray-400 flex items-center justify-center">
      <div className="w-full h-full bg-gray-600 text-white flex flex-col items-center justify-center p-2 rounded-md">
        <h1 className="text-white font-mono font-semibold text-2xl mb-3">
          File Upload
        </h1>
        <input
          onChange={handleUploadFile}
          className="p-3 outline-none bg-gray-800 font-mono rounded-md cursor-pointer"
          type="file"
          ref={uploadRef}
        />

        <label className="mt-2">
          Progress: <progress ref={progressRef} value={"0"} max={"100"} />{" "}
        </label>
        <p ref={statusRef}></p>
        <p ref={loadRef}></p>
        <img src={file} className="w-[40%]" />
      </div>
    </div>
  );
};

export default FileUpload;
