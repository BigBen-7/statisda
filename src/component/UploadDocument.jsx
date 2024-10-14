import { useNavigate } from "react-router-dom";

const UploadDocument = () => {
  const navigate = useNavigate();

  const handleUpload = (e) => {
    e.preventDefault();
    // Handle document upload logic
    navigate("/login"); // Navigate to the login page or wherever next
  };

  return (
    <div className="flex justify-center flex-col gap-8 items-center h-screen font-kumbh">
      <h2 className="text-2xl font-semibold">Upload School Document</h2>
      <form onSubmit={handleUpload} className="bg-white shadow-lg p-8 w-[512px]">
        <input type="file" className="border rounded p-2 w-full mb-4" />
        <button type="submit" className="p-2 w-full mt-8 bg-blue-500 text-white rounded">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadDocument;
