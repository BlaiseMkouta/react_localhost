import { RegisterForm } from "../../features/auth/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="max-w-150 mx-auto mt-24 flex flex-col items-center border border-gray-100 py-8 px-12">
      <h1 className="text-4xl font-semibold text-light-blue">Inscription</h1>
      <p>Bienvenue</p>

      <div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
