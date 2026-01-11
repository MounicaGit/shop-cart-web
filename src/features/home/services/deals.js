import { backpack, deliveryTruck, headphones, jeans, returnPolicy, shoes, smartPhone, smartWatch, warranty, } from "../../../utils/imageConstants";

export const deals = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "electronics",
    rating: 4.3,
    ratingCount: 235,
    discountedPrice: 4999,
    originalPrice: 8999,
    discount: 50,
    isWishlisted: false,
    isAddedToCart: false,
    imageUrl: headphones,
    allProductImagesUrl: [headphones, smartPhone],
    deliveryDetails: [
      { imageUrl: deliveryTruck, deliveryData: "Free Delivery", timePeriod: "By Tomorrow" },
      { imageUrl: returnPolicy, deliveryData: "7 Days Replacement", timePeriod: "Easy returns" },
      { imageUrl: warranty, deliveryData: "1 Year Warranty", timePeriod: "Manufacturer warranty" }
    ],
    specifications: {
      brand: "AudioTech",
      batteryLife: "30 hours",
      connectivity: "Bluetooth 5.2",
      noiseCancellation: "Active",
      weight: "250g"
    },
    details: "Experience immersive sound with deep bass and active noise cancellation. Ideal for music, calls, and travel.",
    reviews: []
  },

  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "electronics",
    rating: 4.2,
    ratingCount: 4534,
    discountedPrice: 3999,
    originalPrice: 7999,
    discount: 40,
    isWishlisted: false,
    isAddedToCart: false,
    imageUrl: smartWatch,
    allProductImagesUrl: [smartWatch, headphones],
    deliveryDetails: [
      { imageUrl: deliveryTruck, deliveryData: "Free Delivery", timePeriod: "By Tomorrow" },
      { imageUrl: returnPolicy, deliveryData: "7 Days Replacement", timePeriod: "Easy returns" },
      { imageUrl: warranty, deliveryData: "1 Year Warranty", timePeriod: "Manufacturer warranty" }
    ],
    specifications: {
      brand: "FitPulse",
      display: "1.75 inch AMOLED",
      batteryLife: "10 days",
      waterResistance: "5 ATM",
      sensors: "Heart Rate, SpO2, Sleep"
    },
    details: "Track your health and workouts with a bright AMOLED display and long-lasting battery.",
    reviews: []
  },

  {
    id: 3,
    name: "Casual Denim Jeans",
    category: "fashion",
    rating: 3.5,
    ratingCount: 65,
    discountedPrice: 1500,
    originalPrice: 2900,
    discount: 48,
    isWishlisted: false,
    isAddedToCart: false,
    imageUrl: jeans,
    allProductImagesUrl: [jeans],
    deliveryDetails: [
      { imageUrl: deliveryTruck, deliveryData: "Free Delivery", timePeriod: "2-3 Days" },
      { imageUrl: returnPolicy, deliveryData: "10 Days Return", timePeriod: "Easy returns" }
    ],
    specifications: {
      brand: "UrbanStyle",
      material: "Denim Cotton",
      fit: "Slim Fit",
      waistRise: "Mid Rise",
      stretchable: "Yes"
    },
    details: "Comfortable slim-fit denim jeans suitable for everyday wear with stretchable fabric.",
    reviews: []
  },

  {
    id: 4,
    name: "Running Shoes",
    category: "footwear",
    rating: 5.0,
    ratingCount: 6868,
    discountedPrice: 3000,
    originalPrice: 5000,
    discount: 40,
    isWishlisted: false,
    isAddedToCart: false,
    imageUrl: shoes,
    allProductImagesUrl: [shoes],
    deliveryDetails: [
      { imageUrl: deliveryTruck, deliveryData: "Free Delivery", timePeriod: "By Tomorrow" },
      { imageUrl: returnPolicy, deliveryData: "7 Days Return", timePeriod: "Easy returns" }
    ],
    specifications: {
      brand: "RunMax",
      soleMaterial: "EVA Foam",
      closure: "Lace-Up",
      weight: "Lightweight",
      idealFor: "Running & Training"
    },
    details: "Lightweight running shoes with cushioned sole for maximum comfort and performance.",
    reviews: []
  },

  {
    id: 5,
    name: "Latest Smartphone",
    category: "electronics",
    rating: 4.2,
    ratingCount: 1200,
    discountedPrice: 65000,
    originalPrice: 79000,
    discount: 18,
    isWishlisted: false,
    isAddedToCart: false,
    imageUrl: smartPhone,
    allProductImagesUrl: [smartPhone, headphones],
    deliveryDetails: [
      { imageUrl: deliveryTruck, deliveryData: "Free Delivery", timePeriod: "By Tomorrow" },
      { imageUrl: returnPolicy, deliveryData: "7 Days Replacement", timePeriod: "Easy returns" },
      { imageUrl: warranty, deliveryData: "1 Year Warranty", timePeriod: "Manufacturer warranty" }
    ],
    specifications: {
      brand: "TechOne",
      display: "6.7 inch AMOLED",
      processor: "Snapdragon 8 Gen",
      camera: "108MP",
      battery: "5000mAh"
    },
    details: "Flagship smartphone with powerful performance, stunning camera, and premium design.",
    reviews: []
  },

  {
    id: 6,
    name: "Premium Backpack",
    category: "accessories",
    rating: 3.0,
    ratingCount: 223,
    discountedPrice: 1999,
    originalPrice: 4999,
    discount: 60,
    isWishlisted: false,
    isAddedToCart: false,
    imageUrl: backpack,
    allProductImagesUrl: [backpack],
    deliveryDetails: [
      { imageUrl: deliveryTruck, deliveryData: "Free Delivery", timePeriod: "2-3 Days" },
      { imageUrl: returnPolicy, deliveryData: "10 Days Return", timePeriod: "Easy returns" }
    ],
    specifications: {
      brand: "TravelPro",
      capacity: "35 Liters",
      material: "Water Resistant Polyester",
      compartments: "3 Main + Laptop Sleeve",
      idealFor: "Travel & Office"
    },
    details: "Spacious and durable backpack designed for daily commute, travel, and office use.",
    reviews: []
  }
];
