const mongoose = require("mongoose");

const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
    Coursecode:String,
    description:String,
  },
  { collection: "PdfDetails" }
);

mongoose.model("PdfDetails", PdfDetailsSchema);
