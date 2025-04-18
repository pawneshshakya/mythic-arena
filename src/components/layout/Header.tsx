"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "@/lib/axiosInstance";
import { isAxiosError } from "axios";
import { Menu, X } from "lucide-react";

export function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
  });

  // Update window width on resize and initialization
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Close mobile menu if screen becomes larger than mobile breakpoint
  useEffect(() => {
    if (windowWidth >= 768 && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [windowWidth, mobileMenuOpen]);

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/login", {
        identifier: loginData.email,
        password: loginData.password,
      });
      console.log("Login success:", res.data);
      setLoginOpen(false);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error("Login error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post("/api/auth/register", signupData);
      console.log("Signup successful:", res.data);
      setSignupOpen(false);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error("Signup error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-orange-500 flex-shrink-0"
        >
          Mythic Arena
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-3 lg:space-x-6 flex-wrap justify-center">
          <Link href="/" className="hover:text-orange-400 whitespace-nowrap">
            Home
          </Link>
          <Link
            href="/stream"
            className="hover:text-orange-400 whitespace-nowrap"
          >
            Stream Now
          </Link>
          <Link
            href="/live"
            className="hover:text-orange-400 whitespace-nowrap"
          >
            Live
          </Link>
          <Link
            href="/games"
            className="hover:text-orange-400 whitespace-nowrap"
          >
            Games
          </Link>
          <Link
            href="/tournaments"
            className="hover:text-orange-400 whitespace-nowrap"
          >
            Tournaments
          </Link>
          <Link
            href="/blogs"
            className="hover:text-orange-400 whitespace-nowrap"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-400 whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 rounded hover:bg-gray-800 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Auth Buttons (Hidden on mobile if menu open) */}
        <div
          className={`md:flex items-center space-x-2 lg:space-x-4 ${
            mobileMenuOpen ? "hidden" : "hidden md:flex"
          }`}
        >
          {/* Login Dialog */}
          <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-transparent text-white border-orange-500 hover:bg-orange-500 text-sm md:text-base px-2 md:px-3 py-1 h-auto"
              >
                Log In
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-md mx-auto rounded-lg p-0 overflow-hidden">
              <div className="space-y-4 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-center">
                  Log In
                </h2>
                <div className="space-y-3">
                  <Input
                    placeholder="Email"
                    className="w-full"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-full"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </div>
                <Button
                  onClick={handleLogin}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  Log In
                </Button>
                <p className="text-sm text-center">
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      setLoginOpen(false);
                      setSignupOpen(true);
                    }}
                    className="text-orange-500 hover:underline"
                    type="button"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Signup Dialog */}
          <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
            <DialogTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-600 text-sm md:text-base px-2 md:px-3 py-1 h-auto">
                Sign Up
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-md mx-auto rounded-lg p-0 overflow-hidden">
              <div className="space-y-4 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-center">
                  Create Account
                </h2>
                <div className="space-y-3">
                  <Input
                    placeholder="Full Name"
                    className="w-full"
                    value={signupData.name}
                    onChange={(e) =>
                      setSignupData({ ...signupData, name: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Email"
                    className="w-full"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Mobile Number"
                    value={signupData.mobileNo}
                    onChange={(e) =>
                      setSignupData({ ...signupData, mobileNo: e.target.value })
                    }
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-full"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                  />
                </div>
                <Button
                  onClick={handleSignup}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  Sign Up
                </Button>
                <p className="text-sm text-center">
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      setSignupOpen(false);
                      setLoginOpen(true);
                    }}
                    className="text-orange-500 hover:underline"
                    type="button"
                  >
                    Log In
                  </button>
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 animate-in slide-in-from-top-5 duration-200">
          <nav className="px-4 py-3 flex flex-col">
            <ul className="space-y-1 w-full">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/stream"
                  className="block py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Stream Now
                </Link>
              </li>
              <li>
                <Link
                  href="/live"
                  className="block py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Live
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="block py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/tournaments"
                  className="block py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="block py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Login & Signup Buttons */}
            <div className="mt-4 flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-transparent text-white border-orange-500 hover:bg-orange-500"
                onClick={() => {
                  setLoginOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Log In
              </Button>
              <Button
                className="flex-1 bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  setSignupOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import axios from "@/lib/axiosInstance";
// import { isAxiosError } from "axios";
// import { Menu, X } from "lucide-react"; // for icons

// export function Header() {
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [signupOpen, setSignupOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     mobileNo: "",
//     password: "",
//   });

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("/api/auth/login", {
//         identifier: loginData.email,
//         password: loginData.password,
//       });
//       console.log("Login success:", res.data);
//     } catch (error: unknown) {
//       if (isAxiosError(error)) {
//         console.error("Login error:", error.response?.data || error.message);
//       } else {
//         console.error("Unexpected error:", error);
//       }
//     }
//   };

//   const handleSignup = async () => {
//     try {
//       const res = await axios.post("/api/auth/register", signupData);
//       console.log("Signup successful:", res.data);
//     } catch (error: unknown) {
//       if (isAxiosError(error)) {
//         console.error("Signup error:", error.response?.data || error.message);
//       } else {
//         console.error("Unexpected error:", error);
//       }
//     }
//   };

//   return (
//     <header className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           Mythic Arena
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-orange-400">
//             Home
//           </Link>
//           <Link href="/stream" className="hover:text-orange-400">
//             Stream Now
//           </Link>
//           <Link href="/live" className="hover:text-orange-400">
//             Live
//           </Link>
//           <Link href="/games" className="hover:text-orange-400">
//             Games
//           </Link>
//           <Link href="/tournaments" className="hover:text-orange-400">
//             Tournaments
//           </Link>
//           <Link href="/blogs" className="hover:text-orange-400">
//             Blogs
//           </Link>
//           <Link href="/contact" className="hover:text-orange-400">
//             Contact Us
//           </Link>
//         </nav>

//         {/* Mobile menu toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Auth Buttons (Hidden on mobile if menu open) */}
//         <div
//           className={`md:flex items-center space-x-4 ${
//             mobileMenuOpen ? "hidden" : "hidden md:flex"
//           }`}
//         >
//           {/* Login Dialog */}
//           <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
//             <DialogTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="bg-transparent text-white border-orange-500 hover:bg-orange-500"
//               >
//                 Log In
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-md px-3">
//               <div className="space-y-4 p-2">
//                 <h2 className="text-2xl font-bold text-center">Log In</h2>
//                 <div className="space-y-2">
//                   <Input
//                     placeholder="Email"
//                     className="w-full"
//                     value={loginData.email}
//                     onChange={(e) =>
//                       setLoginData({ ...loginData, email: e.target.value })
//                     }
//                   />
//                   <Input
//                     type="password"
//                     placeholder="Password"
//                     className="w-full"
//                     value={loginData.password}
//                     onChange={(e) =>
//                       setLoginData({ ...loginData, password: e.target.value })
//                     }
//                   />
//                 </div>
//                 <Button
//                   onClick={handleLogin}
//                   className="w-full bg-orange-500 hover:bg-orange-600"
//                 >
//                   Log In
//                 </Button>
//                 <p className="text-sm text-center">
//                   Don't have an account?{" "}
//                   <button
//                     onClick={() => {
//                       setLoginOpen(false);
//                       setSignupOpen(true);
//                     }}
//                     className="text-orange-500 hover:underline"
//                   >
//                     Sign Up
//                   </button>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>

//           {/* Signup Dialog */}
//           <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-orange-500 hover:bg-orange-600">
//                 Sign Up
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-md px-3">
//               <div className="space-y-4 p-2">
//                 <h2 className="text-2xl font-bold text-center">
//                   Create Account
//                 </h2>
//                 <div className="space-y-2">
//                   <Input
//                     placeholder="Full Name"
//                     className="w-full"
//                     value={signupData.name}
//                     onChange={(e) =>
//                       setSignupData({ ...signupData, name: e.target.value })
//                     }
//                   />
//                   <Input
//                     placeholder="Email"
//                     className="w-full"
//                     value={signupData.email}
//                     onChange={(e) =>
//                       setSignupData({ ...signupData, email: e.target.value })
//                     }
//                   />
//                   <Input
//                     placeholder="Mobile Number"
//                     value={signupData.mobileNo}
//                     onChange={(e) =>
//                       setSignupData({ ...signupData, mobileNo: e.target.value })
//                     }
//                   />
//                   <Input
//                     type="password"
//                     placeholder="Password"
//                     className="w-full"
//                     value={signupData.password}
//                     onChange={(e) =>
//                       setSignupData({ ...signupData, password: e.target.value })
//                     }
//                   />
//                 </div>
//                 <Button
//                   onClick={handleSignup}
//                   className="w-full bg-orange-500 hover:bg-orange-600"
//                 >
//                   Sign Up
//                 </Button>
//                 <p className="text-sm text-center">
//                   Already have an account?{" "}
//                   <button
//                     onClick={() => {
//                       setSignupOpen(false);
//                       setLoginOpen(true);
//                     }}
//                     className="text-orange-500 hover:underline"
//                   >
//                     Log In
//                   </button>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {mobileMenuOpen && (
//         <nav className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col justify-center items-center text-center">
//           <ul className="space-y-2 w-full">
//             <li>
//               <Link href="/" className="block py-2 hover:text-orange-400">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/live" className="block py-2 hover:text-orange-400">
//                 Live
//               </Link>
//             </li>
//             <li>
//               <Link href="/games" className="block py-2 hover:text-orange-400">
//                 Games
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/tournaments"
//                 className="block py-2 hover:text-orange-400"
//               >
//                 Tournaments
//               </Link>
//             </li>
//             <li>
//               <Link href="/blogs" className="block py-2 hover:text-orange-400">
//                 Blogs
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className="block py-2 hover:text-orange-400"
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>

//           {/* Login & Signup Buttons */}
//           <div className="mt-4 flex flex-col space-y-2 w-full">
//             <Button
//               variant="outline"
//               className="w-full bg-transparent text-white border-orange-500 hover:bg-orange-500"
//               onClick={() => {
//                 setLoginOpen(true);
//                 setMobileMenuOpen(false);
//               }}
//             >
//               Log In
//             </Button>
//             <Button
//               className="w-full bg-orange-500 hover:bg-orange-600"
//               onClick={() => {
//                 setSignupOpen(true);
//                 setMobileMenuOpen(false);
//               }}
//             >
//               Sign Up
//             </Button>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import axios from "@/lib/axiosInstance";
// import { isAxiosError } from "axios";

// export function Header() {
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [signupOpen, setSignupOpen] = useState(false);

//   // Form states
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     mobileNo: "",
//     password: "",
//   });

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("/api/auth/login", {
//         identifier: loginData.email,
//         password: loginData.password,
//       });
//       console.log("Login success:", res.data);
//     } catch (error: unknown) {
//       if (isAxiosError(error)) {
//         console.error("Login error:", error.response?.data || error.message);
//       } else {
//         console.error("Unexpected error:", error);
//       }
//     }
//   };

//   const handleSignup = async () => {
//     try {
//       const res = await axios.post("/api/auth/register", signupData);
//       console.log("Signup successful:", res.data);
//       // You can auto-switch to login or show a success message
//     } catch (error: unknown) {
//       if (isAxiosError(error)) {
//         console.error("Signup error:", error.response?.data || error.message);
//       } else {
//         console.error("Unexpected error:", error);
//       }
//     }
//   };

//   return (
//     <header className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           Mythic Arena
//         </Link>

//         <nav className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-orange-400">
//             Home
//           </Link>
//           <Link href="/live" className="hover:text-orange-400">
//             Live
//           </Link>
//           <Link href="/games" className="hover:text-orange-400">
//             Games
//           </Link>
//           <Link href="/tournaments" className="hover:text-orange-400">
//             Tournaments
//           </Link>
//           <Link href="/blogs" className="hover:text-orange-400">
//             Blogs
//           </Link>
//           <Link href="/contact" className="hover:text-orange-400">
//             Contact Us
//           </Link>
//         </nav>

//         <div className="flex items-center space-x-4">
//           {/* Login Dialog */}
//           <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
//             <DialogTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="bg-transparent text-white border-orange-500 hover:bg-orange-500"
//               >
//                 Log In
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-md">
//               <div className="space-y-4 p-4">
//                 <h2 className="text-2xl font-bold text-center">Log In</h2>
//                 <div className="space-y-2">
//                   <Input
//                     placeholder="Email"
//                     className="w-full"
//                     value={loginData.email}
//                     onChange={(e) =>
//                       setLoginData({ ...loginData, email: e.target.value })
//                     }
//                   />
//                   <Input
//                     type="password"
//                     placeholder="Password"
//                     className="w-full"
//                     value={loginData.password}
//                     onChange={(e) =>
//                       setLoginData({ ...loginData, password: e.target.value })
//                     }
//                   />
//                 </div>
//                 <Button
//                   onClick={handleLogin}
//                   className="w-full bg-orange-500 hover:bg-orange-600"
//                 >
//                   Log In
//                 </Button>
//                 <p className="text-sm text-center">
//                   Don't have an account?{" "}
//                   <button
//                     onClick={() => {
//                       setLoginOpen(false);
//                       setSignupOpen(true);
//                     }}
//                     className="text-orange-500 hover:underline"
//                   >
//                     Sign Up
//                   </button>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>

//           {/* Signup Dialog */}
//           <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-orange-500 hover:bg-orange-600">
//                 Sign Up
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-md">
//               <div className="space-y-4 p-4">
//                 <h2 className="text-2xl font-bold text-center">
//                   Create Account
//                 </h2>
//                 <div className="space-y-2">
//                   <Input
//                     placeholder="Full Name"
//                     className="w-full"
//                     value={signupData.name}
//                     onChange={(e) =>
//                       setSignupData({ ...signupData, name: e.target.value })
//                     }
//                   />
//                   <Input
//                     placeholder="Email"
//                     className="w-full"
//                     value={signupData.email}
//                     onChange={(e) =>
//                       setSignupData({ ...signupData, email: e.target.value })
//                     }
//                   />
//                   <Input
//                     placeholder="Mobile Number"
//                     value={signupData.mobileNo}
//                     onChange={(e) =>
//                       setSignupData({ ...signupData, mobileNo: e.target.value })
//                     }
//                   />
//                   <Input
//                     type="password"
//                     placeholder="Password"
//                     className="w-full"
//                     value={signupData.password}
//                     onChange={(e) =>
//                       setSignupData({ ...signupData, password: e.target.value })
//                     }
//                   />
//                 </div>
//                 <Button
//                   onClick={handleSignup}
//                   className="w-full bg-orange-500 hover:bg-orange-600"
//                 >
//                   Sign Up
//                 </Button>
//                 <p className="text-sm text-center">
//                   Already have an account?{" "}
//                   <button
//                     onClick={() => {
//                       setSignupOpen(false);
//                       setLoginOpen(true);
//                     }}
//                     className="text-orange-500 hover:underline"
//                   >
//                     Log In
//                   </button>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";

// export function Header() {
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [signupOpen, setSignupOpen] = useState(false);

//   return (
//     <header className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           Mythic Arena
//         </Link>

//         <nav className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-orange-400">
//             Home
//           </Link>
//           <Link href="/games" className="hover:text-orange-400">
//             Games
//           </Link>
//           <Link href="/tournaments" className="hover:text-orange-400">
//             Tournaments
//           </Link>
//           <Link href="/promotions" className="hover:text-orange-400">
//             Promotions
//           </Link>
//           <Link href="/blogs" className="hover:text-orange-400">
//             Blogs
//           </Link>
//           <Link href="/contact" className="hover:text-orange-400">
//             Contact Us
//           </Link>
//         </nav>

//         <div className="flex items-center space-x-4">
//           <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
//             <DialogTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="bg-transparent text-white border-orange-500 hover:bg-orange-500"
//               >
//                 Log In
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-md">
//               <div className="space-y-4 p-4">
//                 <h2 className="text-2xl font-bold text-center">Log In</h2>
//                 <div className="space-y-2">
//                   <Input placeholder="Username or Email" className="w-full" />
//                   <Input
//                     type="password"
//                     placeholder="Password"
//                     className="w-full"
//                   />
//                 </div>
//                 <Button className="w-full bg-orange-500 hover:bg-orange-600">
//                   Log In
//                 </Button>
//                 <p className="text-sm text-center">
//                   Don't have an account?{" "}
//                   <button
//                     onClick={() => {
//                       setLoginOpen(false);
//                       setSignupOpen(true);
//                     }}
//                     className="text-orange-500 hover:underline"
//                   >
//                     Sign Up
//                   </button>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>

//           <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-orange-500 hover:bg-orange-600">
//                 Sign Up
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-md">
//               <div className="space-y-4 p-4">
//                 <h2 className="text-2xl font-bold text-center">
//                   Create Account
//                 </h2>
//                 <div className="space-y-2">
//                   <Input placeholder="Full Name" className="w-full" />
//                   <Input placeholder="Email" className="w-full" />
//                   <Input placeholder="Mobile Number" className="w-full" />
//                   <Input
//                     type="password"
//                     placeholder="Password"
//                     className="w-full"
//                   />
//                 </div>
//                 <Button className="w-full bg-orange-500 hover:bg-orange-600">
//                   Sign Up
//                 </Button>
//                 <p className="text-sm text-center">
//                   Already have an account?{" "}
//                   <button
//                     onClick={() => {
//                       setSignupOpen(false);
//                       setLoginOpen(true);
//                     }}
//                     className="text-orange-500 hover:underline"
//                   >
//                     Log In
//                   </button>
//                 </p>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </header>
//   );
// }
