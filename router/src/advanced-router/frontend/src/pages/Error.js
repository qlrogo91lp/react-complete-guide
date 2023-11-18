import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

const ErrorPage = () => {
    const error = useRouteError();
    
    // default
    let title = 'An error occured!';
    let message = error.data.message;

    if (error.status === 500) {
        // message = JSON.parse(error.data).message;
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resouce or page';
    }

    return (
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    );
};

export default ErrorPage;