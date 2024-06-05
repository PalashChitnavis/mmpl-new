/* eslint-disable react/prop-types */
import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { data } from "../data";

export default function AccordionMaker({ changeProduct }) {
  const renderItems = (type) => {
    return data
      .filter((item) => item.type === type)
      .map((item) => (
        <AccordionItemPanel key={item.name}>
          <div
            onClick={() => changeProduct(item)}
            className="underline w-full cursor-pointer h-full underline-offset-8 flex justify-center items-center border-black"
          >
            {item.name}
          </div>
        </AccordionItemPanel>
      ));
  };

  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Screw And Bolts</AccordionItemButton>
        </AccordionItemHeading>
        {renderItems("Screw And Bolts")}
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Stud And Threaded Bars</AccordionItemButton>
        </AccordionItemHeading>
        {renderItems("Stud And Threaded Bars")}
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Nuts</AccordionItemButton>
        </AccordionItemHeading>
        {renderItems("Nuts")}
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Washers</AccordionItemButton>
        </AccordionItemHeading>
        {renderItems("Washers")}
      </AccordionItem>
    </Accordion>
  );
}
