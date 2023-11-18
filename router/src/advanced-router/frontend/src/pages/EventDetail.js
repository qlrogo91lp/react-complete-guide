import { Fragment } from "react";
import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from '../components/EventItem';

const EventDetailPage = () => {
    // const data = useLoaderData();
    const data = useRouteLoaderData('event-detail');

    return (
        <Fragment>
            <EventItem event={data.event} />
        </Fragment>
    );
};

export default EventDetailPage;

// loader에서는 useParams 훅을 사용할 수 없기 때문에
export const loader = async ({ request, params }) => {
    // 동적 router
    const id = params.eventId;

    // Router woulld automatically wait for the promise and gives us access to the data
    // return  fetch('http://localhost:8080/events/' + id);
    const response = await fetch('http://localhost:8080/events/' + id);
    
    if (!response.ok) { 
        throw json({ message: 'Could not fetch details for selected event.'}, { status: 500 });
    } else {
        return response;
    };
};

export const action = async ({ params, request }) => {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        // EventItem에서 set 한 method 값
        method: request.method
    });

    if (!response.ok) { 
        throw json({ message: 'Could not delete event.'}, { status: 500 });
    } 

    return redirect('/events');
};