import React, { Component } from 'react';
import "./CADR.css"

export function CADR() {
    return (
        <div id="cadr-wrapper">
            <div class="cadr-input" id="cadr-input-left">
                <p id="cadr-input-text">What is the clean air delivery rate of the air cleaner?</p>
                <input type="text" id="cadr-input"/>
            </div>
            <div class="cadr-input" id="cadr-input-right">
                <p><span id="cadr-text-tip">Tip:</span> Find the CADR (clean air delivery rate) from the manufacturer in units of cubic feet per minute, or cfm; if they report multiple numbers, use the one for 'dust'</p>
            </div>
        </div>
    )
}