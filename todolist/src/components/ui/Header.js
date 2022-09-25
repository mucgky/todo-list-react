import React from 'react';
import InputPacking from './InputPacking';

export default function Header(props) {
    return (
        <header>
            <h1>Things To Do</h1>
            <InputPacking {...props}/>
        </header>
    );
}
