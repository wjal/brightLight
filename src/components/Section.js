import { forwardRef } from "react";

const Section = ({text}, ref) => {
    
    return (
    <div ref={ref}className="section-wrapper">
        <h2 >{text}</h2>
    </div>)
}

export default forwardRef(Section);