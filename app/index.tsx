import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Start at login for now
    router.replace("/(auth)/login");
  }, []);

  return null;
}
