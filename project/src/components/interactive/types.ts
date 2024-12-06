export interface BodyPoint {
  id: string;
  position: string;
}

export interface BodySystem {
  id: string;
  category: string;
  humanTitle: string;
  oceanTitle: string;
  description: string;
  humanFunction: string;
  oceanFunction: string;
  oceanDescription: string;
  oceanImage: string;
  points: BodyPoint[];
}