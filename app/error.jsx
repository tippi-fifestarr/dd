"use client";

export default function Error({ error, reset }) {
  return (
    <div className="rounded-xl text-slate-500 bg-slate-300">
      this is donked up: {error.message}
      <button
        className="flex border-solid bg-slate-500 rounded text-slate-50 hover:bg-slate-300 active:bg-slate-700"
        onClick={() => reset()}
      >
        reload
      </button>
    </div>
  );
}
