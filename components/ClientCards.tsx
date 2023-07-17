import { FC } from "react";
import ClientCard from "./ClientCard";
import clientData from "../utils/clients";

const ClientCards: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {clientData.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  );
};

export default ClientCards;
