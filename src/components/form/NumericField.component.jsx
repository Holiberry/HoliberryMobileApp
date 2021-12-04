import React from 'react'
import NumericInput from 'react-native-numeric-input'
import colors from '../../constants/colors'

const NumericField = ({value, onChange, width}) => {
    return (
        <NumericInput
            value={value}
            onChange={onChange}
            totalWidth={width}
            totalHeight={40}
            iconSize={30}
            valueType='real'
            rounded
            textColor={colors.primary}
            iconStyle={{color: colors.white}}
            rightButtonBackgroundColor={colors.primary}
            leftButtonBackgroundColor={colors.primary}
            borderColor={colors.primary}
        />
    )
}


export default NumericField;
