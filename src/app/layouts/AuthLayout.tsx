import { Outlet, Link } from "react-router-dom"
import { motion } from "motion/react"

export function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Form */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-20 xl:px-24 bg-background z-10">
        <div className="mx-auto w-full max-w-sm lg:w-96">
           <div className="mb-8">
             <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  S
                </div>
                StepByWeb
              </Link>
           </div>
           <Outlet />
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 lg:flex-1 relative bg-slate-900 text-white overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-slate-900 z-0" />
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="relative z-10 max-w-lg text-center p-8"
        >
          <div className="mb-8 relative mx-auto w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
           <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-2xl shadow-2xl">
             <pre className="text-left text-sm font-mono text-blue-200">
               <code>
{`class Developer {
  constructor() {
    this.passion = "Coding";
    this.skills = [];
  }

  async learn() {
    while(true) {
      await this.study();
      await this.practice();
      this.skills.push("New Skill");
    }
  }
}`}
               </code>
             </pre>
           </div>
           <h2 className="mt-8 text-3xl font-bold">Mulai Perjalanan Codingmu</h2>
           <p className="mt-4 text-slate-300">
             Bergabung dengan ribuan developer lainnya dan tingkatkan skill web development kamu hari ini.
           </p>
        </motion.div>
      </div>
    </div>
  )
}
