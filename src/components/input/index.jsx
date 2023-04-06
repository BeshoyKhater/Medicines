import React from 'react';
import {
  Label, Input, FormFeedback, InputGroupText,
} from 'reactstrap';
import { ErrorMessage } from '@hookform/error-message';
import { getErrorsByPath } from '../../helpers';

const InputField = React.forwardRef(
  (
    {
      underlined,
      inputGroup,
      inputGroupTextBefore,
      inputGroupTextAfter,
      inputGroupBeforeText,
      inputGroupAfterText,
      hasOpacity,
      wrapperClassName,
      theme,
      handleChange,
      value,
      readOnly,
      ...props
    },
    ref,
  ) => {
    const errors = props.errors || [];

    return (
      <div
        className={`${underlined ? 'underlined-input' : 'outlined-input'} 
        ${inputGroup ? 'input-group' : ''} 
        ${hasOpacity ? 'input-opacity' : ''} 
        ${wrapperClassName || ''}
        ${theme === 'dark' ? 'dark' : ''}`}
      >
        {inputGroupTextBefore && (
          <InputGroupText>{inputGroupBeforeText}</InputGroupText>
        )}
        <Input
          id={props.name}
          className={`${props.className}`}
          innerRef={ref}
          invalid={getErrorsByPath(errors, props.name) && true}
          placeholder={`${props.placeholder || ' '}`}
          autoComplete="off"
          readOnly={!!readOnly}
          {...props}
        />
        <Label for={props.name}>{props.label}</Label>
        {inputGroupTextAfter && (
          <InputGroupText>{inputGroupAfterText}</InputGroupText>
        )}
        <ErrorMessage
          errors={errors}
          name={props.name}
          render={({ message }) => <FormFeedback>{message}</FormFeedback>}
        />
      </div>
    );
  },
);

export default InputField;
