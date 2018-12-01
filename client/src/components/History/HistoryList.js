import React from 'react';
import moment from 'moment';

import Wrapper from '../../hoc/wrapper';

import './HistoryList.scss';

const historyList = (props) => {
    let message = <p>No history</p>

    if (props.items) {
        const rows = props.items.map(item => {
            return (
                <tr key={item.value}>
                    <td>{item.value}</td>
                    <td>{item.times}</td>
                    <td>{moment(item.date).format('DD/MM/YY')}</td>
                </tr>
            )
        })
        message = (
            <table className='table'>
                <thead>
                    <tr className='table-header'>
                        <th>Term</th>
                        <th>Times</th>
                        <th>Last Search</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }

    return (
        <Wrapper>
            {message}
        </Wrapper>
    )
}

export default historyList;