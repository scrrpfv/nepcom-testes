import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
      <>
        <Head>
          <title>Sobre - NEPCOM</title>
        </Head>
        <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
          <h1 className="text-3xl font-semibold mb-4">Sobre a NEPCOM</h1>
          <p className="mb-2">Somos uma empresa júnior especializada em soluções tecnológicas.</p>
          <p className="mb-2">Nosso time atua com desenvolvimento web, freelancing e consultoria em TI.</p>
        </main>
      </>
  );
}