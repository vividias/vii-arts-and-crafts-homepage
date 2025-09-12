export interface ShopItem {
  id: string;
  title: string;
  image?: string;
  alt?: string;
  features?: string[];
  price?: string;
  comingSoon?: boolean;
  description?: string;
}

export const shopItems: ShopItem[] = [
  {
    id: "cat-room-frame",
    title: "Cat Room Frame",
    image: "/images/Clay_Frame_Cats.jpg",
    alt: "Cat Room Frame",
    features: [
      "Frame + Hand-sculpted clay",
      "Custom cat/cats",
      "Personalization of the wallpaper, the framed painting, and the item on top of the table",
    ],
    price: "From €60 (contact me for more info)",
  },
  {
    id: "coming-soon",
    title: "Coming Soon",
    comingSoon: true,
    description: "A new handmade creation will appear here soon.",
  },
];
