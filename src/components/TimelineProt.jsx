// import { Page, Eventcalendar, getJson, Toast } from '@mobiscroll/react';
// import React from 'react';

// function TimelineProt() {

//     const [myEvents, setEvents] = React.useState([]);
//     const [isToastOpen, setToastOpen] = React.useState(false);
//     const [toastText, setToastText] = React.useState();

//     React.useEffect(() => {
//         getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
//             setEvents(events);
//         }, 'jsonp');
//     }, []);
    
//     const closeToast = React.useCallback(() => {
//         setToastOpen(false);
//     }, []); 
    
//     const onEventClick = React.useCallback((event) => {
//         setToastText(event.event.title);
//         setToastOpen(true);
//     }, []);
    
//     const view = React.useMemo(() => {
//         return {
//             schedule: { type: 'day' }
//         };
//     }, []);

//     return <Page>
//         <Eventcalendar
//             theme="ios" 
//             themeVariant="light"
//             clickToCreate={true}
//             dragToCreate={true}
//             dragToMove={true}
//             dragToResize={true}
//             eventDelete={true}
//             data={myEvents}
//             view={view}
//             onEventClick={onEventClick}
//        />
//         <Toast 
//     		message={toastText}
//     		isOpen={isToastOpen}
//             onClose={closeToast}
//     	/>
//     </Page>
// }

// export default TimelineProt;

import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson } from '@mobiscroll/react';

function TimelineProt() {

    const [myEvents, setEvents] = React.useState([]);

    const view = React.useMemo(() => {
        return {
            timeline: {
                type: 'week'
            }
        };
    }, []);
    
    const myResources = React.useMemo(() => {
        return [{
            id: 1,
            name: 'Ryan',
            color: '#fdf500'
        }, {
            id: 2,
            name: 'Kate',
            color: '#ff4600'
        }, {
            id: 3,
            name: 'John',
            color: '#ff0101'
        }, {
            id: 4,
            name: 'Mark',
            color: '#239a21'
        }, {
            id: 5,
            name: 'Sharon',
            color: '#8f1ed6'
        }, {
            id: 6,
            name: 'Ashley',
            color: '#01adff'
        }];
    }, []);
    
    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/timeline-events/', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);

    return (
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            view={view}
            data={myEvents}
            resources={myResources}
       />
    ); 
}

export default TimelineProt;