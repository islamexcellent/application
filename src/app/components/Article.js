// components/Article.js
export default function Article({ title, content, imageUrl }) {
    return (
        <article className="border border-gray-300 p-4 rounded-md my-2">
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-auto" />}
            <h2 className="text-2xl font-bold my-2">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </article>
    );
}