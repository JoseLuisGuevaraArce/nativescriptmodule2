export interface TopicModel {
  id: number,
  topic: string,
  category: string,
  image: string,
  description: string,
  details: Details[]
};

export interface Details {
  user: string,
  comment: string,
  avatar: string
}