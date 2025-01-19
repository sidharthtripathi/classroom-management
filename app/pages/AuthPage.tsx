"use client";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Chrome } from "lucide-react";

export default function AuthForm() {
  return (
    <div className="p-4">
      <Tabs defaultValue="login" >
        <TabsList className="w-full">
          <TabsTrigger value="login" className="w-1/2">Login</TabsTrigger>
          <TabsTrigger value="signup" className="w-1/2">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
      <Button>
        <Chrome/> <span>Continue with Google</span>
      </Button>
    </div>
  );
}
