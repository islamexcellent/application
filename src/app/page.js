import Head from 'next/head';
import Layout from './components/Layout';
import Article from './components/Article';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "L'importance du Ramadan",
    content: 'Le Ramadan est un mois de jeûne, de réflexion, de prière et de communauté pour les musulmans...',
    imageUrl: 'chemin-vers-image-ramadan.jpg', // Remplacer par le chemin réel de l'image
  },
  {
    id: 2,
    title: 'Les bienfaits de la prière',
    content: "La prière est un élément clé dans la vie d'un musulman, offrant une structure à la journée...",
    imageUrl: 'chemin-vers-image-priere.jpg', // Remplacer par le chemin réel de l'image
  },
  // Ajoutez d'autres articles comme nécessaire
];


export default function Home() {
  return (
    <Layout>
      {articles.map(article => (
        <Article key={article.id} {...article} />
      ))}
    </Layout>
  );
}
