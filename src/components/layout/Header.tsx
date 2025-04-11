"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "@/lib/axiosInstance";
import { isAxiosError } from "axios";

export function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  // Form states
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/login", {
        identifier: loginData.email,
        password: loginData.password,
      });
      console.log("Login success:", res.data);
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
      // You can auto-switch to login or show a success message
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error("Signup error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          Mythic Arena
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-orange-400">
            Home
          </Link>
          <Link href="/live" className="hover:text-orange-400">
            Live
          </Link>
          <Link href="/games" className="hover:text-orange-400">
            Games
          </Link>
          <Link href="/tournaments" className="hover:text-orange-400">
            Tournaments
          </Link>
          <Link href="/blogs" className="hover:text-orange-400">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-orange-400">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Login Dialog */}
          <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-transparent text-white border-orange-500 hover:bg-orange-500"
              >
                Log In
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="space-y-4 p-4">
                <h2 className="text-2xl font-bold text-center">Log In</h2>
                <div className="space-y-2">
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
              <Button className="bg-orange-500 hover:bg-orange-600">
                Sign Up
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="space-y-4 p-4">
                <h2 className="text-2xl font-bold text-center">
                  Create Account
                </h2>
                <div className="space-y-2">
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
                  >
                    Log In
                  </button>
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}

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
