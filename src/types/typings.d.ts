declare module "*.json" {
    interface Json extends Record<string, string | number | boolean | Json | string[] | number[] | boolean[] | Json[]> {

    }
    const value: Json;
    export default value;
}

declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}
