function SessionInfo({ file, session }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <p>
        <strong>Current Session:</strong> {session?.id}
      </p>
      <p>
        <strong>Uploaded File:</strong> {file?.name}
      </p>
    </div>
  );
}

export default SessionInfo;