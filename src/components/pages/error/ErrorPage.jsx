import { Link } from "react-router-dom";

export default function ErrorPage() {

  // Etats
  // Comportements

  // Affichage
  return (
    <div>
        <h1>ErrorPage</h1>

        <Link to="/">
            <button>Retourner a la page accueil</button>
        </Link>
    </div>
  )
}
