import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import { getFilteredEvents } from '../../data/DUMMY_DATA';
import ErrorAlert from '../../components/ui/error-alert'
const FiltredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if(!filterData){
      return <p className='center'>...loading</p>
  }

  const filtredYear = filterData[0];
  const filtredMonth = filterData[1];
//string to number
  const numYear = +filtredYear;
  const numMonth =+filtredMonth;

if(isNaN(numMonth) || isNaN(numYear) || numYear > 2030  || numYear < 2021 || numMonth < 0  || numMonth > 12){
    return <Fragment><ErrorAlert><p>invalid filter</p></ErrorAlert>
    <div className="center"><Button link="/events">show all events</Button></div></Fragment>
}

  const filtredEvents = getFilteredEvents({
      year :numYear,
      month :numMonth
  });

  if(!filtredEvents || filtredEvents.length === 0){
      return <Fragment>
          <ErrorAlert><p> no events found for th filter </p></ErrorAlert>
          <div className="center">
        <Button link="/events">show all events</Button>
        </div>
        </Fragment>
  }

const date = new Date(numYear, numMonth-1);

    return (
        <Fragment>
            <ResultsTitle  date={date}/>
            <EventList items={filtredEvents}  />
        </Fragment>
    )
}

export default FiltredEventsPage
