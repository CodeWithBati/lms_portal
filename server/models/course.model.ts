import mongoose, { Document, Model, Schema } from "mongoose";

interface IComments extends Document {
  user: object;
  comment: string;
}

interface IReview extends Document {
  user: object;
  rating: number;
  comment: string;
  commentReplies: IComments[];
}

interface ILink extends Document {
  title: string;
  url: string;
}

interface ICourseData extends Document {
  title: string;
  description: string;
  videoURL: string;
  videoThumbnail: object;
  videoSection: string;
  videoLength: number;
  videoPlayer: string;
  links: ILink[];
  suggestions: string;
  comments: IComments[];
}

