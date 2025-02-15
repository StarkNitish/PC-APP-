import React from "react";
import { motion } from "framer-motion";
import { Lock, Unlock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LockButtonProps {
  isLocked?: boolean;
  onToggle?: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const LockButton = ({
  isLocked = false,
  onToggle = () => {},
  disabled = false,
  size = "lg",
}: LockButtonProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32,
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center justify-center bg-background p-4 rounded-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                rotate: isLocked ? 0 : 180,
              }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "rounded-full border-2",
                  sizeClasses[size],
                  isLocked
                    ? "border-destructive hover:border-destructive"
                    : "border-primary hover:border-primary",
                  "transition-colors duration-300",
                )}
                onClick={onToggle}
                disabled={disabled}
              >
                <motion.div
                  initial={false}
                  animate={{ scale: [0.8, 1] }}
                  transition={{ duration: 0.2 }}
                >
                  {isLocked ? (
                    <Lock className="text-destructive" size={iconSizes[size]} />
                  ) : (
                    <Unlock className="text-primary" size={iconSizes[size]} />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isLocked ? "Click to unlock" : "Click to lock"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LockButton;
