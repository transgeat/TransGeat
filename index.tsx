import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TransGeats Iran</title>
      </Head>
      <main className="p-8 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-6">TransGeats — цифровой мост между Ираном и Россией</h1>
        <p className="text-center mb-4">کمک به تجارت بین ایران و روسیه در شرایط محدودیت‌ها، ساده‌تر، امن‌تر و سریع‌تر.</p>
        {/* Контент лендинга можно вставить здесь */}
        <p className="text-center">Версия для развёртывания на Vercel или хостинг-платформе.</p>
      </main>
    </>
  );
}
