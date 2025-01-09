import * as yup from "yup";

export const CONTACT_VALIDATION_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username cannot exceed 50 characters"),
    email: yup.string().email("Invalid email address").required("Email is required"),
  message: yup
    .string()
    .required("Message is required")
    .max(600, "Message cannot exceed 600 characters"),
});


