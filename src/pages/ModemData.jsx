import { useEffect, useState } from "react";

function ModemData() {
  const [modemData, setModemData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/modem-data")
      .then(res => res.json())
      .then(data => setModemData(data))
      .catch(err => console.error("Veri çekme hatası:", err));
  }, []);

  return (
    <div>
      <h1>Modem Verisi</h1>
      {modemData ? (
        <pre>{JSON.stringify(modemData, null, 2)}</pre>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
}

export default ModemData;
