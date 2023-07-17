import { useRouter } from "next/router";
import clientData from "../../utils/clients";
import ClientGallery from "../../components/ClientGallery";

const ClientPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const client = clientData.find((c) => c.slug === slug);

  if (!client) {
    return <p>Client not found.</p>;
  }

  return (
    <div>
      <h2 className=" text-2xl font-bold text-white">
        Welcome, {client.name}!
      </h2>
      <ClientGallery folder={client.folder} />
    </div>
  );
};

export default ClientPage;
