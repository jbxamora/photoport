import { FC } from "react";
import Link from "next/link";
import Client from "../utils/types";


interface ClientCardProps {
  client: Client;
}

const ClientCard: FC<ClientCardProps> = ({ client }) => {
  return (
    <Link href={`/client/${encodeURIComponent(client.slug)}`}>
      <div className="flex flex-col overflow-hidden rounded-sm bg-white/10 shadow-highlight">
        <div className="">
          <img
            className="h-60 w-full object-cover object-center hover:opacity-50"
            src={client.image}
            alt="Client Image"
          />
        </div>
        <div className="flex-1 p-4">
          <h3 className="text-lg font-semibold text-gray-200">{client.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ClientCard;
