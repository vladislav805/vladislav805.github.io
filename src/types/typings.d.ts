declare module '*.json' {
    interface Json extends Record<string, string | number | boolean | Json | string[] | number[] | boolean[] | Json[]> {

    }
    const value: Json;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
