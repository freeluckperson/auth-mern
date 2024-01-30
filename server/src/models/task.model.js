import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    completed: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
const Task = mongoose.model("task", taskSchema);
export default Task;

// const taskSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       validate: {
//         validator: (value) => {
//           try {
//             z.string().min(5).parse(value);
//             return true;
//           } catch (error) {
//             return false;
//           }
//         },
//         message: "Title must be at least 5 characters long",
//       },
//     },
//     description: {
//       type: String,
//       validate: {
//         validator: (value) => {
//           try {
//             z.string().min(10).parse(value);
//             return true;
//           } catch (error) {
//             return false;
//           }
//         },
//         message: "Description must be at least 10 characters long",
//       },
//     },
//     completed: {
//       type: Boolean,
//       required: true,
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "user",
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
