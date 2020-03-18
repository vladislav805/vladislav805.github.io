declare module "*.json" {
    interface Json extends Record<string, string | number | boolean | Json | string[] | number[] | boolean[] | Json[]> {

    }
    const value: Json;
    export default value;
}
