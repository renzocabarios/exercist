import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>

      <Button>Sign In</Button>
      <Button>Login with Google</Button>
    </div>
  );
}
