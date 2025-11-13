function JSXDemo() {
  const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

  return (
    <div>
      {elementJSX}
      <label htmlFor="champ">Entrez votre nom :</label>
      <input id="champ" />
    </div>
  );
}