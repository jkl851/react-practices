import React from 'react';

export default function({title, description, tasks}) {
    return (
        <div className='Card'>
            <div className='Card__Title'>{title}</div>
            <div className='Card__Details'>
                {description}
            </div>
            <TaskList tasks={tasks} />

            <div className='TaskList'>
                <ul>
                </ul>
            </div>
        </div>        
    );
}