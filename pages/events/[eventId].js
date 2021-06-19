import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../data/DUMMY_DATA';

import EventSummary from '../../components/eventDetail/event-summary';
import EventLogistics from '../../components/eventDetail/event-logistics';
import EventContent from '../../components/eventDetail/event-content'

const EventDetailPage = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if(!event){
        return <p> no event found</p>
    }

    return (
       <Fragment>
           <EventSummary title={event.title}/>
           <EventLogistics  date={event.date} address={event.location} image={event.image} alt={event.title} />
           <EventContent >
               <p>
                   {event.description}
               </p>
           </EventContent>
       </Fragment>
    )
}

export default EventDetailPage