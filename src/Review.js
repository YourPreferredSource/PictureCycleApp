import React, { useState } from 'react';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
import { IoAperture, IoPeople } from 'react-icons/io5';
import aspects from './data';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {id, name, alternate, image, text} = aspects[index];

    const checkNumber = (number) => {
        if (number > aspects.length - 1) {
            return 0;
        }
        if (number < 0) {
            return aspects.length -1;
        }
        return number;
    };

    const cycleRight = () => {
        setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex)
        });
    };

    const cycleLeft = () => {
        setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex)
        });
    };

    const randomAspect = () => {
        let randomNumber = Math.floor(Math.random() * aspects.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (

        <article >
            <div className = "pic-container">
                <img className="aspectPic" src={image} alt={name}/>
                <span className = "aperturePic">
                    <IoAperture />
                </span>
                <span className="peoplePic">
                    <IoPeople />
                </span>
            </div>
            <h3>{name}</h3>
            <h4>{alternate}</h4>
            <p>{text}</p>
            <div>
                <button onClick={cycleLeft}>
                    <AiOutlineCaretLeft />
                </button>
                <button onClick={cycleRight}>
                    <AiOutlineCaretRight />
                </button>
            </div>
            <button className="btn" onClick={randomAspect}>
                Surprise!
            </button>

        </article>

    )
}

export default Review