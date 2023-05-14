export interface Main {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    name:        string;
    url:         string;
    description: string;
    type:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    category:    string;
    banner:      string;
    image:       string;
    admin:       number;
    members:     Member[];
}

export interface Member {
    id:      number;
    user_id: number;
    status:  string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
