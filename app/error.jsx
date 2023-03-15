"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      this is donked up: {error.message}
      <button
        className="flex border-solid bg-slate-500 rounded hover:bg-slate-300 active:bg-slate-700"
        onClick={() => reset()}
      >
        reload
      </button>
    </div>
  );
}
