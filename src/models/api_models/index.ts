import React from "react";

export interface PostDataType {
    key: React.Key;
    id: number;
    userId: number;
    title: string;
    body: string;
}