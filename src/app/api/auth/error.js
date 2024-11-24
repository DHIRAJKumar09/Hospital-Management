import { useRouter } from 'next/router';

export default function ErrorPage() {
    const { query } = useRouter();
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Error</h1>
            <p>{query.error ? `Error: ${query.error}` : 'An unknown error occurred.'}</p>
        </div>
    );
}
