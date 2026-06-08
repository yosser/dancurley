import PocketBase from 'pocketbase';
import type { RecordModel } from 'pocketbase';
import { useState, useEffect, useRef } from 'react';


export function useSubscribeItem(pb: PocketBase | null, collection: string, id: string, expand: string = '') {
    const initialised = useRef(false);
    const [data, setData] = useState<RecordModel | null>(null);
    useEffect(() => {
        if (pb && !initialised.current && id) {
            pb.collection(collection).getOne(id, expand ? { expand: expand } : undefined).then((result) => {
                setData(result);
                pb.collection(collection).subscribe(id, function (e: { record: RecordModel, action: string }) {
                    if (e.action === 'delete') {
                        setData(null);
                        pb.collection(collection).unsubscribe(id);
                    } else if (e.action === 'update') {
                        setData(data => ({ ...data, ...e.record }));
                    }
                });
            });
            initialised.current = true;
        }
        return () => {
            if (pb) {
                pb.collection(collection).unsubscribe(id);
                initialised.current = false;
            }
        }
    }, [pb, collection, id, expand]);
    return data;
}
