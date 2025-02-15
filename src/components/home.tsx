import React, { useState } from "react";
import { motion } from "framer-motion";
import AuthenticationPanel from "./auth/AuthenticationPanel";
import SignInModal from "./auth/SignInModal";
import SettingsPanel from "./settings/SettingsPanel";

type AuthMethod = "pin" | "password" | "biometric";

const Home = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<AuthMethod>("pin");
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLockToggle = () => {
    setIsLocked((prev) => !prev);
  };

  const handleAuthMethodSelect = (method: AuthMethod) => {
    setSelectedMethod(method);
  };

  const handleSignIn = () => {
    setShowSignIn(false);
  };

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold text-primary mb-2"
          >
            SecureVault PC Lock
          </motion.h1>
          <motion.p
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Protect your PC with advanced security features
          </motion.p>
        </div>

        <AuthenticationPanel
          isLocked={isLocked}
          onLockToggle={handleLockToggle}
          onAuthMethodSelect={handleAuthMethodSelect}
          selectedMethod={selectedMethod}
        />

        <SignInModal
          isOpen={showSignIn}
          onClose={() => setShowSignIn(false)}
          onGoogleSignIn={handleSignIn}
          onAppleSignIn={handleSignIn}
        />

        <SettingsPanel
          isOpen={showSettings}
          onOpenChange={setShowSettings}
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
          onResetAuth={() => setSelectedMethod("pin")}
        />
      </motion.div>
    </div>
  );
};

export default Home;
