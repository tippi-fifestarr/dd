import { Inter, Gorditas } from "next/font/google";

const gorditas = Gorditas({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gorditas",
});

const inter = Inter({ subsets: ["latin"] });
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p className={`${inter.className}`}>
        Page is a girl, somebody that has a funny story to tell about me.
      </p>
    </div>
  );
}
