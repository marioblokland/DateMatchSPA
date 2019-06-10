/**
 * Photo interface, representing
 * the photo model from the API
 */
export interface Photo {
  id: number;
  url: string;
  description: string;
  dateAdded: Date;
  isMain: boolean;
}
