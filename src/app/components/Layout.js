import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="container mx-auto my-8">
                {children}
            </main>
            <Footer />
        </>
    );
}
