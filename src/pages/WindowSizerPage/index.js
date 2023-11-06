import React from 'react';
import WindowResize from '../../components/WindowResize';

const WindowSizerPage = () => {
    return (
        <div>
            <WindowResize>
                {(state) => {
                    const {x, y} = state;
                    return (
                        <div>
                            <p>Current width = {x}px</p>
                            <p>Current height = {y}px</p>
                        </div>
                    );
                }}
            </WindowResize>
        </div>
    );
}

export default WindowSizerPage;
