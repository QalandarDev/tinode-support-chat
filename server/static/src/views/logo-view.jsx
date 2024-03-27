/* This is just a static page to display when no conversation is selected. */
import React from 'react';
import {FormattedMessage} from 'react-intl';

import {Tinode} from 'tinode-sdk';

import {APP_NAME} from '../config.js';

export default class LogoView extends React.PureComponent {
    render() {
        const version = APP_NAME + ' (' + Tinode.getLibrary() + ')';
        return (
            <div id="dummy-view">
                {/*<div style={{*/}
                {/*    display: 'flex',*/}
                {/*    justifyContent: "center",*/}
                {/*    margin: '20px 0',*/}
                {/*}}>*/}
                {/*    <img src="/img/logo.png" alt=""/>*/}
                {/*</div>*/}
            </div>
        );
    }
};
