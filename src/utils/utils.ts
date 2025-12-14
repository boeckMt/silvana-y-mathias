export const setReplCorsHeaders = (headers: Headers) => {
    // Needed for SharedArrayBuffer in the REPL

    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    headers.set('Cross-Origin-Embedder-Policy', 'unsafe-none');
};
