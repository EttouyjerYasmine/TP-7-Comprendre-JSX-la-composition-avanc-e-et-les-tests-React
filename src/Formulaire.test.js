// src/Formulaire.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import Formulaire from "./Formulaire";

test("affiche une erreur si le champ est vide", () => {
  render(<Formulaire />);

  // On clique sur le bouton sans remplir le champ
  const bouton = screen.getByText(/envoyer/i);
  fireEvent.click(bouton);

  // Vérifie si le message d’erreur apparaît
  const erreur = screen.getByText(/obligatoire/i);
  expect(erreur).toBeInTheDocument();
});
