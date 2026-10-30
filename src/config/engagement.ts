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
    monogram: string;
    photo?: string;
    photoPlaceholderAlt: string;
  };
  event: {
    title: string;
    subtitle: string;
    date: string;
    dayOfWeek: string;
    year: number;
    month: number;
    day: number;
    time: string | null;
    timeDisplayNote?: string;
    timezone: string;
    isoDateTarget: string;
  };
  venue: {
    name: string;
    hall: string;
    city: string;
    state: string;
    country: string;
    fullAddress: string;
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
    invitationUrl: string;
    messageTemplate: string;
    hashtags?: string;
  };
  meta: {
    title: string;
    description: string;
    ogImage: string;
    themeColor: string;
  };
  bibleVerse: {
    text: string;
    reference: string;
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
      name: "Diana Jose",
      fullName: "Diana Jose",
      initial: "D",
    },
    monogram: "R & D",
    photo: "/images/couple-photo.jpg",
    photoPlaceholderAlt: "Richard Rex and Diana Jose Engagement Photo",
  },
  event: {
    title: "Engagement Ceremony",
    subtitle: "In Celebration of Love, Faith & Family",
    date: "Sunday, November 29, 2026",
    dayOfWeek: "Sunday",
    year: 2026,
    month: 11,
    day: 29,
    time: "6:30 PM",
    timeDisplayNote: "Evening 6:30 PM",
    timezone: "Asia/Kolkata",
    isoDateTarget: "2026-11-29T18:30:00+05:30",
  },
  venue: {
    name: "Malliha Mahal",
    hall: "Main Marriage Hall",
    city: "Thiruvannamalai",
    state: "Tamil Nadu",
    country: "India",
    fullAddress: "Malliha Mahal, Thiruvannamalai, Tamil Nadu, India",
    googleMapsUrl: "https://maps.app.goo.gl/RB2mPJwH2bNeuEye9?g_st=ac",
  },
  reception: {
    enabled: false,
    title: "Family Reception",
    date: "To be announced",
    time: "To be announced",
    venue: "To be announced",
    notes: "Reception details will be updated once confirmed.",
  },
  dressCode: {
    enabled: false,
    title: "Dress Code",
    theme: "Traditional / Elegant Formal",
    description: "Pastel shades, ivory, blush pink, or celebratory formal attire.",
  },
  announcement: {
    tagline: "Together with our families",
    message:
      "With the blessings of God and the love of our families, we joyfully invite you to celebrate the engagement of Richard Rex and Diana Jose. Your presence, prayers, and blessings will make this special occasion even more memorable.",
  },
  schedule: {
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
    enabled: true,
    title: "Moments of Grace",
    subtitle: "A glimpse of love, devotion, and celebration",
    images: [
      {
        id: "gallery-1",
        url: "/images/couple-together.jpg",
        caption: "A Journey of Love & Grace",
        category: "Romance",
      },
      {
        id: "gallery-2",
        url: "/images/diana-portrait.jpg",
        caption: "The Beautiful Bride — Diana Jose",
        category: "Bride",
      },
      {
        id: "gallery-3",
        url: "/images/richard-portrait.jpg",
        caption: "The Handsome Groom — Richard Rex",
        category: "Groom",
      },
      {
        id: "gallery-4",
        url: "/images/flower-bouquet.jpg",
        caption: "Blooming Love & Blessings",
        category: "Celebration",
      },
      {
        id: "gallery-5",
        url: "/images/couple-photo.jpg",
        caption: "Cherished Together Forever",
        category: "Love",
      },
    ],
  },
  audio: {
    enabled: true,
    src: "/music/acoustic-romance.mp3",
    title: "Gentle Hymn of Love (Instrumental)",
    artist: "Acoustic Blessing",
  },
  sharing: {
    invitationUrl: "https://richard-diana-engagement.vercel.app",
    messageTemplate:
      "🕊️ *Engagement Invitation* 🕊️\n\nWith the blessings of God and the love of our families, we joyfully invite you to the Engagement Ceremony of:\n\n✨ *Richard Rex & Diana Jose* ✨\n\n🗓️ *Date:* Sunday, November 29, 2026\n📍 *Venue:* Malligai Thirumana Mandapam, Thiruvannamalai, Tamil Nadu\n\nView our interactive engagement invitation card online:\n",
    hashtags: "RichardAndDiana #ChristianEngagement #BlessedBeginning",
  },
  meta: {
    title: "Richard Rex & Diana Jose | Engagement Invitation",
    description:
      "Joyfully inviting you to celebrate the Engagement Ceremony of Richard Rex & Diana Jose on Sunday, November 29, 2026 at Malligai Thirumana Mandapam, Thiruvannamalai.",
    ogImage: "/images/og-preview.png",
    themeColor: "#0c0a1a",
  },
  bibleVerse: {
    text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
    reference: "1 Corinthians 13:13",
  },
};
