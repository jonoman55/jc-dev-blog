import Head from 'next/head';
import { FeaturedPosts } from '../sections';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
    return (
        <>
            <Head>
                <title>JC Dev Blog</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="container px-10 mx-auto mb-8">
                <FeaturedPosts />
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <div className="col-span-1 lg:col-span-8">
                        {posts.map((post) => (
                            <PostCard key={post.title} post={post.node} />
                        ))}
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="relative lg:sticky top-8">
                            <PostWidget />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: { posts }
    };
};