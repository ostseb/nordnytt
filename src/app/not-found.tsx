"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const r = useRouter();
  return (
    <main>
      <p className="mb-10">Kunde inte hitta sidan. <a className="cursor-pointer underline" onClick={() => r.back()}>Gå tillbaka</a></p>
      <img src="/404.webp" className="scale-150 origin-top"/>
    </main>
  );
}
