import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { BasicInfos } from "./form/BasicInfos";
import { LocationInfos } from "./form/LocationInfos";
import { DetailInfos } from "./form/DetailInfos";
import { PersonalInfos } from "./form/PersonalInfos";
import { useNewPropertyStore } from "./store/NewPropertyStore";

import {
  Button,
  Divider,
  Flex,
  Box,
  useSteps,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";

export const NewProperty = () => {
  const { step, setStep } = useNewPropertyStore();

  const RenderForm = () => {
    switch (step) {
      case 0:
        return <BasicInfos />;
      case 1:
        return <LocationInfos />;
      case 2:
        return <DetailInfos />;
      case 3:
        return <PersonalInfos />;
      default:
        return <BasicInfos />;
    }
  };

  const onProgress = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const onBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const steps = [
    { title: "Básico" },
    { title: "Localização" },
    { title: "Detalhes" },
    { title: "Credenciais" },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <LayoutDefault>
      <Title>Cadastrar imóvel</Title>
      <Subtitle>Your current sales summary and activity.</Subtitle>
      <Divider mt="24px" />

      <Stepper
        display={{ mobile: "none", tablet: "flex" }}
        mt="24px"
        size="lg"
        index={step}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <Flex w="full" gap="12px" flexDir="column" mt="24px">
        <RenderForm />
      </Flex>

      <Flex mt="24px" gap="24px">
        {step > 0 && (
          <Button onClick={onBack} colorScheme="gray">
            Voltar
          </Button>
        )}

        <Button w="full" colorScheme="blue" onClick={onProgress}>
          {step === 3 ? "Finalizar" : "Próxima etapa"}
        </Button>
      </Flex>
    </LayoutDefault>
  );
};
