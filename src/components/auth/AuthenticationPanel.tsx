import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import LockButton from "./LockButton";
import AuthMethodSelector from "./AuthMethodSelector";

interface AuthenticationPanelProps {
  isLocked?: boolean;
  onLockToggle?: () => void;
  onAuthMethodSelect?: (method: "pin" | "password" | "biometric") => void;
  selectedMethod?: "pin" | "password" | "biometric";
  disabled?: boolean;
}

const AuthenticationPanel = ({
  isLocked = false,
  onLockToggle = () => {},
  onAuthMethodSelect = () => {},
  selectedMethod = "pin",
  disabled = false,
}: AuthenticationPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto bg-background"
    >
      <Card className="shadow-lg border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">
            {isLocked ? "Unlock Your PC" : "Secure Your PC"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center py-4">
            <LockButton
              isLocked={isLocked}
              onToggle={onLockToggle}
              disabled={disabled}
              size="lg"
            />
          </div>
          <div className="pt-4">
            <AuthMethodSelector
              onMethodSelect={onAuthMethodSelect}
              defaultMethod={selectedMethod}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AuthenticationPanel;
