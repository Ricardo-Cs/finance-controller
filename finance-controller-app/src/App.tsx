import handleCreateUser, { createUserData } from "./api/createUser";

function App() {

  const dataTest: createUserData = {
    full_name: "Teste do front",
    email: "testedofront@gmail.com",
    password: "12345678"
  }

  return (
    <button onClick={() => handleCreateUser(dataTest)}>Criar usuário</button>
  );
}

export default App;
