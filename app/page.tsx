import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link
      href={`tel:555666777`}
      target="_top"
      className="flex items-center gap-2"
    >
      Click Me
    </Link>
  );
}
