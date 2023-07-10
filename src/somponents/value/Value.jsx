import React from 'react';
import './Value.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../JsonPackages/dataValue';
function Value() {
    return (
        <section className='v-wrapper'>
            <div className='paddings innerWidth flexCenter v-container'>
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="just img" />
                    </div>
                </div>

                <div className="v-right flexColStart">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value we give to you</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you <br /> we belive a good blace to live can make life better</span>


                    <Accordion
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        className='accordion'
                    >
                      {
                        data.map((item,i)=>{
                            return(
                                <AccordionItem className='accordionItem' key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordionButton flexCenter'>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className='primaryText'>{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='secondaryText'>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })
                      }
                    </Accordion>

                </div>
            </div>
        </section>
    )
}

export default Value