class AudioManager {
  private currentAudio: HTMLAudioElement | null = null;

  async play(audioRef?: string): Promise<void> {
    if (!audioRef) {
      return;
    }

    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }

    try {
      const audio = new Audio(audioRef);
      this.currentAudio = audio;
      await audio.play();
    } catch {
      console.info(`Mock audio: ${audioRef}`);
    }
  }

  stop(): void {
    if (!this.currentAudio) {
      return;
    }

    this.currentAudio.pause();
    this.currentAudio.currentTime = 0;
    this.currentAudio = null;
  }
}

export const audioManager = new AudioManager();
