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
    required: [true, "Id is required."],
  },
});

const Request = models.Cover || model("Request", RequestSchema);

export default Request;
