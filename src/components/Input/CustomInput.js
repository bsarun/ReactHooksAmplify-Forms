import * as React from 'react';
import {
    TextField,
} from '@aws-amplify/ui-react';


const Input = (props) => {

    return (
        <TextField
            autoComplete="off"
            className={props.className}
            direction="column"
            hasError={props.hasError}
            inputMode={props.inputMode}
            isDisabled={false}
            isReadOnly={false}
            isRequired={false}
            labelHidden={false}
            name={props.name}
            placeholder={props.placeholder}
            errorMessage={props.errorMessage}
            type={props.inputMode}
            wrap="nowrap"
            onChange={(e) => props.onChange(e, e.currentTarget.value, props.name)}
            onInput={(e) => console.info('input fired:', e.currentTarget.value)}
            onCopy={(e) => console.info('onCopy fired:', e.currentTarget.value)}
            onCut={(e) => console.info('onCut fired:', e.currentTarget.value)}
            onPaste={(e) => console.info('onPaste fired:', e.currentTarget.value)}
            onSelect={(e) =>
                console.info(
                    'onSelect fired:',
                    e.currentTarget.value.substring(
                        e.currentTarget.selectionStart,
                        e.currentTarget.selectionEnd
                    )
                )
            }
        />
    )
}

export default Input;