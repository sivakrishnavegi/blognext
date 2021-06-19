import React , {useRef} from 'react'
import Button from '../ui/Button'
import classes from '../../styles/events-search.module.css'
const EventSearch = (props) => {      
    const yearInputRef = useRef('')
    const monthInputRef = useRef('')
    function submitHandler (event) {
        event.preventDefault();
        
      const selectedYear = yearInputRef.current.value;
      const selectedMonth = monthInputRef.current.value;
    
      props.onSearch(selectedYear, selectedMonth)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option  value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">March</option>
                        <option value="4">Apirl</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">september</option>
                        <option value="10">october</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventSearch
