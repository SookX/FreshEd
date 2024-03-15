const Timeline = () => {

    const events = [
        {
            "Heading": "Battle of Hastings",
            "subheading": "A pivotal event in English history that resulted in the Norman conquest of England.",
            "direction": "left"
        },
        {
            "Heading": "Signing of the Declaration of Independence",
            "subheading": "The founding document of the United States, declaring independence from the Kingdom of Great Britain.",
            "direction": "right"
        },
        {
            "Heading": "French Revolution",
            "subheading": "A period of radical social and political upheaval in France that had a lasting impact on the country and the world.",
            "direction": "left"
        },
        {
            "Heading": "Fall of the Berlin Wall",
            "subheading": "The symbolic end of the Cold War and the reunification of East and West Germany.",
            "direction": "right"
        },
        {
            "Heading": "The Renaissance",
            "subheading": "A period of great cultural and artistic change in Europe.",
            "direction": "left"
        },
        {
            "Heading": "Invention of the Printing Press",
            "subheading": "A technological advancement that revolutionized the spread of information and knowledge.",
            "direction": "right"
        },
        {
            "Heading": "The Industrial Revolution",
            "subheading": "A period of major industrialization and economic development that transformed society.",
            "direction": "left"
        },
        {
            "Heading": "Moon Landing",
            "subheading": "The first human landing on the moon as part of the Apollo 11 mission.",
            "direction": "right"
        },
        {
            "Heading": "World War II",
            "subheading": "A global conflict that lasted from 1939 to 1945, resulting in significant geopolitical changes.",
            "direction": "left"
        },
        {
            "Heading": "Civil Rights Movement",
            "subheading": "A social movement in the United States that aimed to end racial segregation and discrimination.",
            "direction": "right"
        }
    ];
    return (
        <main className="section-main">
            <div className="timeline">
                {events.map((event, key) => (
                    <Fragment key={key}>
                        <div className="grid">
                            {key % 2 == 0 ? (
                                <div className="card-container-left"><EventCard heading={event.title} subHeading={event.description} /></div>
                            ) : (
                                <div className="circle-container">
                                    <TimeLineMark name='circle' />
                                </div>
                            )
                            }


                            {key % 2 != 0 ? (
                                <div className="card-container-right"><EventCard heading={event.title} subHeading={event.description} /></div>
                            ) : (
                                <div className="circle-container">
                                    <TimeLineMark name='circle' />
                                </div>
                            )
                            }


                        </div>
                        {key < (events.length - 1) && <TimeLineMark name="pillar" />}
                    </Fragment>
                ))}
            </div>
            {/* <div><button className="rounded-btn">+</button></div> */}
        </main>
    )
}

export default Timeline