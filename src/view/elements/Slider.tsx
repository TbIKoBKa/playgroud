// Core
import React, { ChangeEvent, FC, useEffect } from 'react';
import styled from 'styled-components';
import { Label } from '.';

// Interfaces
interface SliderProps {
    min: number,
    max: number,
    step?: number,
    start?: number,
    label?: string,
    value: number | null,
    onChangeValue: Function,
}

// Styles
const SliderWrapper = styled.div(() => ({
    backgroundColor: 'rgb(63, 68, 102)',
    padding:         '8px 14px',
    width:           'fit-content',
    borderRadius:    '6px',
}));

export const Slider: FC<SliderProps> = ({ max, min, step, start, label, value, onChangeValue }) => {
    useEffect(() => {
        onChangeValue(start);
    }, []);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(event.target.value);
    };

    return (
        <SliderWrapper>
            <input
                max = { max }
                min = { min }
                step = { step }
                type = 'range'
                value = { `${ value ? String(value) : '' }` }
                onChange = { onChange }
            />
            <Label
                fontSize = { 12 }
                textAlign = 'center'>
                {`${label}: ${value}`}
            </Label>
        </SliderWrapper>
    );
};
