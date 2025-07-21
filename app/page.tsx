import Image from 'next/image';

export default function Home() {
    return (
        <div className={"flex justify-center items-center"}>
            <article className="flex flex-col w-sm my-20">
                <Image
                    alt={"Julia Fox above the toilet bowl"}
                    src={'/posts/fox.jpg'}
                    width={800}
                    height={500}
                    priority={true}
                />
                <h2 className={"text-2xl font-bold mb-2"}>My first blog post</h2>
                <p>I don't know what to say. Just will text some words in English. I hope I haven't mistakes in this
                    simple sentenses.</p>
            </article>
        </div>
    );
}
