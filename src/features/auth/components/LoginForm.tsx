import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/login.schema";
import { type LoginFormData } from "../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { loginService } from "../services/login.service";

const LoginForm = () => {
  const [apiError, setApiError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register, formState, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    try {
      setIsLoading(true);
      console.log("donnee du formulaire", data);
      const apiResponse = loginService(data);
      // gerer la suite du comportement de l'api
    } catch (error) {
      setApiError("Erreur interne");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-8"
    >
      <div className="flex flex-col items-center gap-4">
        <Input
          label="email"
          placeholder="Entres votre email"
          type="text"
          {...register("email")}
          error={formState.errors.email?.message}
        />

        <Input
          label="Mot de passe"
          placeholder="Entres votre mot de passe"
          type="password"
          {...register("password")}
          error={formState.errors.password?.message}
        ></Input>
      </div>

      <Button label="Connexion" type="submit" isLoading={isLoading} />
    </form>
  );
};

export default LoginForm;
