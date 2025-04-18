export interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  isNew?: boolean;
  isTopTen?: boolean;
  topTenNumber?: number;
}

export interface TopTenMovie {
  id: string;
  title: string;
  imageUrl: string;
  rank: number;
}

// Game data
export interface Game {
  id: string;
  title: string;
  thumbnailUrl: string;
  hoverVideoUrl?: string;
  genre: string[];
  releaseYear: number;
  rating: string;
  description: string;
  playerCount: string;
  isNew?: boolean;
  isHot?: boolean;
  isPremium?: boolean;
  rank?: number;
  playCount?: number;
}

export interface GameCategory {
  id: string;
  title: string;
  games: Game[];
}

// Featured game for hero section
export const featuredGame: Game = {
  id: "pubg-1",
  title: "BATTLEGROUNDS MOBILE INDIA",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1564049489314-60d154ff107d?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  hoverVideoUrl:
    "https://www.youtube.com/embed/hMKZ2H6Cux0?autoplay=0&controls=0&showinfo=0&rel=0",
  genre: ["Battle Royale", "Shooting", "Action"],
  releaseYear: 2023,
  rating: "16+",
  description:
    "BATTLEGROUNDS MOBILE INDIA (BGMI) is the Indian version of PUBG Mobile, exclusively for players in India. Dive into intense battles with 100 players fighting to be the last one standing on various maps. Experience tactical gameplay with realistic weapons, vehicles, and team-based combat.",
  playerCount: "1-4 Players",
  isHot: true,
  playCount: 15000000,
};

// Game categories
export const gameCategories: GameCategory[] = [
  {
    id: "popular",
    title: "Popular Games",
    games: [
      {
        id: "bgmi-1",
        title: "BATTLEGROUNDS MOBILE INDIA",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1564049489314-60d154ff107d?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hoverVideoUrl:
          "https://www.youtube.com/embed/hMKZ2H6Cux0?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Battle Royale", "Action"],
        releaseYear: 2023,
        rating: "16+",
        description:
          "Battle royale game with 100 players fighting to be the last one standing.",
        playerCount: "1-4 Players",
        isHot: true,
      },
      {
        id: "cod-mobile-1",
        title: "Call of Duty: Mobile",
        thumbnailUrl:
          "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/mobile/bo6-season-3/store-codm-hero-carousel.webp?imwidth=1080",
        hoverVideoUrl:
          "https://www.youtube.com/embed/slIbUg9GzBM?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["FPS", "Action"],
        releaseYear: 2022,
        rating: "18+",
        description:
          "Experience the thrill of Call of Duty on mobile with multiplayer, battle royale, and more.",
        playerCount: "1-10 Players",
      },
      {
        id: "freefire-1",
        title: "Free Fire MAX",
        thumbnailUrl:
          "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg",
        hoverVideoUrl:
          "https://www.youtube.com/embed/VesBYJVhJsU?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Battle Royale", "Action"],
        releaseYear: 2022,
        rating: "12+",
        description:
          "Enhanced version of Free Fire with improved graphics and features.",
        playerCount: "1-4 Players",
        isNew: true,
      },
      {
        id: "apex-1",
        title: "Apex Legends Mobile",
        thumbnailUrl:
          "https://drop-assets.ea.com/images/5IGoTV5rH6JaZGudUuZQ24/ee3a7815ffa698ccf72f5b992a31e0d2/apex-hero-medium-about-modes.png?im=AspectCrop=(16,9),xPosition=0.46611909650924027,yPosition=0.4080145719489982&q=85&w=1280",
        hoverVideoUrl:
          "https://www.youtube.com/embed/kUXselvURK4?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Battle Royale", "FPS"],
        releaseYear: 2022,
        rating: "16+",
        description:
          "Character-based battle royale with unique abilities and team play.",
        playerCount: "3 Players",
      },
      {
        id: "valorant-1",
        title: "Valorant Mobile",
        thumbnailUrl:
          "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1c1776bd1bdd921061a53953d81a393ef69ce633-1920x1080.jpg?auto=format&fit=fill&q=80&w=1184",
        hoverVideoUrl:
          "https://www.youtube.com/embed/e_E9W2vsRbQ?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Tactical FPS"],
        releaseYear: 2024,
        rating: "16+",
        description:
          "Tactical FPS where precise gunplay meets unique agent abilities.",
        playerCount: "5v5",
        isNew: true,
      },
    ],
  },
  {
    id: "top-10",
    title: "Top 10 Games This Week",
    games: [
      {
        id: "bgmi-2",
        title: "BATTLEGROUNDS MOBILE INDIA",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1564049489314-60d154ff107d?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        genre: ["Battle Royale"],
        releaseYear: 2023,
        rating: "16+",
        description:
          "Battle royale game with 100 players fighting to be the last one standing.",
        playerCount: "1-4 Players",
        rank: 1,
      },
      {
        id: "cod-mobile-2",
        title: "Call of Duty: Mobile",
        thumbnailUrl:
          "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/mobile/bo6-season-3/store-codm-hero-carousel.webp?imwidth=1080",
        genre: ["FPS"],
        releaseYear: 2022,
        rating: "18+",
        description: "Experience the thrill of Call of Duty on mobile.",
        playerCount: "1-10 Players",
        rank: 2,
      },
      {
        id: "freefire-2",
        title: "Free Fire MAX",
        thumbnailUrl:
          "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg",
        genre: ["Battle Royale"],
        releaseYear: 2022,
        rating: "12+",
        description: "Enhanced version of Free Fire with improved graphics.",
        playerCount: "1-4 Players",
        rank: 3,
      },
      {
        id: "apex-2",
        title: "Apex Legends Mobile",
        thumbnailUrl:
          "https://drop-assets.ea.com/images/5IGoTV5rH6JaZGudUuZQ24/ee3a7815ffa698ccf72f5b992a31e0d2/apex-hero-medium-about-modes.png?im=AspectCrop=(16,9),xPosition=0.46611909650924027,yPosition=0.4080145719489982&q=85&w=1280",
        genre: ["Battle Royale"],
        releaseYear: 2022,
        rating: "16+",
        description: "Character-based battle royale with unique abilities.",
        playerCount: "3 Players",
        rank: 4,
      },
      {
        id: "valorant-2",
        title: "Valorant Mobile",
        thumbnailUrl:
          "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1c1776bd1bdd921061a53953d81a393ef69ce633-1920x1080.jpg?auto=format&fit=fill&q=80&w=1184",
        genre: ["Tactical FPS"],
        releaseYear: 2024,
        rating: "16+",
        description: "Tactical FPS with unique agent abilities.",
        playerCount: "5v5",
        rank: 5,
      },
      {
        id: "lol-wild-rift",
        title: "League of Legends: Wild Rift",
        thumbnailUrl:
          "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3",
        genre: ["MOBA"],
        releaseYear: 2021,
        rating: "12+",
        description: "Strategic team-based MOBA game.",
        playerCount: "5v5",
        rank: 6,
      },
      {
        id: "minecraft",
        title: "Minecraft",
        thumbnailUrl:
          "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
        genre: ["Sandbox"],
        releaseYear: 2011,
        rating: "7+",
        description: "Creative sandbox game with endless possibilities.",
        playerCount: "1-8 Players",
        rank: 7,
      },
      {
        id: "genshin",
        title: "Genshin Impact",
        thumbnailUrl:
          "https://act-webstatic.hoyoverse.com/puzzle/hk4e/pz_MfTXnpAAy6/resource/puzzle/2025/03/05/24d8dc550994d07a213acffa544f1296_8750053204747244787.png?x-oss-process=image/format,webp/quality,Q_90",
        genre: ["RPG", "Adventure"],
        releaseYear: 2020,
        rating: "12+",
        description: "Open-world action RPG with elemental combat.",
        playerCount: "1-4 Players",
        rank: 8,
      },
      {
        id: "roblox",
        title: "Roblox",
        thumbnailUrl:
          "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcTP2lFc8FG4XlAAYZYMXkbLmeZJQ",
        genre: ["Platform", "Variety"],
        releaseYear: 2006,
        rating: "7+",
        description: "Platform with countless user-created games.",
        playerCount: "Varies",
        rank: 9,
      },
      {
        id: "clash-royale",
        title: "Clash Royale",
        thumbnailUrl:
          "https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2UwmGFpjI-_2YKD_5TI5ZOBKyJoy_SA",
        genre: ["Strategy", "Card"],
        releaseYear: 2016,
        rating: "9+",
        description: "Real-time strategy card game.",
        playerCount: "1v1 or 2v2",
        rank: 10,
      },
    ],
  },
  {
    id: "new-releases",
    title: "New Releases",
    games: [
      {
        id: "valorant-3",
        title: "Valorant Mobile",
        thumbnailUrl:
          "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1c1776bd1bdd921061a53953d81a393ef69ce633-1920x1080.jpg?auto=format&fit=fill&q=80&w=1184",
        hoverVideoUrl:
          "https://www.youtube.com/embed/e_E9W2vsRbQ?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Tactical FPS"],
        releaseYear: 2024,
        rating: "16+",
        description:
          "Tactical FPS where precise gunplay meets unique agent abilities.",
        playerCount: "5v5",
        isNew: true,
      },
      {
        id: "freefire-3",
        title: "Free Fire MAX",
        thumbnailUrl:
          "https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg",
        hoverVideoUrl:
          "https://www.youtube.com/embed/VesBYJVhJsU?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Battle Royale", "Action"],
        releaseYear: 2022,
        rating: "12+",
        description:
          "Enhanced version of Free Fire with improved graphics and features.",
        playerCount: "1-4 Players",
        isNew: true,
      },
      {
        id: "pubgns-1",
        title: "PUBG: New State",
        thumbnailUrl:
          "https://www.krafton.com/wp-content/uploads/2021/06/bt-new-img2-min.png",
        hoverVideoUrl:
          "https://www.youtube.com/embed/m-0yY9cE2LU?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Battle Royale", "Action"],
        releaseYear: 2023,
        rating: "16+",
        description:
          "Futuristic battle royale set in 2051 with advanced weapons and vehicles.",
        playerCount: "1-4 Players",
        isNew: true,
      },
      {
        id: "diablo-immortal",
        title: "Diablo Immortal",
        thumbnailUrl:
          "https://bnetcmsus-a.akamaihd.net/cms/blog_header/gs/GSM43YTBKXPO1744413897016.png",
        hoverVideoUrl:
          "https://www.youtube.com/embed/XkQc92JDOhk?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["ARPG", "MMO"],
        releaseYear: 2022,
        rating: "16+",
        description: "Mobile MMO ARPG set in the Diablo universe.",
        playerCount: "Multiplayer",
        isNew: true,
      },
      {
        id: "honkai-star-rail",
        title: "Honkai: Star Rail",
        thumbnailUrl:
          "https://act-webstatic.hoyoverse.com/puzzle/hkrpg/pz_SbNtGiZNa2/resource/puzzle/2025/03/21/4f832c831933c72b5844224b8df7e316_7655585096033011862.png?x-oss-process=image/format,webp/quality,Q_90",
        hoverVideoUrl:
          "https://www.youtube.com/embed/w8vPZrMFiZ4?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["RPG", "Turn-based"],
        releaseYear: 2023,
        rating: "12+",
        description: "Space fantasy RPG with turn-based combat.",
        playerCount: "Single player",
        isNew: true,
      },
    ],
  },
  {
    id: "premium-games",
    title: "Premium Games",
    games: [
      {
        id: "cod-warzone-m",
        title: "Call of Duty: Warzone Mobile",
        thumbnailUrl:
          "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/mobile/bo6-season-3/store-codm-hero-carousel.webp?imwidth=1080",
        hoverVideoUrl:
          "https://www.youtube.com/embed/Hl5kWRIIvnM?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Battle Royale", "FPS"],
        releaseYear: 2023,
        rating: "18+",
        description:
          "Mobile version of the popular Call of Duty: Warzone battle royale.",
        playerCount: "Up to 120 Players",
        isPremium: true,
      },
      {
        id: "fifa-mobile",
        title: "EA SPORTS FC Mobile",
        thumbnailUrl:
          "https://drop-assets.ea.com/images/1AlygTPGvsKARO0tTsaJ38/5a434df35a12125e0c02e855d1e537e0/EAS_FC25_STD_MOBILE_01.jpg?im=AspectCrop=(4,3),xPosition=0.5858333333333333,yPosition=0.3244444444444444&q=85&w=1191",
        hoverVideoUrl:
          "https://www.youtube.com/embed/mE0Q84GLQ_0?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Sports", "Football"],
        releaseYear: 2023,
        rating: "3+",
        description: "Official football game with real players and teams.",
        playerCount: "1v1",
        isPremium: true,
      },
      {
        id: "cyberpunk-m",
        title: "Cyberpunk 2077 Mobile",
        thumbnailUrl:
          "https://www.cyberpunk.net/build/images/cyberpunk/keyart-booklet@1x-6fce3457.jpg",
        hoverVideoUrl:
          "https://www.youtube.com/embed/qIcTM8WXFjk?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["RPG", "Open World"],
        releaseYear: 2023,
        rating: "18+",
        description: "Mobile adaptation of the futuristic RPG.",
        playerCount: "Single player",
        isPremium: true,
        isNew: true,
      },
      {
        id: "gta-sa",
        title: "Grand Theft Auto: San Andreas",
        thumbnailUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/12120/header.jpg",
        hoverVideoUrl:
          "https://www.youtube.com/embed/u_CbHrBbHNQ?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Action", "Open World"],
        releaseYear: 2013,
        rating: "18+",
        description: "Classic open-world action game set in San Andreas.",
        playerCount: "Single player",
        isPremium: true,
      },
      {
        id: "asphalt-9",
        title: "Asphalt 9: Legends",
        thumbnailUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1815780/header.jpg",
        hoverVideoUrl:
          "https://www.youtube.com/embed/XPdApl18lE8?autoplay=1&controls=0&showinfo=0&rel=0",
        genre: ["Racing"],
        releaseYear: 2018,
        rating: "12+",
        description:
          "Arcade racing game with stunning visuals and licensed cars.",
        playerCount: "Multiplayer",
        isPremium: true,
      },
    ],
  },
];

// Recommended games
export const recommendedGames: Game[] = [
  {
    id: "bgmi-rec",
    title: "BATTLEGROUNDS MOBILE INDIA",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1564049489314-60d154ff107d?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverVideoUrl:
      "https://www.youtube.com/embed/hMKZ2H6Cux0?autoplay=1&controls=0&showinfo=0&rel=0",
    genre: ["Battle Royale", "Action"],
    releaseYear: 2023,
    rating: "16+",
    description:
      "Battle royale game with 100 players fighting to be the last one standing.",
    playerCount: "1-4 Players",
    isHot: true,
  },
  {
    id: "valorant-rec",
    title: "Valorant Mobile",
    thumbnailUrl:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1c1776bd1bdd921061a53953d81a393ef69ce633-1920x1080.jpg?auto=format&fit=fill&q=80&w=1184",
    hoverVideoUrl:
      "https://www.youtube.com/embed/e_E9W2vsRbQ?autoplay=1&controls=0&showinfo=0&rel=0",
    genre: ["Tactical FPS"],
    releaseYear: 2024,
    rating: "16+",
    description:
      "Tactical FPS where precise gunplay meets unique agent abilities.",
    playerCount: "5v5",
    isNew: true,
  },
  {
    id: "cod-warzone-rec",
    title: "Call of Duty: Warzone Mobile",
    thumbnailUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/mobile/bo6-season-3/store-codm-hero-carousel.webp?imwidth=1080",
    hoverVideoUrl:
      "https://www.youtube.com/embed/Hl5kWRIIvnM?autoplay=1&controls=0&showinfo=0&rel=0",
    genre: ["Battle Royale", "FPS"],
    releaseYear: 2023,
    rating: "18+",
    description:
      "Mobile version of the popular Call of Duty: Warzone battle royale.",
    playerCount: "Up to 120 Players",
    isPremium: true,
  },
  {
    id: "genshin-rec",
    title: "Genshin Impact",
    thumbnailUrl:
      "https://act-webstatic.hoyoverse.com/puzzle/hk4e/pz_MfTXnpAAy6/resource/puzzle/2025/03/05/24d8dc550994d07a213acffa544f1296_8750053204747244787.png?x-oss-process=image/format,webp/quality,Q_90",
    hoverVideoUrl:
      "https://www.youtube.com/embed/SY3XGzDousM?autoplay=1&controls=0&showinfo=0&rel=0",
    genre: ["RPG", "Adventure"],
    releaseYear: 2020,
    rating: "12+",
    description: "Open-world action RPG with elemental combat.",
    playerCount: "1-4 Players",
  },
  {
    id: "honkai-rec",
    title: "Honkai: Star Rail",
    thumbnailUrl:
      "https://act-webstatic.hoyoverse.com/puzzle/hkrpg/pz_SbNtGiZNa2/resource/puzzle/2025/03/21/4f832c831933c72b5844224b8df7e316_7655585096033011862.png?x-oss-process=image/format,webp/quality,Q_90",
    hoverVideoUrl:
      "https://www.youtube.com/embed/w8vPZrMFiZ4?autoplay=1&controls=0&showinfo=0&rel=0",
    genre: ["RPG", "Turn-based"],
    releaseYear: 2023,
    rating: "12+",
    description: "Space fantasy RPG with turn-based combat.",
    playerCount: "Single player",
    isNew: true,
  },
];

// export interface Movie {
//   id: string;
//   title: string;
//   imageUrl: string;
//   isNew?: boolean;
//   isTopTen?: boolean;
//   topTenNumber?: number;
// }

// export interface TopTenMovie {
//   id: string;
//   title: string;
//   imageUrl: string;
//   rank: number;
// }

// export const topTenMovies: TopTenMovie[] = [
//   {
//     id: "10",
//     title: "Chhaava",
//     imageUrl:
//       "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/202504103373345_202504.jpg",
//     rank: 1,
//   },
//   {
//     id: "11",
//     title: "Court",
//     imageUrl: "https://i.gadgets360cdn.com/large/image_1_F_1739869799969.jpg",
//     rank: 2,
//   },
//   {
//     id: "12",
//     title: "Perusu",
//     imageUrl:
//       "https://m.media-amazon.com/images/I/61SLNbomadL._UF1000,1000_QL80_.jpg",
//     rank: 3,
//   },
//   {
//     id: "13",
//     title: "Test",
//     imageUrl:
//       "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-149624,resizemode-75,msid-119870837/magazines/panache/from-you-to-test-to-chhaava-to-black-mirror-season-7-watch-these-latest-ott-releases-on-netflix-prime-video-jiohotstar.jpg",
//     rank: 4,
//   },
//   {
//     id: "14",
//     title: "The Woman King",
//     imageUrl:
//       "https://m.media-amazon.com/images/M/MV5BNzM4ODY0NzctZDIyNC00MzE4LWI3NDYtYjIyYTUyZWFmYzJkXkEyXkFqcGc@._V1_.jpg",
//     rank: 5,
//   },
//   {
//     id: "15",
//     title: "Chhaava",
//     imageUrl:
//       "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/202504103373345_202504.jpg",
//     rank: 6,
//   },
//   {
//     id: "16",
//     title: "Court",
//     imageUrl: "https://i.gadgets360cdn.com/large/image_1_F_1739869799969.jpg",
//     rank: 7,
//   },
//   {
//     id: "17",
//     title: "Perusu",
//     imageUrl:
//       "https://m.media-amazon.com/images/I/61SLNbomadL._UF1000,1000_QL80_.jpg",
//     rank: 8,
//   },
//   {
//     id: "18",
//     title: "Test",
//     imageUrl:
//       "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-149624,resizemode-75,msid-119870837/magazines/panache/from-you-to-test-to-chhaava-to-black-mirror-season-7-watch-these-latest-ott-releases-on-netflix-prime-video-jiohotstar.jpg",
//     rank: 9,
//   },
//   {
//     id: "19",
//     title: "The Woman King",
//     imageUrl:
//       "https://m.media-amazon.com/images/M/MV5BNzM4ODY0NzctZDIyNC00MzE4LWI3NDYtYjIyYTUyZWFmYzJkXkEyXkFqcGc@._V1_.jpg",
//     rank: 10,
//   },
// ];
