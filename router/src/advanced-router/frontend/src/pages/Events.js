import { defer, json, useLoaderData, Await } from "react-router-dom";
import { Suspense, Fragment } from "react";

import EventsList from "../components/EventsList";

const EventsPage = () => {
    const { events } = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
             <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/> }
            </Await>
        </Suspense>
    );
   

    // << 1st >>
    // if (data.isError) {
    //   return <p>{data.message}</p>
    // }

    // << 2nd >>
    // const events = data.events;
    // return (
    //     <Fragment>
    //         <EventsList events={events} />
    //     </Fragment>
    // );
};

export default EventsPage;

const loadEvents = async () => {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.' };
        // throw { message: 'Could not fetch events.' };
        // throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), {status: 500},);
        return json({ message: "Could not fetch events." }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
        
        // return response;
    }
};

// App.js에서 사용하지 않도록
export const loader = () => {
    return defer({
        events: loadEvents()
    });
};
