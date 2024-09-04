import React from 'react';
import Classes from './StatusList.module.css';
import { StatusListItem } from './statusListItem';

export const StatusList = ({ statusList, fetchStatusList }) => {
    return (
        <div className={Classes.list}>
            {statusList.map(status =>
                <StatusListItem key={status.id} status={status} fetchStatusList={fetchStatusList} />
            )}
        </div>
    );
}
