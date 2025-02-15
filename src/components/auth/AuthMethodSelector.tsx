import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Fingerprint, KeyRound, Pin } from "lucide-react";

interface AuthMethodSelectorProps {
  onMethodSelect?: (method: "pin" | "password" | "biometric") => void;
  defaultMethod?: "pin" | "password" | "biometric";
}

const AuthMethodSelector = ({
  onMethodSelect = () => {},
  defaultMethod = "pin",
}: AuthMethodSelectorProps) => {
  return (
    <Card className="w-[360px] bg-white dark:bg-slate-950">
      <CardContent className="pt-6">
        <Tabs
          defaultValue={defaultMethod}
          className="w-full"
          onValueChange={(value: any) => onMethodSelect(value)}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pin" className="flex items-center gap-2">
              <Pin className="h-4 w-4" />
              PIN
            </TabsTrigger>
            <TabsTrigger value="password" className="flex items-center gap-2">
              <KeyRound className="h-4 w-4" />
              Password
            </TabsTrigger>
            <TabsTrigger value="biometric" className="flex items-center gap-2">
              <Fingerprint className="h-4 w-4" />
              Windows Hello
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pin" className="mt-4 space-y-4">
            <Input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              placeholder="Enter 6-digit PIN"
              className="text-center text-2xl tracking-widest"
            />
            <Button className="w-full">Confirm PIN</Button>
          </TabsContent>

          <TabsContent value="password" className="mt-4 space-y-4">
            <Input type="password" placeholder="Enter your password" />
            <Button className="w-full">Confirm Password</Button>
          </TabsContent>

          <TabsContent value="biometric" className="mt-4 space-y-4 text-center">
            <div className="py-6">
              <Fingerprint className="mx-auto h-16 w-16 text-primary" />
              <p className="mt-4 text-sm text-muted-foreground">
                Click below to authenticate with Windows Hello
              </p>
            </div>
            <Button className="w-full">Use Windows Hello</Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AuthMethodSelector;
