import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}/> {/* spread operator를 사용하면 간단하게 input의 속성들을 설정할 수 있다 */}
    </div>
});

export default Input;