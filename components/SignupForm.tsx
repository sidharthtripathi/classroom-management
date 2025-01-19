import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function SignupForm(){

    return (
        <form>
            <Input placeholder="name"/>
            <Input placeholder="email" required />
            <Input placeholder="password" type="password" />
            <Button>Signup</Button>
        </form>
    )
}
