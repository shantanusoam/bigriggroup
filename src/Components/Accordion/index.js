import { React, useState } from 'react';
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated } from 'react-spring';

function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  const styles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? '#10d6f5' : '#fff',
    },
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: '0', maxHeight: '25px' },
    to: { opacity: '1', maxHeight: open ? '200px' : '25px' },
    config: { duration: '300' },
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: 'rotate(0deg)',
      color: '#ffff',
    },
    to: {
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      color: open ? '#10d6f5' : '#fff',
    },
    config: { duration: '120' },
  });

  return (
    <animated.div className="accordion__item" style={openAnimation}>
      <div className="accordion__header" onClick={toggleHandler}>
        <h4
          style={styles.accordionTitle}
          className="text-Heading text-5xl font-sub-heading font-semibold w-4/5 leading-44px pt-6"
        >
          {props.title}
        </h4>
        <animated.i style={iconAnimation}>
          {/* <ExpandMoreIcon /> */}
        </animated.i>
      </div>
      <p className="accordion__content text-2xl pt-12 font-normal w-64">
        {props.text}
      </p>
    </animated.div>
  );
}

export default Accordion;
