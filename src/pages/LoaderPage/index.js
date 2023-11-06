import React from 'react';
import DataProvider from '../../components/DataProvider';

const LoaderPage = () => {
    return (
        <div>
            <DataProvider loadData = {() => fetch('users.json').then(res => res.json())}>
            {(state) => {
                const {data, isFetching, error} = state;
        return (
            <div>
                {isFetching && <div>Loading users...</div>}
                {error && <div>{error.message}</div>}
                <ul>
                    {data.length && data.map((user) => <li key={user.id}>{user.name}</li>)}
                </ul>
            </div>
        );
            }}
            </DataProvider>
            <DataProvider loadData = {() => fetch('phones.json').then(res => res.json())}>
            {(state) => {
                const {data, isFetching, error} = state;
        return (
            <div>
                {isFetching && <div>Loading phones...</div> }
                {error && <div>{error.message}</div> }
                <ol>
                    {data.length && data.map((phone) => <li key={phone.id}>{phone.brand} --- {phone.model} --- {phone.price}</li>) }
                </ol>
            </div>
        );
            }}
            </DataProvider>
        </div>
    );
}

export default LoaderPage;
