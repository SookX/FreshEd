import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import Timeline from "./timeline/Timeline.jsx"
import { DataContext } from '../context/DataContext';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MyLearning = () => {

    const { corections } = useContext(DataContext)


    const [loading, setLoading] = useState(true)

    const id = useParams().id

    const [element, setElement] = useState()

    useEffect(() => {
        setElement(corections.find(corection => corection.id === +id))

    }, [corections, id])

    useEffect(() => {
        console.log(corections)
    }, [corections])


    useEffect(() => {
        if (element) setLoading(false)
    }, [element])

    return (
        element && element.mistakes && element.mistakes.length > 0 &&
        <div className="aqua">
            <VerticalTimeline>
                {element.mistakes.map((e, i) => {
                    return (
                        <VerticalTimelineElement
                            key={id}
                            contentStyle={{ background: 'rgb(4, 170, 107, 0.2)', color: '#82d5b5', height: '100%', padding: '1rem', fontSize: '4rem', border: 'none', boxShadow: 'none' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(4, 170, 107, 0.2)' }}
                            iconStyle={{ background: '#0c1720', color: '#625149', height: '3rem', width: '3rem', margin: '0 0 0 -15px' }}
                        >
                            <h3 className="vertical-timeline-element-title">{e.question}</h3>
                            <div style={{ display: 'flex' }}>
                                <p style={{ marginRight: '1rem', fontSize: '1.7rem', color: '#2f0000' }}>Your answer: {e.chosen}</p>
                                <p style={{ marginRight: '1rem', fontSize: '1.7rem' }}>Correct answer: {e.correct}</p>
                            </div>

                            <p style={{ fontSize: '2rem' }}> {e.description}</p>
                        </VerticalTimelineElement>

                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default MyLearning;