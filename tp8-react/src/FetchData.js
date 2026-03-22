import { useState, useEffect } from 'react';

function FData() {
  const [pts, setPts] = useState([]);
  const [encours, setEncours] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('reseau error');
        }
        return response.json();
      })
      .then((donne) => setPts(donne))
      .catch((err) => setErreur(err.message))
      .finally(() => setEncours(false));
  }, []);

  if (encours) return <p>loading...</p>
;
  if (erreur) return <p>Error : {erreur}</p>
;

  return (
    <div>
      <h2>chargés avec fetch()</h2>
      <ul>
        {pts.slice(0, 5).map((pt) => (
          <li key={pt.id}>{pt.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FData;