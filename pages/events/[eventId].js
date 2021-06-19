import React, { Fragment } from 'react'
import { getAllEvents,getFeaturedEvents, getEventById } from '../../helpers/api-util';

import EventSummary from '../../components/eventDetail/event-summary';
import EventLogistics from '../../components/eventDetail/event-logistics';
import EventContent from '../../components/eventDetail/event-content'
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/Button';

const EventDetailPage = (props) => {

    const event = props.selectedEvent;

    if(!event){
        return <Fragment><div className="center"><p>loading...</p></div><div className='center'><Button link="/events">Show All eventes</Button></div></Fragment>
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
export async function getStaticProps(context) {
    const eventId = context.params.eventId;
  
    const event = await getEventById(eventId);
  
    return {
      props: {
        selectedEvent: event
      },
      revalidate: 30
    };
  }
  
  export async function getStaticPaths() {
    const events = await getFeaturedEvents();
  
    const paths = events.map(event => ({ params: { eventId: event.id } }));
  
    return {
      paths: paths,
      fallback: 'blocking'
    };
  }
  

export default EventDetailPage
