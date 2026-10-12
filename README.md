# Richard Rex & Diana Joe — Premium Christian Engagement Invitation

An animated digital engagement invitation website designed for **Richard Rex & Diana Joe**, celebrating their Engagement Ceremony on **Sunday, November 29, 2026** at **Malligai Thirumana Mandapam, Thiruvannamalai, Tamil Nadu, India**.

Inspired by luxury floral engagement cards, the design features ivory and blush-pink tones, champagne gold ornaments, sage green accents, delicate watercolor roses, classic calligraphy typography, and interactive touch-and-motion animations.

---

## 🌟 Key Features

1. **Opening Invitation Cover Card**
   - Fullscreen animated invitation cover with monogram `R & D`, watercolor floral frame, and golden filigree.
   - Smooth entrance transition into the celebration details upon clicking **"Open Invitation"**.

2. **Interactive Scratch-to-Reveal Card (HTML Canvas)**
   - Authentic scratch-off experience using finger or mouse gestures on canvas.
   - Clears at ~40% threshold and releases celebration confetti.
   - Includes accessible fallback button for visitors with assistive devices or motion preferences.

3. **Live Engagement Countdown (Asia/Kolkata Timezone)**
   - Real-time countdown for Days, Hours, Minutes, and Seconds.
   - Configurable ceremony time; targets midnight IST (00:00) with a clear indicator until an exact time is announced.
   - Automatic celebration message on the day of the event and warm post-event blessing message afterwards.
   - Zero-layout-shift hydration handling.

4. **Ceremony & Venue Details**
   - Framed event card detailing Malligai Thirumana Mandapam, Thiruvannamalai.
   - One-touch **"Get Directions"** button linking directly to verified Google Maps search (no fake coordinates).
   - Convenient **"Copy Address"** button with instant visual feedback.
   - Editable fields for ceremony time, dress code, and optional family reception.

5. **Couple Profile & Floral Frames**
   - Elegant arch frame showcasing the couple's monogram crest.
   - Fully customizable for high-resolution couple photographs.

6. **Photo Gallery & Lightbox**
   - Responsive grid with delicate floral frames.
   - Fullscreen lightbox modal with touch swipe, previous/next buttons, and keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).

7. **Music & Interactive Sharing**
   - User-interaction-triggered background music with a floating toggle.
   - Built-in Web Audio API soothing chord chime synthesizer fallback if an MP3 file is absent.
   - One-tap **WhatsApp sharing** with pre-formatted message including names, date, venue, and public URL.
   - Native mobile sharing via `navigator.share` where supported.
   - Falling rose petal ambient animation.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with curated romantic ivory, blush, gold & sage palette
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & CSS Keyframes
- **Icons:** [Lucide React](https://lucide.dev/)
- **Canvas Interaction:** HTML5 2D Canvas & [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Fonts:** Cormorant Garamond, Playfair Display, Great Vibes, Cinzel & Montserrat via `next/font/google`
- **Deployment:** Vercel-ready with zero database or paid API requirements

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.17+ or 20+ installed
- npm or yarn or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 How to Customize Event Details

All configuration is centralized in **`src/config/engagement.ts`**. You do not need to edit component files to update event details.

### Editing Couple Names & Monogram
```typescript
couple: {
  groom: {
    name: "Richard Rex",
    fullName: "Richard Rex",
    initial: "R",
  },
  bride: {
    name: "Diana Joe",
    fullName: "Diana Joe",
    initial: "D",
  },
  monogram: "R & D",
  photo: "/images/couple-floral-crest.svg", // Replace with your couple photo path
  photoPlaceholderAlt: "Richard Rex and Diana Joe Engagement",
}
```

### Updating Ceremony Date & Time
```typescript
event: {
  title: "Engagement Ceremony",
  subtitle: "In Celebration of Love, Faith & Family",
  date: "Sunday, November 29, 2026",
  dayOfWeek: "Sunday",
  year: 2026,
  month: 11,
  day: 29,
  // To set a confirmed time (e.g. 10:30 AM IST):
  time: "10:30 AM IST", // or keep null if time is to be announced
  timeDisplayNote: "Ceremony begins at 10:30 AM IST",
  timezone: "Asia/Kolkata",
  isoDateTarget: "2026-11-29T10:30:00+05:30",
}
```

### Updating Venue & Google Maps
```typescript
venue: {
  name: "Malligai Thirumana Mandapam",
  hall: "Main Marriage Hall",
  city: "Thiruvannamalai",
  state: "Tamil Nadu",
  country: "India",
  fullAddress: "Malligai Thirumana Mandapam, Thiruvannamalai, Tamil Nadu, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Malligai+Thirumana+Mandapam,+Thiruvannamalai,+Tamil+Nadu,+India",
}
```

### Enabling Reception Details
To show family reception details, set `enabled: true`:
```typescript
reception: {
  enabled: true,
  title: "Family Reception & Dinner",
  date: "Sunday, November 29, 2026",
  time: "7:00 PM onwards",
  venue: "Malligai Thirumana Mandapam Dining Hall",
  notes: "Dinner served following the ceremony.",
}
```

### Enabling Dress Code
```typescript
dressCode: {
  enabled: true,
  title: "Dress Code",
  theme: "Traditional / Elegant Formal",
  description: "Ivory, champagne gold, blush pink, or celebratory formal wear.",
}
```

### Enabling Schedule Timeline
To show the event itinerary:
```typescript
schedule: {
  enabled: true, // change from false to true
  items: [
    { time: "09:30 AM", title: "Welcome of Guests", description: "Arrival and traditional welcome.", iconName: "HeartHandshake" },
    { time: "10:30 AM", title: "Engagement Ceremony", description: "Exchange of rings and prayers.", iconName: "Sparkles" },
    { time: "12:00 PM", title: "Family Photographs", description: "Capturing memories with guests.", iconName: "Camera" },
    { time: "01:00 PM", title: "Celebratory Feast", description: "Lunch banquet.", iconName: "Utensils" },
  ]
}
```

---

## 📸 Replacing Photographs & Music

1. **Couple Photograph:**
   - Place your couple photo in `public/images/couple.jpg`.
   - Update `photo: "/images/couple.jpg"` in `src/config/engagement.ts`.

2. **Photo Gallery Images:**
   - Add your photos into `public/images/`.
   - Update `gallery.images` array in `src/config/engagement.ts` with your image paths and custom captions.

3. **Background Music:**
   - Drop your MP3 file into `public/music/acoustic-romance.mp3`.
   - Or change the `audio.src` path in `src/config/engagement.ts`.

---

## 🚢 Deploying to Vercel

### Option 1: Vercel Web Dashboard (Recommended)

1. Create a GitHub repository and push your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Richard Rex & Diana Joe Engagement Invitation"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Next.js will be detected automatically (Framework Preset: `Next.js`).
5. Click **"Deploy"**.
6. Once deployed, copy your production URL (e.g. `https://richard-diana-engagement.vercel.app`) and paste it into `sharing.invitationUrl` in `src/config/engagement.ts` so WhatsApp sharing automatically links to your live domain.

### Option 2: Deploy using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

---

## 📱 WhatsApp Sharing Preview

When shared on WhatsApp, guests receive:

```
🕊️ Engagement Invitation 🕊️

With the blessings of God and the love of our families, we joyfully invite you to the Engagement Ceremony of:

✨ Richard Rex & Diana Joe ✨

🗓️ Date: Sunday, November 29, 2026
📍 Venue: Malligai Thirumana Mandapam, Thiruvannamalai, Tamil Nadu

View our interactive engagement invitation card online:
https://richard-diana-engagement.vercel.app

#RichardAndDiana #ChristianEngagement #BlessedBeginning
```
