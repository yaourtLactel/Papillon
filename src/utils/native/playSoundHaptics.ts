import { useThemeSoundHaptics } from "@/hooks/Theme_Sound_Haptics";
import { Sound } from "expo-av/build/Audio";
import * as Haptics from "expo-haptics";

const useSoundHapticsWrapper = () => {
  const { enableHaptics, enableSon } = useThemeSoundHaptics();

  const triggerHapticFeedback = async (
    type: "impact" | "notification",
    // Objet pour éviter les erreurs TypeScript
    haptic: {
      impact?: Haptics.ImpactFeedbackStyle,
      notification?: Haptics.NotificationFeedbackType
    }
  ) => {
    if (enableHaptics) {
      if (type === "impact") await Haptics.impactAsync(haptic.impact);
      else await Haptics.notificationAsync(haptic.notification);
    }
  };

  const playSound = (sound: Sound) => {
    if (enableSon) {
      sound.replayAsync();
    }
  };

  return { triggerHapticFeedback, playSound };
};

export default useSoundHapticsWrapper;
