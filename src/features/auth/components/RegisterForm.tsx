import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  type RegisterFormData,
} from "../schemas/register.schema";
import { registerService } from "../services/register.service";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    const apiresponse = registerService(data);
    navigate("verify-email");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="First Name"
        type="text"
        placeholder="Enter your first name"
        {...register("first_name")}
        error={formState.errors.first_name?.message}
      />
      <Input
        label="Last Name"
        type="text"
        placeholder="Enter your Last name"
        {...register("last_name")}
        error={formState.errors.last_name?.message}
      />

      <Input
        label="Email"
        type="text"
        placeholder="Enter your email"
        {...register("email")}
        error={formState.errors.email?.message}
      />

      <Input
        label="Phone number"
        type="text"
        placeholder="Enter your phone number"
        {...register("phone_number")}
        error={formState.errors.phone_number?.message}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        {...register("password")}
        error={formState.errors.password?.message}
      />

      <Button label="Soumettre" type="submit" />
    </form>
  );
};
