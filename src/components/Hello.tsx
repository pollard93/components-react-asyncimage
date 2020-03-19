import React from 'react';
import './Hello.css';

export interface HelloProps { content: string; }

export const Hello = (props: HelloProps) => <h1 className="hello__wrap">{props.content}</h1>;
