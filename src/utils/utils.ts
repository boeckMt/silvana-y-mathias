export const setReplCorsHeaders = (headers: Headers) => {
    // Needed for SharedArrayBuffer in the REPL

    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    headers.set('Cross-Origin-Embedder-Policy', 'unsafe-none');
};

export const getItems = () => {
    const items = ['', ''];
    return {
        item1: atob(items[0]),
        item2: atob(items[1]),
    }
}