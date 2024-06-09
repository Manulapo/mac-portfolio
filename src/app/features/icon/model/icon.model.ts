
export interface iconConfigModel {
    src: string;
    iconSize: string;
    iconText?: textModel;
}

export interface textModel {
    text: string;
    textSize?: string;
    textColor?: string;
    textCentered?: boolean;
    textFont?: string;
    bootstrapClass?: string;
}