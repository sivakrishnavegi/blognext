import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents } from '../../helpers/api-util'
 const AllEventsPage = (props) => {
    const router = useRouter() 

     const {events} = props;

     function findEventsHandler(year , month) {
         const fullPath = `/events/${year}/${month}`
         router.push(fullPath);
     }
    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events} />
        </Fragment>
    )
}

export const getStaticProps = async (ctx) => {
const events = await getAllEvents()

    return {
        props:{
            events:events
        },
        revalidate :60
    }
}


export default AllEventsPage