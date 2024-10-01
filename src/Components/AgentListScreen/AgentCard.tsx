import React, { useState } from 'react';
import './AgentCard.css';

interface imgDimensions {
    width: string;
    height: string;
    src: string;
    alt: string;
}

interface nameCardDimensions {
    width: string;
    height: string;
    backgroundColor: string;
    name: string;
}

function ImgCard({ width, height, src, alt }: imgDimensions) {
    const imgStyle: React.CSSProperties = {
        position: 'absolute',
        width,
        height,
    };

    return <img style={imgStyle} src={src} alt={alt} />;
}

function NameCard({ width, height, backgroundColor, name }: nameCardDimensions) {
    const nameCardStyle: React.CSSProperties = {
        width,
        height,
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0%'
        //positioning relative to the image lmfaoooo make sure
        //name card stays below img card
        //the name card isnt blocking it, something else is 
    };

    return <div style={nameCardStyle}>{name}</div>
}

interface AgentCardParams {
    width: string,
    height: string,
    imgCardHeight: string,
    nameCardHeight: string,
    imageSrc: string,
    imgAlt: string,
    nameCardColor: string,
    nameCardName: string
}

function AgentCard(params: AgentCardParams) {
    /*
    const [test, setTest] = useState("");

    function handleClick() {
        setTest(params.nameCardName)
    }*/
    //not ready to get htis part done yet, but now i know state saving is async, need to keep that in mind
    //rn the updated state can only be retrieved on the second render (i.e second clik i think?) of the iamge
    //i cant click the button at the name card

    return (<div className='agent-card' >
        <div style={{
            width: params.width, height: params.height,
            display: 'flex', flexDirection: 'column',
            margin: '12.5px', position: 'relative'
        }}>

            <ImgCard width={params.width} height={params.imgCardHeight} src={params.imageSrc} alt={params.imgAlt} />
            <NameCard width={params.width} height={params.nameCardHeight} backgroundColor={params.nameCardColor} name={params.nameCardName}></NameCard>\
            <a style={{ position: 'absolute', width: params.width, height: params.height, zIndex: 1000 }}
                href={`/Agents/${[params.nameCardName]}`}></a>
            {/* relative before for anchor pushed it down underneath text
            so absolute just makes it fill the space of its parent container */}

        </div>

    </div>);
}


export default AgentCard;