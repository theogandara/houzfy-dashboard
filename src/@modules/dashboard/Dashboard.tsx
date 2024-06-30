import LayoutDefault from "../../layouts/LayoutDefault";
import { P, Subtitle, Title } from "../../components/Texts/Texts";
import { Flex, Text } from "@chakra-ui/react";
import { useLoadingStore } from "../../store/loading.store";
import { useEffect } from "react";

export const Dashboard = () => {
  const { setShow } = useLoadingStore();

  const fetchDashboardData = async () => {
    setShow(true);
    try {
      // Fetch data here
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setShow(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <LayoutDefault>
      <Title>Dashboard</Title>
      <Subtitle>Your current sales summary and activity.</Subtitle>

      <Flex gap="24px" flexDir={{ mobile: "column", tablet: "row" }} mt="24px">
        <DashCard
          title="Casas para alugar"
          value="66"
          vsLastMonth="vs last month"
          color="blue"
        />

        <DashCard
          title="Casas para vender"
          value="98"
          vsLastMonth="vs last month"
          color="yellow"
        />
      </Flex>
    </LayoutDefault>
  );
};

const DashCard = ({ title, value, vsLastMonth, color }: any) => {
  let bgColor = "";
  let borderColor = "";

  switch (color) {
    case "blue":
      bgColor = "#F0F9FF";
      borderColor = "#B9E6FE";
      break;
    case "green":
      bgColor = "#ECFDF3";
      borderColor = "#ABEFC6";
      break;
    case "yellow":
      bgColor = "#FFFAEB";
      borderColor = "#FEDF89";
      break;
  }

  return (
    <Flex
      bg={bgColor}
      w="100%"
      borderRadius="4px"
      border="2px solid"
      borderColor={borderColor}
      p="16px"
      gap="16px"
      flexDir="column"
    >
      <Text
        fontWeight="500"
        fontSize="24px"
        lineHeight="32px"
        color="text.black"
      >
        {title}
      </Text>
      <Text
        fontWeight="500"
        fontSize="36px"
        lineHeight="44px"
        color="text.black"
      >
        {value}
      </Text>
      <P>{vsLastMonth}</P>
    </Flex>
  );
};
