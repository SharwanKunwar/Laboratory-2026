import FileUpload from "../components/FileUpload";
import QAChat from "../components/QAChat";
import SessionInfo from "../components/SessionInfo";
import { useState } from "react";

function Dashboard() {
  const [session, setSession] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">AI Study Assistant</h1>

      {!uploadedFile && (
        <FileUpload
          onUpload={(file) => {
            setUploadedFile(file);
            setSession({ id: 1 }); // Mock session
          }}
        />
      )}

      {uploadedFile && (
        <>
          <SessionInfo file={uploadedFile} session={session} />
          <QAChat session={session} />
        </>
      )}
    </div>
  );
}

export default Dashboard;