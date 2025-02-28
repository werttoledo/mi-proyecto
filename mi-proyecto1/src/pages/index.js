import { useEffect, useState } from "react";

export default function Home() {
  const [ip, setIp] = useState("Cargando...");

  useEffect(() => {
    fetch("https://api64.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch((error) => setIp("Error al obtener la IP"));
  }, []);

  return (
    <div>
      <h1>Tu IP pública es: {ip}</h1>
    </div>
  );
}