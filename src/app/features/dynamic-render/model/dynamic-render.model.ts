export interface dynamicRenderModel {
    id: string | any;
    component: any;
    inputs?: { [key: string]: any };
    outputKeys?: string[];
}