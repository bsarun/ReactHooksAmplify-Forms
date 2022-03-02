import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Expander, ExpanderItem } from '@aws-amplify/ui-react';
import TopicsToMonitor from '../TopicsToMonitor';
import InternetConnections from '../InternetConnections';
import { DASHBOARD_CONST } from './constants';

export const Dashboard = () => {
    return (
        <Expander className="my-expander" type="multiple" defaultValue={['item-2']}>
            <ExpanderItem title={DASHBOARD_CONST.TITLE1} value="item-1">
                <TopicsToMonitor />
            </ExpanderItem>
            <ExpanderItem title={DASHBOARD_CONST.TITLE2} value="item-2">
                <InternetConnections />
            </ExpanderItem>
            <ExpanderItem title={DASHBOARD_CONST.TITLE3} value="item-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </ExpanderItem>
            <ExpanderItem title={DASHBOARD_CONST.TITLE4} value="item-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </ExpanderItem>
            <ExpanderItem title={DASHBOARD_CONST.TITLE5} value="item-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </ExpanderItem>
        </Expander>
    );
};