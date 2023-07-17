import { useState } from 'react';
import { useRouter } from 'next/router';
import clientData from '../utils/clients';

const ClientsPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClientSelect = (client) => {
    const selectedClient = client.find((c) => c.password === password);

    if (selectedClient) {
      router.push(`/clients/${selectedClient.slug}`);
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-white">Clients</h2>
      <p className="mb-2 text-white">
        Please enter your password to access your gallery:
      </p>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="mb-2 w-64 rounded bg-gray-700 p-2 text-white"
      />
      <button
        onClick={() => handleClientSelect(clientData)}
        className="rounded bg-gray-700 px-4 py-2 text-white"
      >
        Enter
      </button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default ClientsPage;