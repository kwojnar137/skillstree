import styled from 'styled-components';




const ViewIcon = styled.div`
pointer-events: stroke;

/* pointer-events: fill; */
/* pointer-events: visible; */
/* pointer-events: visibleStroke; */
/* pointer-events: painted;  */
/* pointer-events: visibleFill;  */
/* pointer-events: visiblePainted; */
/* pointer-events: all; */


display: flex;
align-items:center;
opacity: ${props => props.activeId ? '100%' : '60%'};


&:hover {
        opacity: 80%;
      }

`

export default ViewIcon



