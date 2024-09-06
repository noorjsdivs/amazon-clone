type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

type Review = {
  reviewerName: string;
  rating: number;
  comment: string;
  reviewerEmail: string;
};

export type Product = {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: Dimensions;
  discountPercentage: number;
  id: number;
  images: string[];
  meta: Meta;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight?: number;
  quantity?: number | undefined;
};

export interface Session {
  user: {
    expires: any;
    user: {
      email: string;
      image: string;
      name: string;
    };
  };
}
