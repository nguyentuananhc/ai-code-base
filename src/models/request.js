import { Schema, model, models } from "mongoose";

const RequestSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  token: {
    type: String,
    required: [true, "Token is required."],
  },
  requestId: {
    type: String,
    required: [true, "Request ID is required."],
  },
  songTitle: {
    type: String,
    required: [true, "Song title is required."],
  },
});

const Request = models.Request || model("Request", RequestSchema);

export default Request;
