const { model, Schema } = require("mongoose");

const lessonSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    num: {
      type: Number,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    quiz: [
      {
        type: Object,
      },
    ],
    isLocked: {
      type: Boolean,
      default: true,
    },
    video: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("Lesson", lessonSchema);
