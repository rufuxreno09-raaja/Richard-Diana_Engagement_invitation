export interface EngagementConfig {
  couple: {
    groom: {
      name: string;
      fullName: string;
      parents?: string;
      initial: string;
    };
    bride: {
      name: string;
      fullName: string;
      parents?: string;
      initial: string;
    };
    monogram: string; // e.g. "R & D"
    photo?: string; // Path or URL to couple photo
    photoPlaceholderAlt: string;
  };
  event: {
    title: string;
    subtitle: string;
    date: string; // Formatted date string
    dayOfWeek: string;
    year: number;
    month: number; // 1-12
    day: number;
    // Time configuration: null or empty string means time is yet to be announced (counts down to midnight 00:00 IST)
    time: string | null;
    timeDisplayNote?: string;
    timezone: string; // "Asia/Kolkata"
    isoDateTarget: string; // Target ISO string for countdown
  };
  venue: {
    name: string;
    hall: string;
    city: string;
    state: string;
    country: string;
    fullAddress: string;
    // Real Google Maps search URL without fake lat/long
    googleMapsUrl: string;
  };
  reception: {
    enabled: boolean;
    title?: string;
    date?: string;
    time?: string;
    venue?: string;
    notes?: string;
  };
  dressCode?: {
    enabled: boolean;
    title?: string;
    theme?: string;
    description?: string;
  };
  announcement: {
    tagline: string;
    message: string;
  };
  schedule: {
    enabled: boolean;
    note?: string;
    items: Array<{
      time: string;
      title: string;
      description: string;
      iconName?: string;
    }>;
  };
  gallery: {
    enabled: boolean;
    title: string;
    subtitle: string;
    images: Array<{
      id: string;
      url: string;
      caption: string;
      category?: string;
    }>;
  };
  audio: {
    enabled: boolean;
    src: string;
    title: string;
    artist?: string;
  };
  sharing: {
    invitationUrl: string; // Will fallback to current window location
    messageTemplate: string;
    hashtags?: string;
  };
  meta: {
    title: string;
    description: string;
    ogImage: string;
    themeColor: string;
  };
}

export const engagementConfig: EngagementConfig = {
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
    // Neutral romantic floral emblem placeholder by default
    photo: "/images/couple-floral-crest.svg",
    photoPlaceholderAlt: "Richard Rex and Diana Joe Engagement Emblem",
  },
  event: {
    title: "Engagement Ceremony",
    subtitle: "In Celebration of Love, Faith & Family",
    date: "Sunday, November 29, 2026",
    dayOfWeek: "Sunday",
    year: 2026,
    month: 11,
    day: 29,
    // Time is not yet announced. Keep null to count down to start of Nov 29 in Asia/Kolkata
    time: null,
    timeDisplayNote: "Evening 6.30 pm",
    timezone: "Asia/Kolkata",
    // 2026-11-29T00:00:00+05:30 in ISO format
    isoDateTarget: "2026-11-29T00:00:00+05:30",
  },
  venue: {
    name: "Malligai Thirumana Mandapam",
    hall: "Main Marriage Hall",
    city: "Thiruvannamalai",
    state: "Tamil Nadu",
    country: "India",
    fullAddress: "Malligai Thirumana Mandapam, Thiruvannamalai, Tamil Nadu, India",
    // Direct Google Maps address search query (no invented GPS coordinates)
    googleMapsUrl: "https://maps.app.goo.gl/RB2mPJwH2bNeuEye9?g_st=ac",
  },
  reception: {
    enabled: false, // Disabled until details are supplied
    title: "Family Reception",
    date: "To be announced",
    time: "To be announced",
    venue: "To be announced",
    notes: "Reception details will be updated once confirmed.",
  },
  dressCode: {
    enabled: false, // Disabled until details are supplied
    title: "Dress Code",
    theme: "Traditional / Elegant Formal",
    description: "Pastel shades, ivory, blush pink, or celebratory formal attire.",
  },
  announcement: {
    tagline: "Together with our families",
    message:
      "With the blessings of God and the love of our families, we joyfully invite you to celebrate the engagement of Richard Rex and Diana Joe. Your presence, prayers, and blessings will make this special occasion even more memorable.",
  },
  schedule: {
    // Disabled until confirmed by organizers
    enabled: false,
    note: "Suggested itinerary — specific timings will be updated upon final confirmation.",
    items: [
      {
        time: "To be announced",
        title: "Welcome of Guests",
        description: "Arrival, traditional welcome, and welcome drinks.",
        iconName: "HeartHandshake",
      },
      {
        time: "To be announced",
        title: "Christian Engagement Ceremony",
        description: "Prayer of thanksgiving, exchange of rings, and family blessings.",
        iconName: "Sparkles",
      },
      {
        time: "To be announced",
        title: "Family Photographs & Felicitations",
        description: "Capturing cherished moments with our beloved family and guests.",
        iconName: "Camera",
      },
      {
        time: "To be announced",
        title: "Refreshments & Feast",
        description: "A joyful celebratory dinner in honor of the couple.",
        iconName: "Utensils",
      },
    ],
  },
  gallery: {
    // Elegant tasteful floral placeholders enabled
    enabled: true,
    title: "Moments of Grace",
    subtitle: "A glimpse of love, devotion, and celebration",
    images: [
      {
        id: "gallery-1",
        url: "/images/gallery-floral-1.svg",
        caption: "A Journey of Love & Grace",
        category: "Romance",
      },
      {
        id: "gallery-2",
        url: "/images/gallery-floral-2.svg",
        caption: "Bound by Blessings & Joy",
        category: "Ceremony",
      },
      {
        id: "gallery-3",
        url: "/images/gallery-floral-3.svg",
        caption: "Two Hearts, One Promise",
        category: "Love",
      },
      {
        id: "gallery-4",
        url: "/images/gallery-floral-4.svg",
        caption: "Cherished Family Moments",
        category: "Celebration",
      },
    ],
  },
  audio: {
    enabled: true,
    // Gentle romantic Christian acoustic instrumental track placeholder
    src: "/music/acoustic-romance.mp3",
    title: "Gentle Hymn of Love (Instrumental)",
    artist: "Acoustic Blessing",
  },
  sharing: {
    invitationUrl: "https://richard-diana-engagement.vercel.app",
    messageTemplate:
      "🕊️ *Engagement Invitation* 🕊️\n\nWith the blessings of God and the love of our families, we joyfully invite you to the Engagement Ceremony of:\n\n✨ *Richard Rex & Diana Joe* ✨\n\n🗓️ *Date:* Sunday, November 29, 2026\n📍 *Venue:* Malligai Thirumana Mandapam, Thiruvannamalai, Tamil Nadu\n\nView our interactive engagement invitation card online:\n",
    hashtags: "RichardAndDiana #ChristianEngagement #BlessedBeginning",
  },
  meta: {
    title: "Richard Rex & Diana Joe | Engagement Invitation",
    description:
      "Joyfully inviting you to celebrate the Engagement Ceremony of Richard Rex & Diana Joe on Sunday, November 29, 2026 at Malligai Thirumana Mandapam, Thiruvannamalai.",
    ogImage: "/images/og-preview.png",
    themeColor: "#FDFAF6",
  },
};
