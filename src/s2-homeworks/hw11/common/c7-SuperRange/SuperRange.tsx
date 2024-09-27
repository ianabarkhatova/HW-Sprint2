import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',

                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    width: '147px',
                    height: '4px',
                    borderRadius: '10px 0px 0px 0px',

                },

                '& .MuiSlider-track': {
                    backgroundColor: '#01CB22',
                    border: 'none',

                },

                '& .MuiSlider-thumb': {
                    color: '#00CC22',
                    width: '18px',
                    height: '18px',
                }

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
