import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents } from '../../data/DUMMY_DATA'
 const AllEventsPage = () => {
    const router = useRouter() 

     const events = getAllEvents();

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

export default AllEventsPage