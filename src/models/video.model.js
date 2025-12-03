import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      require: [true, "the video is require"],
    },
    thumbnail: {
      type: String,
      require: [true, "the video time is require"],
    },
    title: {
      type: String,
      require: [true, "the video time is require"],
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: String,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

videoSchema.plugin(mongooseAggregatePaginate)

const Video = mongoose.models("video", videoSchema);
