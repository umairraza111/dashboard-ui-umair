'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
  }); 

  return (
    <main className="relative p-6">
      {/* Background Box */}
      <div
        className="bg-[#4FD1C5] w-full h-[28rem] bg-center bg-no-repeat bg-cover rounded-2xl absolute left-0 right-0 top-6 mx-auto"
        style={{ backgroundImage: "url('/img/pattern.png')" }}
      ></div>
      
      {/* Header */}
      <header className="relative z-20 top-5 pb-3 flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">Logo</Link>
        <nav>
          <ul className="flex gap-4 text-white">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/sign-up" className="border-b border-white">Sign Up</Link></li>
            <li><Link href="/sign-in">Sign In</Link></li>
          </ul>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-bold mb-3">Welcome!</h1>
        <p>Use these awesome forms to login or create a new account for free.</p>
      </section>

      {/* Sign-Up Form */}
      <section className="flex justify-center relative z-10">
        <div className="w-2/5 bg-white rounded-2xl shadow-2xl p-12">
          <h2 className="text-center font-bold mb-6">Register</h2>
          <form className="space-y-6">
            <div>
              <label className="block font-medium">Name</label>
              <input type="text" name="name" className="w-full p-3 border rounded-xl" placeholder="Your full name" />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input type="email" name="email" className="w-full p-3 border rounded-xl" placeholder="Your email address" />
            </div>
            <div>
              <label className="block font-medium">Password</label>
              <input type="password" name="password" className="w-full p-3 border rounded-xl" placeholder="Your password" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="rememberMe" className="mr-2" />
              <span>Remember Me</span>
            </div>
            <button type="submit" className="w-full p-3 bg-[#4FD1C5] text-white rounded-xl">Sign Up</button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Already have an account? <Link href="/sign-in" className="text-[#4FD1C5]">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
