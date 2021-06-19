import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents } from '../../data/DUMMY_DATA'
 const AllEventsPage = () => {
     const events = getAllEvents();
    return (
        <Fragment>
            <EventSearch />
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventsPage