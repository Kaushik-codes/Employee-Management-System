import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-[#080a0f] overflow-hidden">

      {/* Background orbs */}
      <div className="absolute top-[-15%] left-[-10%] h-96 w-96 rounded-full bg-sky-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] h-96 w-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] left-[60%] h-64 w-64 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md flex flex-col rounded-3xl border border-white/5 bg-white/3 backdrop-blur-xl px-10 py-12 shadow-2xl">

        {/* Logo / Brand */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-1">
            <span className="text-sky-400 text-xl">⚡</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
            Welcome back
          </h2>
          <p className="text-sm text-slate-500">Sign in to your EMS account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all duration-200 focus:border-sky-500/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-sky-500/30"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all duration-200 focus:border-sky-500/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-sky-500/30"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full cursor-pointer rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 hover:border-sky-500/40 text-sky-400 font-semibold text-sm py-3 tracking-wide transition-all duration-200 active:scale-[0.98]"
          >
            Sign in →
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;