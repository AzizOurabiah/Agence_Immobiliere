export interface Product {
  name: string;
  description: string;
  imageUrl: string;
  categorie: string[];
  sold_price: number;
  regular_price: number;
  created_at: Date;
  update_at?: Date;
}
