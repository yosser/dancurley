export interface IImage {
    alt: string;
    created: string;
    collectionId: string;
    collectionName: string;
    description: string;
    id: string;
    image: string;
    title: string;
    updated: string;
}

export interface ILink {
    id: string;
    url: string;
    label: string;
}

export interface IGallery {
    collectionId: string;
    collectionName: string;
    id: string;
    name: string;
    subHeading: string;
    field: string;  // error in naming this field
    expand: {
        field: IImage[];
    };
    created: string;
    updated: string;
}
export interface ICategory {
    collectionId: string;
    collectionName: string;
    id: string;
    name: string;
    nav: string;
    description: string;
    image: string;
    created: string;
    updated: string;
}

export interface IProject {
    collectionId: string;
    collectionName: string;
    id: string;
    title: string;
    focusTitle: string;
    primaryCategory: string;
    category: string;
    role: string;
    date: string;
    description: string;
    externalLink: string;
    expand: {
        externalLinks: ILink[];
        galleries: IGallery[];
        focusImage: IImage | null;
        image: IImage | null;
    };
    dateRange: string;
    active: boolean;
    created: string;
    updated: string;
}