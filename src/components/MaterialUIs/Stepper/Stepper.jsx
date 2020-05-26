import React, { useCallback } from "react";
import { Container, StepWrapper } from "./style";
import PropTypes from "prop-types";

const Stepper = ({ steps, activeStepIndex }) => {
  const getStatus = useCallback(
    (index) => {
      return index === activeStepIndex
        ? "active"
        : index < activeStepIndex
        ? "done"
        : "preActive";
    },
    [activeStepIndex]
  );
  return (
    <Container>
      {steps &&
        steps.length > 0 &&
        steps.map((step, index) => (
          <StepWrapper status={getStatus(index)} key={step}>
            {step}
          </StepWrapper>
        ))}
    </Container>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  activeStepIndex: PropTypes.number.isRequired,
};

Stepper.defaultProps = {
  activeStepIndex: 0,
};

export default Stepper;
