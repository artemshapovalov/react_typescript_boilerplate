import * as React from 'react';
import { Hello } from "../../components/hello/Hello";

interface AppProps {}

export default function ({ }: AppProps) {
    return (
        <Hello compiler="typescript" framework="react" />
    );
}
