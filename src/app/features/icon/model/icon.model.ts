
export interface iconConfigModel {
    src: string;
    iconSize: string;
    iconText?: textModel;
    bootstrapClass?: string;
}

export interface textModel {
    text: string;
    textSize?: string;
    textColor?: string;
    textCentered?: boolean;
    textFont?: string;
    bootstrapClass?: string;
}