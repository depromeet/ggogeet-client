import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toggle from "@/src/components/common/Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [value, setValue] = useState<boolean>(false);
  return <Toggle {...args} isOn={value} onClick={() => setValue(!value)} />;
};

export const Default = Template.bind({});
