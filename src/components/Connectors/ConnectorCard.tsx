import { Button } from "@integration-app/react";
import Image from "next/image";

interface ConnectorCardProps {
  name: string;
  description: string;
  icon: string;
  isConnected: boolean;
  isLoading?: boolean;
  onConnect: () => void;
}

export default function ConnectorCard({
  name,
  description,
  icon,
  isConnected,
  onConnect,
}: Readonly<ConnectorCardProps>) {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center text-center bg-white">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <Image
          src={icon}
          alt={`${name} logo`}
          width={64}
          height={64}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {isConnected ? (
        <span className="px-4 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-md">
          Connected
        </span>
      ) : (
        <Button onClick={onConnect} variant="primary">
          Connect
        </Button>
      )}
    </div>
  );
}
