import React from "react";
import Clock01 from "./Clock01";
import Clock02 from "./Clock02";

export default function() {

    return(
        <div>
        <p>{`JSX Tutorials - 특징3: JSX 표현식 표기법{expression}과 문제점` }</p>
        <Clock01 />
        <Clock02 />
        </div>
        )
    }