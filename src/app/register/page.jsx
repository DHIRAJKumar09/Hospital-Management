"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Make sure you have this Button component
import { Input } from "@/components/ui/input"; // And Input component
import { Card } from "@/components/ui/card"; // Optional: You can style your form inside a card
import { useRouter } from "next/navigation"; // Import useRouter for redirection

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "buyer",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // Initialize the router

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please enter a valid email address";

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formErrors = validateForm();
    setErrors(formErrors);

    // If there are validation errors, stop form submission
    if (Object.keys(formErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    // Submit form if no errors
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      // Redirect to the login page after successful registration
      alert("User registered successfully!");
      router.push("/login"); // This will redirect to the login page
    } else {
      alert("Registration failed. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="max-w-md mx-auto p-6 mt-10 shadow-md">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-semibold">
            Username
          </label>
          <Input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
            className="mt-2"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="mt-2"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-semibold">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="mt-2"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-semibold">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded"
          >
            <option value="buyer">Buyer</option>
            <option value="vendor">Vendor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="mt-6 w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </Button>
        <a href="/login">Are you already registered ?</a>
      </form>
    </Card>
  );
}
