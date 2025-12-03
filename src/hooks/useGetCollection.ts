import { useEffect, useState } from "react";
import Client, { type RecordModel } from 'pocketbase';

export function useGetCollection(pb: Client | null, token: string, collection: string, expand: string = '') {
    const [items, setItems] = useState<RecordModel[]>([]);
    useEffect(() => {
        if (pb && token.length > 0) {
            pb.collection(collection).getFullList(expand ? { expand: expand } : undefined).then((response: RecordModel[]) => {
                setItems(response as RecordModel[]);
            }).catch((error) => {
                console.error(error);
            });

        }
    }, [pb, token, collection, expand]);
    return items;
}
