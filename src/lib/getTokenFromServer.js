import React from 'react';
import { auth } from './auth';
import { headers } from 'next/headers';

const getTokenFromServer = async() => {
    const jwtToken = await auth.api.getToken({
            headers: await headers()
        })
        const token = jwtToken?.token
    return token;
};

export default getTokenFromServer;