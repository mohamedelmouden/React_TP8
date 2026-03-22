import { useState, useEffect } from 'react';
import axios from 'axios';

function AxData() {
  const [usrs, setUsrs] = useState([]);
  const [encours, setEncours] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsrs(response.data))
      .catch((err) => setErreur(err.message))
      .finally(() => setEncours(false));
  }, []);

  if (encours) return <p>loading...</p>;

  if (erreur) return <p>Error : {erreur}</p>;


  return (
    <div>
      <h2>chargés avec axios</h2>
      <ul>
        {usrs.map((usr) => (
          <li key={usr.id}>
            {usr.name} – {usr.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxData;