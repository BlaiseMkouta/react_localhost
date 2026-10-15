import LoginForm from "../../features/auth/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="max-w-150 mx-auto mt-24 flex flex-col items-center border border-gray-100 py-8 px-12">
      <h1 className="text-4xl font-semibold text-light-blue">Connexion</h1>
      <p>Bon retour</p>

      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
