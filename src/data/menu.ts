import burger from "@/assets/food-burger.jpg";
import fries from "@/assets/food-fries.jpg";
import drink from "@/assets/food-drink.jpg";
import pizza from "@/assets/food-pizza.jpg";
import wings from "@/assets/food-wings.jpg";
import shake from "@/assets/food-shake.jpg";
import veggie from "@/assets/food-veggie.jpg";
import onion from "@/assets/food-onion.jpg";

export type Category = "burgers" | "sides" | "drinks" | "pizza";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  veg: boolean;
  rating: number;
  ingredients: string[];
}

export const categories: { id: Category; label: string; emoji: string }[] = [
  { id: "burgers", label: "Burgers", emoji: "🍔" },
  { id: "sides", label: "Sides", emoji: "🍟" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
  { id: "pizza", label: "Pizza", emoji: "🍕" },
];

export const menu: MenuItem[] = [
  {
    id: "classic-cheeseburger",
    name: "Classic Cheeseburger",
    description: "Double beef patty with melted cheddar, lettuce, tomato, signature sauce.",
    price: 220,
    image: burger,
    category: "burgers",
    veg: false,
    rating: 4.8,
    ingredients: ["Beef patty x2", "Cheddar", "Lettuce", "Tomato", "Brioche bun", "Signature sauce"],
  },
  {
    id: "garden-veggie",
    name: "Garden Veggie Stack",
    description: "Grilled veggie patty, avocado, fresh greens on a whole-wheat bun.",
    price: 180,
    image: veggie,
    category: "burgers",
    veg: true,
    rating: 4.6,
    ingredients: ["Veggie patty", "Avocado", "Lettuce", "Tomato", "Whole-wheat bun"],
  },
  {
    id: "loaded-fries",
    name: "Salted Golden Fries",
    description: "Crispy hand-cut fries tossed in sea salt and rosemary.",
    price: 110,
    image: fries,
    category: "sides",
    veg: true,
    rating: 4.7,
    ingredients: ["Potato", "Sea salt", "Rosemary", "Sunflower oil"],
  },
  {
    id: "onion-rings",
    name: "Crispy Onion Rings",
    description: "Beer-battered onion rings with smoky chipotle dip.",
    price: 140,
    image: onion,
    category: "sides",
    veg: true,
    rating: 4.5,
    ingredients: ["Onion", "Beer batter", "Chipotle dip"],
  },
  {
    id: "fire-wings",
    name: "Fire Chicken Wings",
    description: "Hot-glazed crispy wings tossed in our house buffalo sauce.",
    price: 240,
    image: wings,
    category: "sides",
    veg: false,
    rating: 4.9,
    ingredients: ["Chicken wings", "Buffalo sauce", "Sesame", "Spice rub"],
  },
  {
    id: "iced-cola",
    name: "Iced Cola",
    description: "Chilled cola served over crackling ice. Pure refreshment.",
    price: 70,
    image: drink,
    category: "drinks",
    veg: true,
    rating: 4.4,
    ingredients: ["Cola", "Ice", "Lemon zest"],
  },
  {
    id: "vanilla-shake",
    name: "Vanilla Dream Shake",
    description: "Thick vanilla shake topped with whipped cream and a cherry.",
    price: 160,
    image: shake,
    category: "drinks",
    veg: true,
    rating: 4.8,
    ingredients: ["Vanilla ice cream", "Milk", "Whipped cream", "Cherry"],
  },
  {
    id: "margherita",
    name: "Wood-fired Margherita",
    description: "Classic Margherita with mozzarella, basil and tangy tomato sauce.",
    price: 320,
    image: pizza,
    category: "pizza",
    veg: true,
    rating: 4.9,
    ingredients: ["Mozzarella", "Tomato sauce", "Fresh basil", "Olive oil"],
  },
];

export const getItem = (id: string) => menu.find((m) => m.id === id);
