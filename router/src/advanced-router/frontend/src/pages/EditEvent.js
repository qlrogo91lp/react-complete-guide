import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

const EditEventPage = () => {
    // 상위 route에서 가져올수 없기 때문에 
    // const data = useLoaderData();
    // route의 id 값을 param으로 받는다
    const data = useRouteLoaderData('event-detail');

    return (
        <EventForm method="patch" event={data.event} />
    );
};

export default EditEventPage;