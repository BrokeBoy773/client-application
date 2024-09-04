import React from 'react';
import Classes from './StatusBox.module.css';
import { StatusList } from '../../../entities/status/ui/statusList';
import { StatusBoxTitle } from '../../../entities/status/ui/statusBoxTitle';

export const StatusBox = ({ statusList, fetchStatusList }) => {
    return (
        <div className={Classes.container}>
            <StatusBoxTitle counter={statusList.length} fetchStatusList={fetchStatusList} />
            <StatusList statusList={statusList} fetchStatusList={fetchStatusList} />
        </div>
    );
}