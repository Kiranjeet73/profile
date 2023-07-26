import React from 'react'
import './third.css'
import Timeline from '@mui/lab/Timeline/Timeline'
import TimelineItem from '@mui/lab/TimelineItem/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent/TimelineContent'

const Third = () => {
  return (
    <div className='body'>
        <h1 id='education'>Education</h1>
    <div className='third'>
       
       <Timeline>
      <TimelineItem  position="left">
        <TimelineSeparator>
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><button className='normal'>01/2017- 08/2018</button>
        <p>Lambton College, Mississauga</p>
        <p  className='A'>Advanced Project Management Graduate Diploma</p></TimelineContent>
      </TimelineItem>
     
      
      <TimelineItem  position="right">
        <TimelineSeparator>
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><button className='normal'>2013-2016</button>
        <p>Shri Guru Teg Bahadur Khalsa College, Shri Aanadpur Sahib</p>
        <p>Bachelor of Science (Non-Medical)</p></TimelineContent>
      </TimelineItem>
      </Timeline>
    </div>
    </div>
  )
}

export default Third
