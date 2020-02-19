import React from 'react';
import { HeaderWrapper, WizardItem } from './style';

const WizardProgress = ({option1, option2, option3, activeOption}) => {
    return (    
        <HeaderWrapper>
            <WizardItem variant={activeOption===1 ? 'active' : 'done'}>{option1}</WizardItem>
            <WizardItem variant={activeOption===2 ? 'active' : activeOption===3 ? 'done' : ''}>{option2}</WizardItem>
            <WizardItem variant={activeOption===3 ? 'active' : ''}>{option3}</WizardItem>
        </HeaderWrapper>
    );
};

export default WizardProgress;