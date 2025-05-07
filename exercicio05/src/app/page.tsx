'use client';

import Image from "next/image";
import { useEffect } from "react";

const testCreateUser = async () => {
  const testFetch = await fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Dedao',
      email: 'dedao@email.com'
    }),
  });
  const res = await testFetch.json();
  console.log(res);
}

export default function Home() {
  
  useEffect(() => {
    const testFetch = async () => {
      await testCreateUser();
    };
    testFetch();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
