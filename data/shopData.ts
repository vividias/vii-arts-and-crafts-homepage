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
];
