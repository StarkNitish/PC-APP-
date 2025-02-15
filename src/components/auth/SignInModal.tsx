import React from "react";
import { motion } from "framer-motion";
import { Apple, Chrome } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SignInModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onGoogleSignIn?: () => void;
  onAppleSignIn?: () => void;
}

const SignInModal = ({
  isOpen = true,
  onClose = () => {},
  onGoogleSignIn = () => {},
  onAppleSignIn = () => {},
}: SignInModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[460px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Welcome to SecureVault
          </DialogTitle>
          <DialogDescription className="text-center">
            Sign in to start protecting your PC with advanced security features
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-6">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="w-full py-6 text-lg"
              onClick={onGoogleSignIn}
            >
              <Chrome className="mr-2 h-5 w-5" />
              Sign in with Google
            </Button>
          </motion.div>

          <div className="flex items-center gap-4">
            <Separator className="flex-grow" />
            <span className="text-sm text-muted-foreground">or</span>
            <Separator className="flex-grow" />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="w-full py-6 text-lg"
              onClick={onAppleSignIn}
            >
              <Apple className="mr-2 h-5 w-5" />
              Sign in with Apple
            </Button>
          </motion.div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
