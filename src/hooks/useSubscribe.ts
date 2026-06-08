import PocketBase from 'pocketbase';

import type { RecordModel } from 'pocketbase';
import { useState, useEffect, useRef } from 'react';

export function useSubscribe(pb: PocketBase | null, collection: string, skip: boolean = false, filter: string = '', expand: string = '') {
    const initialised = useRef(false);
    const [data, setData] = useState<RecordModel[]>([]);
    useEffect(() => {
        if (pb && !initialised.current && !skip) {
            const params = (filter || expand) ? { filter: filter ?? undefined, expand: expand ?? undefined } : undefined;

            pb.collection(collection).getList(1, 500, params).then((resultList) => {
                setData(resultList.items as RecordModel[]);
            });
            pb.collection(collection).subscribe('*', function (e: { record: RecordModel, action: string }) {
                if (e.action === 'delete') {
                    setData(data => data.filter(item => item.id !== e.record.id));
                } else if (e.action === 'update') {
                    setData(data => data.map(item => item.id === e.record.id ? e.record : item));
                } else if (e.action === 'create') {
                    setData(data => ([...data, e.record]));
                }
            }, params);
            initialised.current = true;
        }
        return () => {
            if (pb) {
                pb.collection(collection).unsubscribe('*');
                initialised.current = false;
            }
        }
    }, [pb, collection, skip, filter, expand]);

    return data;
}
