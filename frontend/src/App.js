import TestAPI from "./components/TestAPI";

function App() {
  return (
    <div className="App">
      <h1>Food Donation & Waste Tracker</h1>
      <TestAPI />
    </div>
  );
}

export default App;

// !! this is for login purpose
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // In a real application, this would be a call to your authentication API
//       setTimeout(() => {
//         toast.success("Signed in successfully! Welcome back.");
        
//         // Store user info in localStorage for demo purposes
//         localStorage.setItem("user", JSON.stringify({ email, role: "donor" }));
        
//         // Redirect to the donor dashboard
//         navigate("/donor-dashboard");
//         setIsLoading(false);
//       }, 1500);
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen flex-col">
//       <Navbar />
      
//       <main className="flex-1 flex items-center justify-center">
//         <div className="w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/3c8a0652-5561-4a5f-9853-266377b3de2b.png)' }}>
//           <div className="flex min-h-screen items-center justify-center">
//             <div className="w-full max-w-md rounded-lg bg-gray-200/90 backdrop-blur-sm p-8 shadow-lg">
//               <div className="mb-8 text-center">
//                 <h1 className="text-3xl font-bold text-gray-800">Login</h1>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-gray-700">Email address</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="h-12 bg-gray-300/80 border-0"
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="password" className="text-gray-700">Password</Label>
//                   <Input
//                     id="password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="h-12 bg-gray-300/80 border-0"
//                   />
//                 </div>
                
//                 <Button 
//                   type="submit" 
//                   className="w-full h-12 text-base rounded-full bg-white hover:bg-gray-100 text-gray-800"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <div className="flex items-center justify-center">
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Signing In...
//                     </div>
//                   ) : (
//                     "Login"
//                   )}
//                 </Button>
                
//                 <div className="text-center">
//                   <Link to="/forgot-password" className="text-green-600 hover:text-green-700 text-sm">
//                     Forgot password?
//                   </Link>
//                 </div>
                
//                 <div className="text-center text-gray-700 text-sm mt-4">
//                   Don't have an account?{" "}
//                   <Link to="/register" className="text-green-600 hover:text-green-700 font-medium">
//                     Create Account
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// }
