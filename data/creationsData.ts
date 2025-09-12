export interface CreationItem {
  id: string;
  type: string;
  media: string;
  title: string;
  description: string;
  isVideo: boolean;
  availableInShop: boolean;
}

export const creations: CreationItem[] = [
  {
    id: "dirty",
    type: "Clay",
    media: "/images/Clay_Dirty.jpg", 
    title: "The Cat That Became Dirt",
    description: "Hand-sculpted air dry clay",
    isVideo: false,
    availableInShop: false, 
  },
  {
    id: "cat-room-frame",
    type: "Clay",
    media: "/images/Clay_Frame_Cats.jpg", 
    title: "Cat Room Frame",
    description: "Hand-sculpted air dry clay",
    isVideo: false,
    availableInShop: true, 
  },
    {
      id: "little-buddies",
      type: "Clay",
      media: "/images/Clay_LittleBuddies.jpg", 
      title: "Little Buddies Magnets",
      description: "Hand-sculpted air dry clay",
      isVideo: false,
      availableInShop :false, 
  },
   {
    id: "yellow-carebear",
    type: "Clay",
    media: "/images/Clay_Yellow_CareBear.jpg", 
    title: "Funshine Bear Desk Buddy / Charm",
    description: "Hand-sculpted air dry clay",
    isVideo: false,
    availableInShop: false, 
  },
    {
    id: "dog-angel",
    type: "Clay",
    media: "/images/Clay_Angel_Sunny.jpg",
    title: "Sunny",
    description: "Hand-sculpted air dry clay",
    isVideo: false,
    availableInShop: false, 
  },
    {
      id: "portrait-cat",
    type: "Acrylic",
    media: "/images/Acrylic_Tupi.jpg", 
    title: "Painting of Tupi",
    description: "Acrylic Painting",
    isVideo: false,
    availableInShop: false, 
  },
  {
    id: "otter-couple",
    type: "Acrylic",
    media: "/images/Acrylic_Otter_Couple.jpg", 
    title: "Painting of an Otter Couple",
    description: "Acrylic Painting",
    isVideo: false,
    availableInShop: false, 
  },
  {
    id: "tile-cats",
    type: "Acrylic",
    media: "/images/Tile_Cats_Tulip.jpg", 
    title: "Tile Painting of Two Cats",
    description: "Tile Painting",
    isVideo: false,
    availableInShop :false, 
  },
  {
    id: "sol-e-sombra",
    type: "Clay",
    media: "/images/Clay_Magnet_SolESombra.jpg", 
    title: "Magnet of a Restaurant's House",
    description: "Air Dry Clay",
    isVideo: false,
    availableInShop: false, 
  },
];
