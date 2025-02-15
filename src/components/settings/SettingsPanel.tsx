import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Settings2, Lock, Key } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface SettingsPanelProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  onResetAuth?: () => void;
}

const SettingsPanel = ({
  isOpen = false,
  onOpenChange = () => {},
  isDarkMode = false,
  onThemeToggle = () => {},
  onResetAuth = () => {},
}: SettingsPanelProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 right-4 rounded-full"
        >
          <Settings2 className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[320px] bg-background">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">Settings</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: isDarkMode ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isDarkMode ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </motion.div>
              <Label htmlFor="theme-toggle">Dark Mode</Label>
            </div>
            <Switch
              id="theme-toggle"
              checked={isDarkMode}
              onCheckedChange={onThemeToggle}
            />
          </div>

          <Separator />

          {/* Security Settings */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Security</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={onResetAuth}
              >
                <Lock className="mr-2 h-4 w-4" />
                Reset Authentication Method
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Key className="mr-2 h-4 w-4" />
                Change Password
              </Button>
            </div>
          </div>

          <Separator />

          {/* App Info */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">About</h3>
            <div className="text-sm text-muted-foreground">
              <p>SecureVault PC Lock</p>
              <p>Version 1.0.0</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SettingsPanel;
