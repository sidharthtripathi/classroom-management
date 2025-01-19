import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/authSchema";
import { z } from "zod";
type LoginSchemaType = z.infer<typeof loginSchema>;
export default function LoginForm() {
  const { register, handleSubmit,formState : {errors} } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  function handleLogin(data: LoginSchemaType) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Input placeholder="email" required {...register("email")} />
      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      <Input placeholder="password" type="password" {...register("password")} />
      {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
      <Button>Login</Button>
    </form>
  );
}
