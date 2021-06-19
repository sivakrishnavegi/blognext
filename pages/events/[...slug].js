import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import { getFilteredEvents } from '../../helpers/api-util';
import ErrorAlert from '../../components/ui/error-alert'
const FiltredEventsPage = (props) => {
  const router = useRouter();

//   const filterData = router.query.slug;

//   if(!filterData){
//       return <p className='center'>...loading</p>
//   }

//   const filtredYear = filterData[0];
//   const filtredMonth = filterData[1];
// //string to number
//   const numYear = +filtredYear;
//   const numMonth =+filtredMonth;

if(props.hasError){
    return <Fragment><ErrorAlert><p>invalid filter</p></ErrorAlert>
    <div className="center"><Button link="/events">show all events</Button></div></Fragment>
}

  const filtredEvents = props.events;

  if(!filtredEvents || filtredEvents.length === 0){
      return <Fragment>
          <ErrorAlert><p> no events found for th filter </p></ErrorAlert>
          <div className="center">
        <Button link="/events">show all events</Button>
        </div>
        </Fragment>
  }

const date = new Date(props.numYear, props.numMonth-1);

    return (
        <Fragment>
            <ResultsTitle  date={date}/>
            <EventList items={filtredEvents}  />
        </Fragment>
    )
}


export const getServerSideProps = async (context) => {
 
    const { params } = context;

    const filterData = params.slug;

    const filtredYear = filterData[0];
    const filtredMonth = filterData[1];
  //string to number
    const numYear = +filtredYear;
    const numMonth = +filtredMonth;
  
  if(isNaN(numMonth) || isNaN(numYear) || numYear > 2030  || numYear < 2021 || numMonth < 0  || numMonth > 12){
      return {
         props : {hasError : true}
        // notFound : true,
        //  redirect: {
        //      destination : '/error'
        //  }
      }
  }
  
    const filtredEvents = await getFilteredEvents({
        year :numYear,
        month :numMonth
    });
  
  

    return {
        props:{
            events:filtredEvents,
            date:{
                year : numYear,
                month : numMonth
            }
        }
    }
}

export default FiltredEventsPage
