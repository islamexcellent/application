import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Blog Islamique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Bienvenue sur Mon Blog Islamique</h1>
        {/* Ici, vous pouvez ajouter vos composants ou contenu */}
      </main>

      <Footer />
    </>
  );
}
