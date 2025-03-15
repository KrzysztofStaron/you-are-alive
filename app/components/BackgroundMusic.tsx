"use client";

import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const [player, setPlayer] = useState<any>(null);
  const [isMuted, setIsMuted] = useState(false);

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      start: 1260,
      loop: 1,
      playlist: "sQdZqsPp8W8",
    },
  };

  const handleReady = (event: any) => {
    setPlayer(event.target);
    // Start playing when ready
    event.target.playVideo();
    // Set initial volume
    event.target.setVolume(30);
  };

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
        player.setVolume(30);
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="hidden">
        <YouTube videoId="sQdZqsPp8W8" opts={opts} onReady={handleReady} />
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleMute}
        className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </div>
  );
}
