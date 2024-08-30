declare module 'find-free-port' {
    function findFreePort(startPort: number, callback: (err: any, port: number) => void): void;
    export default findFreePort;
}