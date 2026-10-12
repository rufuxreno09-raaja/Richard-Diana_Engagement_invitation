# Background Music Instructions

To add your custom background music:

1. Place your MP3 file here: `public/music/acoustic-romance.mp3`
2. You can also customize the song title and path in `src/config/engagement.ts` under the `audio` section:
   ```ts
   audio: {
     enabled: true,
     src: "/music/your-song.mp3",
     title: "Your Song Name",
     artist: "Artist Name"
   }
   ```
3. If no file is provided or playback fails, the website includes a built-in soothing Web Audio API chime fallback that plays gentle, harmonious acoustic chords.
