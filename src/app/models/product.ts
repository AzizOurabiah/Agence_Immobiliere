export interface Product {
  _id: string;
  name: string;
  slug?: string;
  description: string;
  imageUrl: string[];
  category: string[];
  sold_price: number;
  regular_price: number;
  created_at: Date;
  update_at?: Date;
}
